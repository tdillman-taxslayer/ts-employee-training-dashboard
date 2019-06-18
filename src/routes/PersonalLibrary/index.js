import { h, Component } from "preact";
import Style from "./style.css";

class PersonalLibrary extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="app">
          <div className="utilitybar">
            <div className="utilitybargrid">
              <button className="button">Add</button>
              <button className="button">Filter</button>
            </div>
          </div>
          <div className="grid">
            <div className="main">
              <h1>User Library</h1>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
              <p>
                <u>User Inserted Resource</u>
              </p>
            </div>
          </div>
        </div>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Search for names.."
        />
      </div>
    );
  }
}
