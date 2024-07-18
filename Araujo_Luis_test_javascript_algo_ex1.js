// In this script, its created a "to_verify" JAVASCRIPT table of 9 boxes out of 9.
const to_verify = [];
const rows = 9; // creates numeber or rows
const columns = 9; // creates numeber or columns

for (let row = 0; row < rows; row++) {
  to_verify[row] = [];
  for (let col = 0; col < columns; col++) {
    to_verify[row][col] = 0;
  }
}

//console.log(to_verify);

//Insert a JAVASCRIPT "F11" function allowing you to read the table which has been provided to you (table_digits, 1 dimension) and to transfer it to the table defined in 1 ("to_check", 2 dimensions).

const Array1D_to_2D = function (Array1D) {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns * 2; col++) {
      if (col % 2 === 0) {
        // check if its odd and only executes when even
        let text = Array1D[row];
        let result = text.substring(col, col + 1);
		result_number = Number(result)
        to_verify[row][col / 2] = result_number;
      }
    }
  }
  // console.log(to_verify);
  return to_verify;
};

const Table_html = function (Array2D) {
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

