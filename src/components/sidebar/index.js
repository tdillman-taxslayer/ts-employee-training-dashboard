import Style from "./style";
import {
  List,
  ListHeader,
  ListItem,
  ListContent,
  ListIcon
} from "semantic-ui-react";
import { route } from "preact-router";

const handleSideBarOnClick = id => {
  switch (id) {
    case RouteIDs.DASHBOARD:
      route("/MyDashboard", true);
      break;
    case RouteIDs.LIBRARY:
      route("/Library", true);
      break;
    case RouteIDs.PERSONALLIBRARY:
      route("/PersonalLibrary", true);
      break;
    case RouteIDs.ABOUT:
      route("/About", true);
      break;

    /*    case RouteIDs.INBOX:
      route("/indox", true);
      break;*/
  }
};

const DispenseItem = (name, id, onClickHandler) => {
  return (
    <ListItem
      id={id}
      onClick={() => {
        onClickHandler(id);
      }}
    >
      <ListIcon name="github" size="small" verticalAlign="middle" />
      <ListContent>
        <ListHeader>
          <a className={Style.sidebarItem}> {name} </a>{" "}
        </ListHeader>{" "}
      </ListContent>{" "}
    </ListItem>
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

export const Sidebar = props => {
  //const ItemTitles = ["Course Library", "About"];
  //const ItemId = [RouteIDs.LIBRARY, RouteIDs.DASHBOARD];
  const ItemTitles = [
    "My Dashboard",
    "Course Library",
    "Personal Library",
    "About"
  ];
  //const ItemTitles = ["Personal Progress", "Course Library"];
  //const ItemId = [RouteIDs.DASHBOARD, RouteIDs.LIBRARY];
  //const ItemTitles = ["Personal Progress", "Course Library"];
  const ItemId = [
    RouteIDs.DASHBOARD,
    RouteIDs.LIBRARY,
    RouteIDs.PERSONALLIBRARY,
    RouteIDs.ABOUT
  ];
  return (
    <div className={Style.sidebar}>
      <List divided relaxed>
        {" "}
        {GenerateItems(ItemTitles, ItemId, handleSideBarOnClick)}{" "}
      </List>{" "}
    </div>
  );
};

export const RouteIDs = {
  DASHBOARD: "my-dashboard",
  LIBRARY: "Library",
  PERSONALLIBRARY: "Personal Library",
  ABOUT: "About"
};
