import preact, { Component } from "preact";
import SideBar from "../../components/sidebar";
import Style from "./style.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        {<SideBar />}
        <div className={Style.homeContainer}>
          <div className={Style.topBar}>
            <h3>Lessons</h3>
            <h3>Completed</h3>
            <h3>Remaining</h3>
          </div>
          <div className={Style.grid}>
            <div className={Style.column}>
              <ul className={Style.assignmentList}>
                <li>Test 1 assignment</li>
              </ul>
            </div>
            <div className={Style.column}>
              <ul className={Style.assignmentList}>
                <li>1/10</li>
                <li>1/10</li>
                <li>1/10</li>
                <li>1/10</li>
              </ul>
            </div>
            <div className={Style.column}>
              <ul className={Style.assignmentList}>
                <li>10</li>
                <li>10</li>
                <li>10</li>
                <li>10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
