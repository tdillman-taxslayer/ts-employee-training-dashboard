import { Menu, MenuItem } from "semantic-ui-react";
import source from "../../data/ladder.json";
import { getKnowledgeAreas } from "../../utils/index.js";

import Style from "./style";

// const styledMenuItem = styled(Menu.Item)`
//   color: orange;
// `;

export const KnowledgeItem = props => {
  const { name, description } = props;
  return <MenuItem className={Style.customMenuItem} name={name} />;
};

export const KnowledgeAreaGroup = () => {
  return (
    <Menu>
      {getKnowledgeAreas().map(area => {
        return KnowledgeItem(area);
      })}
    </Menu>
  );
};
