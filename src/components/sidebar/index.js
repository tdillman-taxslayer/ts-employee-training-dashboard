import Style from "./style.css";
import { List } from "semantic-ui-react";

const DispenseItem = (name, id, onClickHandler) => {
  return (
    <List.Item
      id={id}
      onClick={() => {
        onClickHandler(id);
      }}
    >
      <List.Icon name="github" size="small" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{name}</List.Header>
      </List.Content>
    </List.Item>
  );
};
/**
 *
 * @param {Array<String>} titles
 * @param {Array<String>} ids
 * @param {function(id: String)} onClickHandler
 */
const GenerateItems = (titles, ids, onClickHandler) => {
  let items = new Array();
  for (var i = 0; i < titles.length; i++) {
    items.push(DispenseItem(titles[i], ids[i], onClickHandler));
  }
  return items;
};

const SideBar = props => {
  console.log("sidebar props");
  console.log(props);
  const ItemTitles = ["My Dashboard", "Course Library"];
  const ItemId = [RouteIDs.DASHBOARD, RouteIDs.LIBRARY];
  const { onClickHandler } = props;
  return (
    <div className={Style.sidebar}>
      <List divided relaxed>
        {GenerateItems(ItemTitles, ItemId, onClickHandler)}
      </List>
    </div>
  );
};

export const RouteIDs = {
  DASHBOARD: "my-dashboard",
  LIBRARY: "course-library"
};

export default SideBar;
