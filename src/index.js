module.exports = function check(str, bracketsConfig) {
  const arr = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
      let current = str[i];
      if (arr[arr.length-1] == current) arr.pop();
      else if (brackets[current]) arr.push(brackets[current]);
      else return false;
  }
  return (arr.length) ? false : true
}
