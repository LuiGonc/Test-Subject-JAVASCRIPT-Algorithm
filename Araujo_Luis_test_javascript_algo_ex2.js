const checklinecols = function (line) {
  let lineoftable = [];
  lineoftable = line;
  let sum_num_raised4 = 0;
  for (let col = 0; col < lineoftable.length; col++) {
    let linenumber = lineoftable[col];
    sum_num_raised4 = sum_num_raised4 + linenumber ** 4;
    if (linenumber >= 1 && linenumber <= 9) {
      continue;
    } else {
      return false;
    }
  }
  if (sum_num_raised4 === 15333) {
    //if there are 9 numbers all diferent the sum of them raised to 4 should be 15333
    return true;
  } else {
    console.log("error:  " + line);
    return false;
  }
};