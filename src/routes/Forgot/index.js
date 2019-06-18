import { Component } from "preact";
import Style from "./Forgot.css";
export default class Create extends Component {
  render() {
    return (
      <div>
        <div className={Style.Componentcontainer} />
        <form className="forgot-form" action="action_page.php">
          <h1>Career Slayer</h1>
          <h2>Reset Password</h2>
          <label for="psw">
            <b>New Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <label for="psw-repeat">
            <b>Repeat New Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />
          <button type="submit" class="signupbtn">
            Return Home
          </button>
        </form>
      </div>
    );
  }
}
