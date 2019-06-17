import Style from "./style.css";
import { h, Component } from "preact";

class CreateAccount extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Sign up here!</h1>
        <form action="action_page.php" style={{ border: "1px solid #ccc" }}>
          <div className="container">
            <h1>Career Slayer </h1>
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="username">
              <b>Username</b>{" "}
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" />
              Remember me{" "}
            </label>
            <div className="cearfix">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
