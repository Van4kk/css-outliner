const bugButton = document.getElementById("css-outliner-bug-button");
const bugForm = document.getElementById("css-outliner-bug-report");
const bugCloseWindowButton = document.getElementById("css-outliner-bug-report-close-button");
const colors = ['red', 'blue', 'green', ['yellow', 'Bright Yellow']];

const toggleBugWindow= () => {
    bugForm.style.display = bugForm.style.display === "flex" ? "none" : "flex";
};

const populateDataList = (id, options) =>
    options.forEach((option) => {
        const [value, text] = Array.isArray(option) ? option : [option, option];
        document.getElementById(id).innerHTML += `<option value="${value}">${text}</option>`;
    });

bugButton.addEventListener("click", toggleBugWindow);

document.addEventListener("click", (event) => {
    if (!bugForm.contains(event.target) && !bugButton.contains(event.target)) {
        bugForm.style.display = "none";
    }
});

bugCloseWindowButton.addEventListener("click", () => {
    document.getElementById("css-outliner-bug-report").style.display = "none";
});

populateDataList('css-outliner-bug-report-form-possible-reasons', colors);