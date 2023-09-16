function calculate() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = ""; 
    if (isNaN(start) || isNaN(end)) {
        alert("Please enter valid numbers.");
        return;
    }

    for (let i = start; i <= end; i++) {
        const square = i * i;
        const cube = i * i * i;

        const row = document.createElement("tr");
        row.innerHTML = `<td>${i}</td><td>${square}</td><td>${cube}</td>`;
        resultTable.appendChild(row);
    }
}