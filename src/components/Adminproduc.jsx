import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { TbEye } from "react-icons/tb";
import logo from "../assets/logo.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Route, Routes } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Adminproduc = () => {
  const [loading, setloading] = useState(false);

  const initialValues = {
    image: null, // Store image data
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  };

  const validationSchema = Yup.object().shape({
    image: Yup.mixed().required("Image is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    quantity: Yup.string().required("Quantity is required"),
    category: Yup.string().required("Category is required"),
  });

  const onSubmit = async (values) => {
    // Convert the values object to a JSON string
    const payloadString = JSON.stringify(values);
  
    // Calculate the length of the payload in bytes
    const payloadSizeInBytes = new TextEncoder().encode(payloadString).length;
  
    // Check if the payload size exceeds 10MB (in bytes)
    if (payloadSizeInBytes > 10 * 1024 * 1024) {
      alert("Payload size exceeds 10MB. Please reduce the payload size.");
      return; // Prevent the request from being sent
    }
  
    // If the payload size is within the limit, proceed with the request
    setloading(true);
  
    try {
      const response = await axios.post(
        "http://localhost:2456/new_user/adminproductadding",
        values
      );
      console.log(response.data);
      setloading(false);
      alert(response.data.message);
  
      // navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
      setloading(false);
      console.log(error.response.data.message);
    }
  };
  
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 100 KB (adjust as needed)

  const handleImageChange = (event, formik) => {
    const file = event.target.files[0];

    if (file) {
      // Check if the file size exceeds the limit
      if (file.size > MAX_FILE_SIZE) {
        alert(
          "Image size exceeds the allowed limit (2MB). Please choose a smaller image."
        );
        event.target.value = null; // Reset the input field
        return;
      }

      // Read the selected file as data
      const reader = new FileReader();
      reader.onload = (e) => {
        formik.setFieldValue("image", e.target.result); // Store image data
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      {loading && (
        <div className="ittop">
          <div className="takeloding"></div>
        </div>
      )}

      <div className=" w-100 d-flex justify-content-between align-items-center  fw-semibold text-capitalize">
        <p className=" fs-3 text-capitalize">header name </p>
      </div>
      <div className="tab rounded bg-white p-2">
        <div className=" d-flex talkingborderbottom  justify-content-between p-2 align-items-center">
          <form action="" className="w-50">
            <input
              type="text"
              placeholder="Search Product"
              className=" fw-semibold  oneinput rounded p-1"
            />
          </form>
          <div>
            <button
              type="button"
              className=" onebutt  fs-6 m-1 fw-semibold"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <MdAdd /> Add product
            </button>
          </div>
        </div>

        <div className="showingallproduct">
          <div className="holdingoneproduct position-relative rounded shadow m-2  ">
            <div className="quntity fw-semibold">Q=0</div>
            <div className="productimg">
              <img className=" h-100 w-100" src={logo} alt="" />
            </div>
            <div>
              <p className=" text-capitalize  fw-semibold productname ">
                productproductproductproductproductproductname
              </p>
            </div>
            <div className="w-100 d-flex justify-content-evenly align-items-center">
              <button className="btn btn-primary col-5 fs-6 m-1 fw-semibold px-2">
                <BiSolidEditAlt />
                edit
              </button>
              <button className="btn col-5 btn-danger fs-6 m-1 fw-semibold px-2">
                {" "}
                <MdOutlineDeleteSweep /> delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 thetextcolor"
                  id="staticBackdropLabel"
                >
                  Add product
                </h1>

                <button
                  type="button"
                  className="btn-close thetextcolor"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <span className=" mx-5 my-2 text-danger fs-6 text-capitalize">
                note: image should be less than 150KB
              </span>
              <div className="modal-body holdingtheform">
                {/* Input for uploading image */}
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  accept="image/*"
                  onChange={(event) => handleImageChange(event, formik)}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className="error">{formik.errors.image}</div>
                ) : null}
                {/* Image preview */}
                {formik.values.image && (
                  <img
                    src={formik.values.image}
                    alt="Product Preview"
                    className="preview-image"
                    style={{ maxWidth: "100%" }}
                  />
                )}
                <input
                  placeholder="Name"
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error text-danger">{formik.errors.name}</div>
                ) : null}
                <textarea
                  placeholder="Description"
                  className="form-control"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  cols="30"
                  rows="10"
                ></textarea>
                {formik.touched.description && formik.errors.description ? (
                  <div className="error text-danger">
                    {formik.errors.description}
                  </div>
                ) : null}
                <input
                  placeholder="Price in $"
                  className="form-control"
                  type="number"
                  name="price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                  <div className="error text-danger">{formik.errors.price}</div>
                ) : null}
                <input
                  placeholder="Quantity"
                  className="form-control"
                  type="number"
                  name="quantity"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quantity}
                />
                {formik.touched.quantity && formik.errors.quantity ? (
                  <div className="error text-danger">
                    {formik.errors.quantity}
                  </div>
                ) : null}

                <input
                  placeholder="Category"
                  className="form-control"
                  type="text"
                  name="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                />
                {formik.touched.category && formik.errors.category ? (
                  <div className="error">{formik.errors.category}</div>
                ) : null}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="onebutt"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminproduc;
