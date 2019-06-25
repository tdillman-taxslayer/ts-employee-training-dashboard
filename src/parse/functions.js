import Parse from "parse";

const userPointer = {
  __type: 'Pointer',
  className: '_User', 
  objectId: window.localStorage.objectId
  }

export const profileImage = async objectId => {
  const query = new Parse.Query(Parse.User);
  query.equalTo("objectId", objectId);
  return query.find();
};

export const addTags = props => {
    // prop value of component key 
  const tag = {
      name = props, 
      user = userPointer
  }
  const objKey 
  const xttp = new XMLHttpRequest();
  xttp.open("POST", "http://localhost:1337/parse/classes/Tags", true);
  xhttp.setRequestHeader("X-Parse-Application-id", "your_app_id");
  xhttp.setRequestHeader("X-Parse-REST-API-Key", "client_key");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(tag));
};

export const deleteTags = async prop => {
// prop should be the name of the tag(aka value)
const Tags = Parse.Object.extend('Tags')
const query = new Parse.Query(Tags);
query.equalTo('user', userPointer)
const 

}