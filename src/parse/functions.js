import Parse from "parse";
import axios from "axios";

const parseURL = "http://localhost:1337/parse/";

const userPointer = {
  __type: "Pointer",
  className: "_User",
  objectId: window.localStorage.objectId,
};

export const profileImage = async objectId => {
  const query = new Parse.Query(Parse.User);
  query.equalTo("objectId", objectId);
  return query.find();
};

export const tags = async (action, ...props) => {
  /* Parse Cloud Tag expects a JSON Object  {
  tag: action (String: add or delete)
  name: name value given to tag.
  user: userPointer
} */

  axios({
    method: "post",
    url: parseURL + "functions/tags",
    headers: {
      "X-Parse-Application-id": "your_app_id",
      "X-Parse-REST-API-Key": "client_key",
      "Content-Type": "application/json",
    },
    data: {
      tag: action,
      name: "",
      user: userPointer,
    },
  });
};
/*
export const deleteTags = async prop => {
const Tags = Parse.Object.extend('Tags')
const query = new Parse.Query(Tags);
query.equalTo('user', userPointer)

}
*/
