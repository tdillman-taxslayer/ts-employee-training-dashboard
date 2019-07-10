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
    case RouteIDs.ACTIVITIES:
      route("/Activities", true);
      break;
    case RouteIDs.ABOUT:
      route("/About", true);
      break;
    case RouteIDs.SIGNOUT:
      route("/login", true);
      break;
  }
};

const DispenseItem = (name, id, onClickHandler) => {
  return (
    <div
      className={Style.listItemGrid}
      id={id}
      onClick={() => {
        onClickHandler(id);
      }}
    >
      <div className={Style.listItem}>
        <p className={Style.sidebarItem}> {name} </p>
      </div>
    </div>
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
  const ItemTitles = [
    "My Dashboard",
    "Activities",
    "Course Library",
    "Personal Library",
    "About",
    "Sign Out"
  ];

  const ItemId = [
    RouteIDs.DASHBOARD,
    RouteIDs.ACTIVITIES,
    RouteIDs.LIBRARY,
    RouteIDs.PERSONALLIBRARY,
    RouteIDs.ABOUT,
    RouteIDs.SIGNOUT
  ];
  return (
    <div className={Style.sidebar}>
      {GenerateItems(ItemTitles, ItemId, handleSideBarOnClick)}{" "}
    </div>
  );
};

export const RouteIDs = {
  DASHBOARD: "my-dashboard",
  ACTIVITIES: "Activities",
  LIBRARY: "Library",
  PERSONALLIBRARY: "Personal Library",
  ABOUT: "About",
  SIGNOUT: "Sign Out"
};
