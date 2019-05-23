import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Label
} from "semantic-ui-react";
import Style from "./style.css";
import { equalizeArray } from "../../utils";

const readingsTest = {
  title: "Reading",
  items: [
    "Getting Started with things",
    "How to Train your dragon",
    "Programming Gems Vol 1.",
    "D reading",
    "reading1",
    "reading2",
    "reading3"
  ]
};
const trainingTest = {
  title: "Training",
  items: ["Java: A Pratical Approach", "A", "C", "D2", "F"]
};
const profExpTest = {
  title: "Professional Experience",
  items: [
    "Lead group of people",
    "Complete 7 pull requests",
    "1",
    "3",
    "5",
    "10"
  ]
};

// using this, create a list of library components that are passed in from an array
/**
 * example: given an knowledge area "configuration management" at the "introductory" level, display the following
 * [ Getting Started with Project Management ]
 * [ Managing Humans 101 ]
 * [ Some other management book ]
 */
/**
 *
 * @param {Array} reading
 * @param {Array} training
 * @param {Array} profExp
 */
const dispenseTableRow = (reading, training, profExp) => {
  return (
    <TableRow>
      <TableCell>{reading}</TableCell>
      <TableCell>{training}</TableCell>
      <TableCell>{profExp}</TableCell>
    </TableRow>
  );
};

/**
 *
 * @param {Array} items
 */
const createTableBody = items => {
  // find array with largest number of items
  console.log(items);

  let lArray = items;
  // lArray.sort((a, b) => {
  //   return b.items.length - a.items.length;
  // });
  // ensure we have 3 items for the different arrays reading, training, and prof exp.
  if (items.length === 3) {
    // equalize all arrays to largest array to create a grid
    let body = new Array();
    for (var i = 0; i < lArray[0].items.length; i++) {
      body.push(
        dispenseTableRow(
          items[0].items[i],
          items[1].items[i],
          items[2].items[i]
        )
      );
    }
    return body;
  }
  return null;
};

export const LibraryGroup = props => {
  return (
    <div className={Style.libraryItemContainer}>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Reading</TableHeaderCell>
            <TableHeaderCell>Training</TableHeaderCell>
            <TableHeaderCell>Professional Experience</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {createTableBody([readingsTest, trainingTest, profExpTest])}
        </TableBody>
      </Table>
    </div>
  );
};
