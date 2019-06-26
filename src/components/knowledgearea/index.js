import { Menu, MenuItem } from "semantic-ui-react";
import source from "../../data/ladder.json";
import {
  getKnowledgeAreas,
  knowledgeAreaToFriendlyURL,
} from "../../utils/index.js";

import Style from "./style";

// const styledMenuItem = styled(Menu.Item)`
//   color: orange;
// `;

export const KnowledgeItem = (props, handler, selected) => {
  const { name, index } = props;
  return (
    <MenuItem
      key={knowledgeAreaToFriendlyURL(index)}
      active={selected}
      onClick={() => {
        handler(knowledgeAreaToFriendlyURL(index));
      }}
      className={Style.customMenuItem}
      name={name}
    />
  );
};

export const KnowledgeAreaGroup = props => {
  const { onItemClick, selectedKey } = props;
  return (
    <Menu>
      {getKnowledgeAreas().map((area, i) => {
        area.index = i;
        return KnowledgeItem(
          area,
          onItemClick,
          knowledgeAreaToFriendlyURL(i) === selectedKey
        );
      })}
    </Menu>
  );
};
