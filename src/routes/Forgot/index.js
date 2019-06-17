import { h, Component } from "preact";
import "./style.css";

class Forgot extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <form
          className="forgot-form"
          action="action_page.php"
          style={{ border: "1px solid #ccc" }}
        >
          <h1>Career Slayer</h1>
          <h2>Reset Password</h2>
          <label htmlFor="psw">
            <b>New Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <label htmlFor="psw-repeat">
            <b>Repeat New password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />
          <button type="submit" className="signupbtn">
            Return Home
          </button>
        </form>
      </div>
    );
  }
}

export default Forgot;
