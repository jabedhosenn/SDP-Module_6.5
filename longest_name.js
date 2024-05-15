const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const longestName = (array) => {
  let longest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};
const result = longestName(friends);
console.log(result);
