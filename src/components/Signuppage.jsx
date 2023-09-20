import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate, Route, Routes } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const SignupPage = () => {

  const [loading, setloading] = useState(false)


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
  };

  const navigate= useNavigate()

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    address: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    
    setloading(true)

    console.log('Form Data:', values);
    setSubmitting(false);
    try {
      const response = await axios.post(
        "http://localhost:2456/new_user/signup",
        values
      );
      console.log(response.data);
      setloading(false)
      
      alert(response.data.message)
      
  navigate("/")
    } catch (error) {
      console.error(error);
      alert(error.response.data.message)
      setloading(false)
      console.log(error.response.data.message);

    }


  };

  return (
    <section className="bigsection w-100  d-flex  ">

{loading && 
     <div className="ittop">
     <div className="takeloding">

     </div>
     
    </div>
      }

      <div className=' col-6 takeimg d-none d-lg-block'>
        
      </div>
      <div className=' col-12  col-lg-6  isit '>
      <div className="logo m-auto"></div>
      <p className=' logotext text-center fs-4 text-capitalize'>welcome to <b>ishop</b> </p>
      <div className="holdingform col-6  m-auto mt-5">
        <h2>Registration Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label className="form-label">First Name:</label>
              <Field
                type="text"
                className="form-control"
                name="firstName"
                required
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name:</label>
              <Field
                type="text"
                className="form-control"
                name="lastName"
                required
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                required
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <Field
                type="password"
                className="form-control"
                name="password"
                required
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password:</label>
              <Field
                type="password"
                className="form-control"
                name="confirmPassword"
                required
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address:</label>
              <Field
                as="textarea"
                className="form-control"
                name="address"
                required
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number:</label>
              <Field
                type="tel"
                className="form-control"
                name="phoneNumber"
                required
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-danger"
              />
            </div>
            <button type="submit" className=" button">
              Register
            </button>
            <p className=' mt-4'> <Link className=" shadow text-capitalize fw-bold changecolor" to="/">already have an account</Link></p>
          </Form>
        </Formik>
      </div>
      </div>
    </section>
  );
};

export default SignupPage;