import React, { Component } from "preact";
import { Sidebar } from "../../components/sidebar";
import style from "./style.css";

export default class PersonalLibrary extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="utilitybar">
          <div className="utalitybargrid">
            <button className="button">Add</button>
            <button className="button">Filter</button>
          </div>
        </div>
        <div class="grid">
          <div class="main">
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
