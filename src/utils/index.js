import source from "../data/ladder.json";
/**
 * We build it this way because this allows very human friendly URLs and it will allow
 * Google to effectively index the page if needed for SEO puproses (even though this will be an internal site).
 * @param {Number} index
 */
export const knowledgeAreaToFriendlyURL = index => {
  let areas = source["knowledge-areas"];
  if (index < areas.length) {
    return areas[index].name
      .split(" ")
      .join("-")
      .toLowerCase();
  } else {
    return null;
  }
};

/**
 * We build it this way because this allows very human friendly URLs and it will allow
 * Google to effectively index the page if needed for SEO puproses (even though this will be an internal site).
 * @param {Number} index
 */
export const capabilityLevelToURL = index => {
  let capabilityLevels = source["capability-levels"];
  if (index < capabilityLevels.length) {
    return capabilityLevels[index].level.toLowerCase();
  } else {
    return null;
  }
};

export const getKnowledgeAreas = () => {
  return source["knowledge-areas"];
};

/**
 *
 * @param {Array} array
 * @param {Number} size
 */
export const equalizeArray = (array, size) => {
  // array already equalized
  if (array.length === size) {
    return array;
  }
  let newArray = array;
  let diff = size - array.length;
  for (var i = 0; i < diff; i++) {
    newArray.push(null);
  }
  return newArray;
};
