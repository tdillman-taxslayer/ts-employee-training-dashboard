import { Component } from "preact";
import Style from "./style.css";
import { Sidebar } from "../../components/sidebar";

export default class Library extends Component {
  render() {
    return (
      <div className={Style.Componentcontainer}>
        <Sidebar />
        <div className={Style.app}>
          <div className={Style.utilitybar}>
            <div className={Style.utilitybargrid}>
              <button class={Style.button}>Filter</button>
            </div>
          </div>
          <div className={Style.grid}>
            <div className={Style.main}>
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
          </div>
        </div>
      </div>
    );
  }
}
