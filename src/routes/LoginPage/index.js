import React, { Component } from "preact";
import SideBar from "../../components/sidebar";
import Style from "./Login.css";
export default class Login extends Component {
  render() {
    return (
      <div>
        <div className={Style.container}>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <button type="button" className={Style.cancelbtn}>
            Cancel
          </button>
          <span className={Style.psw}>
            Forgot <a href="#">Password></a>
          </span>
        </div>
      </div>
    );
  }
}
