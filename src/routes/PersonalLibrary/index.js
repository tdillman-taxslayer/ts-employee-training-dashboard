import { Component } from "preact";
import style from "./style.css";
import { Sidebar } from "../../components/sidebar";

export default class PersonalLibrary extends Component {
  render() {
    return (
      <div className={style.app}>
        <Sidebar />
        <div className={style.Componentcontainer} />
        <div className={style.utilitybar}>
          <div className={style.utilitybargrid}>
            <button className={style.button}>Add</button>
            <button className={style.button}>Filter</button>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.main}>
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
