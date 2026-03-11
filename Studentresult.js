const button = document.getElementById("check-btn");

function checkResult() {
    let name = document.getElementById("sname").value;
    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let chemistry = Number(document.getElementById("chemistry").value);

    let total = math + english + chemistry;
    let average = total / 3;

    let grade;
    let status;

    if (average >= 70) {
        grade = "A";
        status = "Pass";
    } else if (average >= 60) {
        grade = "B";
        status = "Pass";
    } else if (average >= 50) {
        grade = "C";
        status = "Pass";
    } else {
        grade = "F";
        status = "Fail";
    }

    document.getElementById("result").innerHTML =
        name + "'s Result:<br>" +
        "Total: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Status: " + status;
}

if (button) {
    button.addEventListener("click", checkResult);
} else {
    console.warn("Check button not found. Ensure the element with id 'check-btn' exists.");
}
