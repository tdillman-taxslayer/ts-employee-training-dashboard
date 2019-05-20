import { Component } from "preact";
import Style from "./style.css";
import { KnowledgeAreaGroup } from "../../components/knowledgearea";

export default class KnowledgeArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={Style.KnowledgeAreaContainer}>
        <KnowledgeAreaGroup />
      </div>
    );
  }
}
