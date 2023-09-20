import axios from "axios";


import { featchinguser,featchinguserSuccessful,featchinguserfailed } from "../Redux/alluserdata";


export const alluser = (dispatch,values)=>{
    dispatch(featchinguser())
    console.log(values);
    setTimeout(() => {
        axios.post("http://localhost:2456/new_user/login", {
            email: values.email,
            password: values.password,
          })
        .then((res) => {
            console.log(res.data);
    alert(res.data.message);
    console.log(userdata);
    navigate("/userdashboard")

        dispatch(featchinguserSuccessful(res.data))
        alert("Fetched successfully")
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        dispatch(featchinguserfailed(err.message))
        console.log(err.message);
            console.log(err);
            alert(err.response.data.message);
      })
      }, 5000);
}





