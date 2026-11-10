const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const section = document.getElementById("section").value;

    const emptyRow = document.getElementById("emptyRow");

    if (emptyRow) {
        emptyRow.remove();
    }

    const fullName = `${firstName} ${middleName ? middleName + " " : ""}${lastName}`;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${course}</td>
        <td>${year}</td>
        <td>${section}</td>
    `;

    table.appendChild(row);

    form.reset();
});
