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
        <div className={style.main}>Personal Library</div>
        <div className={style.grid}>
          <div className={style.list}>Programming 101</div>
          <div className={style.list}>Python Basics</div>
          <div className={style.list}>Cyber Threat Analysis</div>
          <div className={style.list}>C++ Basics</div>
          <div className={style.list}>HTML 5 Changes</div>
          <div className={style.list}>Security Training</div>
          <div className={style.list}>Ecmascript</div>
          <div className={style.list}>Javascript Basics</div>
          <div className={style.list}>Programming 101</div>
          <div className={style.list}>Python Basics</div>
          <div className={style.list}>Cyber Threat Analysis</div>
          <div className={style.list}>C++ Basics</div>
          <div className={style.list}>HTML 5 Changes</div>
          <div className={style.list}>Security Training</div>
          <div className={style.list}>Ecmascript</div>
          <div className={style.list}>Javascript Basics</div>
          <div className={style.list}>Programming 101</div>
          <div className={style.list}>Python Basics</div>
          <div className={style.list}>Cyber Threat Analysis</div>
          <div className={style.list}>C++ Basics</div>
          <div className={style.list}>HTML 5 Changes</div>
          <div className={style.list}>Security Training</div>
          <div className={style.list}>Ecmascript</div>
          <div className={style.list}>Javascript Basics</div>
          <div className={style.list}>Programming 101</div>
          <div className={style.list}>Python Basics</div>
          <div className={style.list}>Cyber Threat Analysis</div>
          <div className={style.list}>C++ Basics</div>
          <div className={style.list}>HTML 5 Changes</div>
          <div className={style.list}>Security Training</div>
          <div className={style.list}>Ecmascript</div>
          <div className={style.list}>Javascript Basics</div>
          <div className={style.list}>Programming 101</div>
          <div className={style.list}>Python Basics</div>
          <div className={style.list}>Cyber Threat Analysis</div>
          <div className={style.list}>C++ Basics</div>
          <div className={style.list}>HTML 5 Changes</div>
          <div className={style.list}>Security Training</div>
          <div className={style.list}>Ecmascript</div>
          <div className={style.list}>Javascript Basics</div>
          <div className={style.list}>Programming 101</div>
        </div>
        {/*}        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Search for names.."
    />*/}
      </div>
    );
  }
}
