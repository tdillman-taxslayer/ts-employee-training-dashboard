import { Component } from "preact";
import style from "./style.css";
import { Sidebar } from "../../components/sidebar";
import {
  Card,
  CardContent,
  Icon,
  CardMeta,
  CardGroup,
  CardHeader,
  CardDescription
} from "semantic-ui-react";

const ActivityCard = props => {
  const { name, description, commentCount, position } = props;
  return (
    <CardGroup>
      <Card>
        <CardContent>
          <CardHeader>{name}</CardHeader>
          <CardMeta>{position}</CardMeta>
          <CardDescription />
        </CardContent>

        <CardContent extra>
          <Icon name="comment" />
        </CardContent>
      </Card>
    </CardGroup>
  );
};

export default class Activities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className={style.column}>
          {[
            {
              name: "Tim",
              description: "some description",
              position: "iOS Developer"
            },
            {
              name: "Jasper",
              description: "some description",
              position: "iOS Developer"
            },
            {
              name: "Bob",
              description: "some description",
              position: "iOS Developer"
            },
            {
              name: "John",
              description: "some description",
              position: "iOS Developer"
            }
          ].map(i => {
            return (
              <ActivityCard
                className
                name={i.name}
                description={i.description}
                position={i.position}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
