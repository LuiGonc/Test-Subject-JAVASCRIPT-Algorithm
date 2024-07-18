//------------------------------row CHECK---------------------------------------------------


let badline = [];
const check_all_rows = function (table) {
  let goodrow = 0;
  let lineoftable = [];
  lineoftable = table[0];
  let lineoftablelenght = lineoftable.length;
  for (let rows = 0; rows < lineoftablelenght; rows++) {
    console.log("row: " + rows + ": " + lineoftable);
    let errornumber = 0;
    lineoftable = to_verify[rows];
    if (checklinecols(lineoftable) === true) {
      goodrow = goodrow + 1;
    } else {
      //badline = to_verify[rows];
      badline = lineoftable;
      //badline.unshift("Line " + rows + " incorrect");
      console.log(badline);
      errornumber = errornumber + 1;
    }
  }
  return badline;
};



//--------------------------------column CHECK-------------------------------------------------


let badcol = [];
const check_all_cols = function (table) {
  let goodcol = 0;
  let tablelenght = table.length;
  for (let col = 0; col < tablelenght; col++) {
    let errornumber = 0;
    let col_to_check = [];
    // take the column
    col_to_check = to_verify.map(function (value, index) {
      return value[col];
    });
    if (checklinecols(col_to_check) === true) {
      goodcol = goodcol + 1;
      console.log("good column nº" + col + ":" + col_to_check);
    } else {
      badcol = col_to_check;
      badcol.unshift("column " + col + " incorrect");
      console.log(badcol);
    }
  }
  return badcol;
};


//------------------------------REGION CHECK---------------------------------------------------

let badreg = [];
const check_all_reg = function (tablename) {
  let errornumber = 0;
  let region = [];
  let goodred = 0;
  let regionnumber = 0;

  for (let regcol = 0; regcol < 3; regcol++) {
    for (let regrow = 0; regrow < 3; regrow++) {
      regionnumber = regionnumber + 1;
      let regcol3 = regcol;
      let regrow3 = regrow;
      regcol3 = regrow * 3;
      regrow3 = regcol * 3;

      let region = [
        to_verify[regcol3 + 0][regrow3 + 0],
        to_verify[regcol3 + 0][regrow3 + 1],
        to_verify[regcol3 + 0][regrow3 + 2],
        to_verify[regcol3 + 1][regrow3 + 0],
        to_verify[regcol3 + 1][regrow3 + 1],
        to_verify[regcol3 + 1][regrow3 + 2],
        to_verify[regcol3 + 2][regrow3 + 0],
        to_verify[regcol3 + 2][regrow3 + 1],
        to_verify[regcol3 + 2][regrow3 + 2],
      ];
      if (checklinecols(region) === true) {
        goodred = goodreg + 1;
        console.log("good region nº " + regionnumber + ": " + region);
      } else {
        badreg = region;
        badreg.unshift("column " + regionnumber + " incorrect");
        console.log("bad regionnº " + regionnumber + ": " + region);
        console.log("badreg:   " + badreg);
      }
    }
  }
  return badreg;
};



const Table_html2 = function (Array2D) {
  var arr, body, tab, tr, td, tn, row, col;
  arr = Array2D;
  body = document.getElementsByTagName("body")[0];
  tab = document.createElement("table");
  for (row = 0; row < arr.length; row++) {
    tr = document.createElement("tr");
    for (col = 0; col < arr[row].length; col++) {
      td = document.createElement("td");
      tn = document.createTextNode(arr[row][col]);
      td.appendChild(tn);
      tr.appendChild(td);
    }
    tab.appendChild(tr);
  }
  body.appendChild(tab);
};
