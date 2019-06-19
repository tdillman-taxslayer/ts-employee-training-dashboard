import { Component } from "preact";
import { CapabilityGroup } from "../../components/capabilityitem";
import style from "./style.css";
import { Sidebar } from "../../components/sidebar";
export default class CapabilityLevels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capabilities: [],
      loading: false
    };
  }

  componentDidMount() {
    // this is just an example.  This is not proper.
    this.setState({
      capabilities: this.provideGroups()
    });
  }

  provideGroups() {
    return [
      {
        title: "Introductory",
        percentageComplete: 0,
        description:
          "The professional performs or is capable of performing basic work in an area, generally under supervision. The professional is taking effective steps to develop his or her knowledge and skills. "
      }
    ];
  }

  render() {
    return (
      <div className={style.CapabilityLevelContainer}>
        <Sidebar />
        <CapabilityGroup capabilities={this.state.capabilities} />
      </div>
    );
  }
}
