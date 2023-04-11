import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

function Signup() {
  const [User, setUser] = useState({
    username: "",
    duration: "",
    peoples: "",
    placenames: "",
    hotelname: "",
    restaurentname: "",
  });
  let name, value;
  const handelInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...User, [name]: value });
    console.log(value);
  };
  const HandelRegister = async (e) => {
    e.preventDefault();
    const {
      username,
      duration,
      peoples,
      placenames,
      hotelname,
      restaurentname,
    } = User;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        duration,
        peoples,
        placenames,
        hotelname,
        restaurentname,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("not successful");
    } else {
      window.alert("successful");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup_component">
            <div className="signup_form">
              <h2>signup</h2>
              <form method="POST" className="from">
                <div className="from_element">
                  <label htmlFor="name">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={User.username}
                    onChange={handelInput}
                    placeholder="Enter Your name"
                  />
                </div>
                <div className="from_element">
                  <label htmlFor="email">
                    <MailOutlineIcon />
                  </label>
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    autoComplete="off"
                    value={User.duration}
                    onChange={handelInput}
                    placeholder="Enter duration"
                  />
                </div>
                <div className="from_element">
                  <label htmlFor="phone">
                    <SmartphoneIcon />
                  </label>
                  <input
                    type="text"
                    name="peoples"
                    id="peoples"
                    autoComplete="off"
                    value={User.peoples}
                    onChange={handelInput}
                    placeholder="Enter peoples"
                  />
                </div>
                <div className="from_element">
                  <label htmlFor="password">
                    <LockOpenIcon />
                  </label>
                  <input
                    type="text"
                    name="placenames"
                    id="placenames"
                    autoComplete="off"
                    value={User.placenames}
                    onChange={handelInput}
                    placeholder="Enter places"
                  />
                </div>
                <div className="from_element">
                  <label htmlFor="cpassword">
                    <LockIcon />
                  </label>
                  <input
                    type="text"
                    name="hotelname"
                    id="hotelname"
                    autoComplete="off"
                    value={User.hotelname}
                    onChange={handelInput}
                    placeholder="Enter hotel"
                  />
                </div>
                <div className="from_element">
                  <label htmlFor="cpassword">
                    <LockIcon />
                  </label>
                  <input
                    type="text"
                    name="restaurentname"
                    id="restaurentname"
                    autoComplete="off"
                    value={User.restaurentname}
                    onChange={handelInput}
                    placeholder="Enterrestaurant"
                  />
                </div>
                <div className="from_element">
                  <input
                    type="submit"
                    name="signep"
                    className="submit_btn"
                    value="register"
                    onClick={HandelRegister}
                  />
                </div>
              </form>
            </div>
            <div className="signup_logo"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
