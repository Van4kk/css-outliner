const bugButton = document.getElementById("css-outliner-bug-button");
const bugForm = document.getElementById("css-outliner-bug-report");
const bugCloseWindowButton = document.getElementById("css-outliner-bug-report-close-button");

const toggleBugWindow= () => {
    bugForm.style.display = bugForm.style.display === "flex" ? "none" : "flex";
};

bugButton.addEventListener("click", toggleBugWindow);

document.addEventListener("click", (event) => {
    if (!bugForm.contains(event.target) && !bugButton.contains(event.target)) {
        bugForm.style.display = "none";
    }
});

bugCloseWindowButton.addEventListener("click", () => {
    document.getElementById("css-outliner-bug-report").style.display = "none";
});