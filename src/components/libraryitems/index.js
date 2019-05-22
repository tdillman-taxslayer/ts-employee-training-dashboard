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

// using this, create a list of library components that are passed in from an array
/**
 * example: given an knowledge area "configuration management" at the "introductory" level, display the following
 * [ Getting Started with Project Management ]
 * [ Managing Humans 101 ]
 * [ Some other management book ]
 */

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
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
