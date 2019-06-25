import Parse from "parse";

export const profileImage = async objectId => {
  const query = new Parse.Query(Parse.User);
  query.equalTo("objectId", objectId);
  const image = await query.find();
  console.log(typeof image[0].attributes.image);

  return image[0].attributes.image; // return image;
}; // Query for a specific user and get image!
