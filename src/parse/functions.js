import Parse from "parse";

/*
Parse.initialize("your_app_id", "client_key");
Parse.serverURL = "http://localhost:1337/parse"; 
*/

export const profileImage = async objectId => {
  Parse.initialize("your_app_id", "client_key");
  Parse.serverURL = "http://localhost:1337/parse";
  const query = new Parse.Query(Parse.User);
  query.equalTo("objectId", objectId);
  // const image =
  // return query.find().then((obj, err) => {
  //   if (err) throw err;
  //   console.log(obj[0].attributes.image);
  //   // return obj[0].attributes.image;
  //   return 100;
  // });
  const image = await query.find();
  console.log(typeof image[0].attributes.image);

  return image[0].attributes.image; // return image;
}; // Query for a specific user and get image!
