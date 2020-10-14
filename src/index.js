module.exports = function check(str, bracketsConfig) {
  const arr = [];
  const brackets = {};
  bracketsConfig.forEach(item => brackets[`${item[0]}`] = item[1]);

  for (let i = 0; i < str.length; i++) {
      let current = str[i];
      if (arr[arr.length-1] == current) arr.pop();
      else if (brackets[current]) arr.push(brackets[current]);
      else return false;
  }
  return (stack.length) ? false : true
}
