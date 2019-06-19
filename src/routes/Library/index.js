import preact, { Component } from "preact";
import Style from "./library.css";
import SideBar from "../../components/sidebar";
export default class Library extends Component {
  render() {
    return (
      <div className={Style.Componentcontainer}>
        <div className={Style.app}>
          <div className="utilitybar">
            <div className="utilitybargrid">
              <button class="button">Filter</button>
            </div>
          </div>
          <div className="grid">
            <div className="main">
              <h1>Library</h1>
              <p>
                <u>Programming 101</u>
              </p>
              <p>
                <u>Python Basics</u>
              </p>
              <p>
                <u>Cyber Threat Analysis</u>
              </p>
              <p>
                <u>C++ basics</u>
              </p>
              <p>
                <u>HTML 5 Changes</u>
              </p>
              <p>
                <u>Security Training</u>
              </p>
              <p>
                <u>Ecmascript</u>
              </p>
              <p>
                <u>Javascript Basics</u>
              </p>
            </div>
            <div className="main">
              <h1>Trining</h1>
              <h1>Personal Library</h1>
              <p>
                <u>Programming 101</u>
              </p>
              <p>
                <u>Python Basics</u>
              </p>
              <p>
                <u>Cyber Threat Analysis</u>
              </p>
              <p>
                <u>C++ basics</u>
              </p>
              <p>
                <u>HTML 5 Changes</u>
              </p>
              <p>
                <u>Security Training</u>
              </p>
              <p>
                <u>Ecmascript</u>
              </p>
              <p>
                <u>Javascript Basics</u>
              </p>
              <input
                type="text"
                id="myInput"
                onkeyup="myFunction()"
                placeholder="Search for names.."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
