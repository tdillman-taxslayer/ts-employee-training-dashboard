import { Component } from "preact";
import Style from "./style.css";
import { KnowledgeAreaGroup } from "../../components/knowledgearea";
import { knowledgeAreaToFriendlyURL } from "../../utils";

export default class KnowledgeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: knowledgeAreaToFriendlyURL(0)
    };
  }

  handleOnItemClick(item) {
    console.log(item);
    this.setState({ selectedKey: item });
  }

  render() {
    const { selectedKey } = this.state;
    return (
      <div className={Style.KnowledgeAreaContainer}>
        <KnowledgeAreaGroup
          selectedKey={selectedKey}
          onItemClick={this.handleOnItemClick.bind(this)}
        />
      </div>
    );
  }
}
