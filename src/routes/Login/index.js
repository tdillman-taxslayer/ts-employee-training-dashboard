import { h, Component } from "preact";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:1300/login", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Career Slayer</h1>
        <h5>Welcome, please sign in</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              onChange={this.handleInputChange}
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={this.handleInputChange}
            />
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
