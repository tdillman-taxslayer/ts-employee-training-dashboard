import Style from "./style.css";
import { List } from "semantic-ui-react";

const SideBar = props => {
  return (
    <div className={Style.sidebar}>
      <List divided relaxed>
        <List.Item>
          <List.Icon name="github" size="small" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">My Dashboard</List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default SideBar;
