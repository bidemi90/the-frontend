import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  featchingadmin,
  featchingadminSuccessful,
  featchingadminfailed,
} from "./Redux/alladmindata";
import { Link } from "react-router-dom";

const Adminloginpage = () => {
  const { isFetchingadmin, admindata, isFeatchingadminfailed } = useSelector(
    (state) => state.alladmindata
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
    dispatch(featchingadmin());
    console.log(isFetchingadmin);

    axios
      .post("http://localhost:2456/new_user/adlogin", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(featchingadminSuccessful(res.data.result));
        alert(res.data.message);
        console.log(admindata);
        // navigate("/admindashboard");

        console.log(isFetchingadmin);
      })
      .catch((err) => {
        console.log(err);
        dispatch(featchingadminfailed(err.message));
        console.log(isFeatchingadminfailed);
        console.log(err.message);
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <section className="bigsection w-100  d-flex  ">
      {isFetchingadmin && (
        <div className="ittop">
          <div className="takeloding"></div>
        </div>
      )}

      <div className=" col-6 takeimg   d-none d-lg-block"></div>

      <div className="col-12  col-lg-6  isit">
        <div className="logo m-auto"></div>
        <p className=" logotext text-center fs-4 text-capitalize">
          welcome to <b>ishop</b> back door
        </p>
        <div className="holdingform col-6 m-auto mt-5">
          <h2>Login To Admin</h2>
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

export default Adminloginpage;
