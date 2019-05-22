import { Component } from "preact";
import Style from "./style.css";
import { KnowledgeAreaGroup } from "../../components/knowledgearea";
import { knowledgeAreaToFriendlyURL } from "../../utils";
import { route } from "preact-router";
import { LibraryGroup } from "../../components/libraryitems";

export default class KnowledgeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: knowledgeAreaToFriendlyURL(0)
    };
  }

  handleOnItemClick(item) {
    const capabilityItem = this.props.matches["capabilityitem"];
    this.setState({ selectedKey: item });
    route(`${item}`, true);
  }

  render() {
    const { selectedKey } = this.state;
    return (
      <div className={Style.KnowledgeAreaContainer}>
        <KnowledgeAreaGroup
          selectedKey={selectedKey}
          onItemClick={this.handleOnItemClick.bind(this)}
        />
        <LibraryGroup />
      </div>
    );
  }
}
