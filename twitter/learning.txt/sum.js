//practice map function: find the first element and make it uppercase
const names = ["tommy", "polo", "mailo"];
//storing in a variable
const resultNames = names.map((name) => {
  let result = "";
  //why 0?
  result[0] = result + name[0].toUpperCase();
  for (let i = 1; i < name.length; i++) {
    result += name[i];
  }
  console.log(result);
  return result;
});
console.log(resultNames);
