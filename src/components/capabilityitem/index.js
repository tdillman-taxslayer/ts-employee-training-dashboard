import { Card } from "semantic-ui-react";
import source from "../../data/ladder.json";
import { route } from "preact-router";
import {
  knowledgeAreaToFriendlyURL,
  capabilityLevelToURL,
} from "../../utils/index.js";

const handleOnClick = id => {
  console.log(`Selected item ${id}`);
  switch (id) {
    // intro
    case 0:
      route(
        `/${capabilityLevelToURL(id)}/${knowledgeAreaToFriendlyURL(0)}`,
        true
      );
      break;
    // competence
    case 1:
      break;
    // leadership
    case 2:
      break;
    // mastery
    case 3:
      break;
    default:
      break;
  }
};

export const CapabilityItem = props => {
  const { level, description, handleOnClick, id } = props;
  return (
    <Card fluid onClick={() => handleOnClick(id)}>
      <Card.Content>
        <Card.Header> {level} </Card.Header>{" "}
        <Card.Meta>
          <div> percentage will go here </div>{" "}
        </Card.Meta>{" "}
        <Card.Description> {description} </Card.Description>{" "}
      </Card.Content>{" "}
    </Card>
  );
};

export const CapabilityGroup = props => {
  const levels = source["capability-levels"];
  return (
    <div>
      {" "}
      {levels.map((item, index) => {
        item.handleOnClick = handleOnClick;
        item.id = index;
        return CapabilityItem(item);
      })}{" "}
    </div>
  );
};
