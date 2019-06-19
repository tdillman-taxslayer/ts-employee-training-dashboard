import { Component } from "preact";
import Style from "./create.css";
export default class Create extends Component {
  render() {
    return (
      <div>
        <div className={Style.Componentcontainer}>
          <label for="uname">
            <b>Username</b>
          </label>
          <h1>Sign Up Here!</h1>
          <div className="container" />
          <h1>Career Slayer</h1>
          for "Email"><b>Email</b>
        </div>
        <input type="text" placeholder="Enter Email" name="Email" required>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          >
            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            >
              <label>
                <input type="checkbox" checked="checked" name="remember" />
                Remember me{" "}
              </label>
              <div className="clearfix">
                <button type="button" class="cancelbtn">
                  Cancel
                </button>
                <button type="submit" className="signupbtn">
                  Sign Up
                </button>
              </div>
            </input>
          </input>
        </input>
      </div>
    );
  }
}
