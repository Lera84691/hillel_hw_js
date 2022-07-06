
function createTable(rowCount, colCount) {
    const table = document.createElement("table");
    table.className = "table";
    let counter = 1;
  
    for (let i = 0; i < rowCount; i++) {
      const tr = document.createElement("tr");
      tr.classList.add("table-row");
      table.append(tr);
  
      for (let j = 0; j < colCount; j++) {
        const td = document.createElement("td");
        td.classList.add("table-cell");
        td.innerHTML = +counter;
        tr.append(td);
        counter++;
      }
    }
   
    return table;
  }
  
  document.body.append(createTable(10,10));
  gi