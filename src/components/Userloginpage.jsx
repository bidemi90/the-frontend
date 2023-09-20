import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  featchinguser,
  featchinguserSuccessful,
  featchinguserfailed,
} from "./Redux/alluserdata";
import { Link } from "react-router-dom";

const Userloginpage = () => {
  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.alluserdata
  );

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Data:", values);
    setSubmitting(false);
    dispatch(featchinguser());
    console.log(isFetchinguser);
  
      axios
        .post("http://localhost:2456/new_user/login", {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(featchinguserSuccessful(res.data.result));
          alert(res.data.message);
          console.log(userdata);
          // navigate("/userdashboard");
          
    console.log(isFetchinguser);
        })
        .catch((err) => {
          console.log(err);
          dispatch(featchinguserfailed(err.message));
          console.log(isFeatchinguserfailed);
          console.log(err.message);
          console.log(err);
          alert(err.response.data.message);
        });
  };

  return (
    <section className="bigsection w-100  d-flex  ">



   {isFetchinguser && 
     <div class="ittop">
     <div class="takeloding">

     </div>
     
    </div>
      }


      <div className=" col-6 takeimg   d-none d-lg-block"></div>

      <div className="col-12  col-lg-6  isit">
        <div className="logo m-auto"></div>
        <p className=" logotext text-center fs-4 text-capitalize">
          login to <b>ishop</b>{" "}
        </p>
        <div className="holdingform col-6 m-auto mt-5">
          <h2>login Form</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
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

              <button type="submit" className=" button">
                Register
              </button>

              <p className=" mt-4">
                {" "}
                <Link
                  className=" shadow text-capitalize fw-bold changecolor"
                  to="/signup"
                >
                  sign up for an account
                </Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Userloginpage;
