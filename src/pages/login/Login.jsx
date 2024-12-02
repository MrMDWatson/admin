import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../app/appSplice";
import axios from "axios";
import "./login.scss";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [attention, setAttention] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAttention("Missing field");
      return;
    }
    /*
    axios({
      method: "post",
      url: "/login",
      data: {
        email,
        password
      },
    })
      .then((result) => {
        if (result.data.username) {
          console.log("Logging in");
        } else {
          setAttention("Incorrect password");
        }
        dispatch(setUser(result.data.username))
      })
      .catch((error) => {
        error = new Error();
        dispatch(setUser(null));
        setAttention("Error logging in");
      });
      */
    dispatch(setAdmin("Matthew"));
  }

  return (
    <div className="login-page">
      <div className="login-page-container">
        <div className="login-page-header">
          <h2 className="login-page-title">Login</h2>
        </div>
        <form className={`login-form ${attention ? "error" : "static"}`}>
          <div className="login-form-group">
            <label htmlFor="login-form-email" id="login-form-email-label">Email</label>
            <input
              className="login-form-email"
              id="login-form-email"
              name="login-form-email"
              type="text"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value)
                setAttention("")
              }}
              />
          </div>
          <div className="login-form-group">
            <label htmlFor="login-form-password" id="login-form-password-label">Password</label>
            <input
              className="login-form-password"
              id="login-form-password"
              name="login-form-password"
              type="password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value)
                setAttention("")
              }}
              />
          </div>
          <div className="login-form-group">
            <div className="login-attention">{attention}</div>
            <button id="login-button" onClick={(e) => handleSubmit(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}