// app.js

// Define candidate routes
const candidateRoutes = {
    "1": [1,2,3,4,5,6,7,8],
    "2": [2,3,4,5,6,7,8,1]
};

// Function to start the mock exam
function startMock(candidate) {
    const route = candidateRoutes[candidate];
    localStorage.setItem("route", JSON.stringify(route));
    localStorage.setItem("index", "0");
    window.location.href = `stations/station${route[0]}.html`;
}

// Function to navigate to the next station
function nextStation() {
    const route = JSON.parse(localStorage.getItem("route") || "[]");
    let index = parseInt(localStorage.getItem("index") || "0");
    index += 1;

    if (index < route.length) {
        localStorage.setItem("index", index.toString());
        window.location.href = `station${route[index]}.html`;
    } else {
        localStorage.removeItem("route");
        localStorage.removeItem("index");
        document.body.innerHTML = "<h2>Mock Complete</h2><p>You have completed all stations.</p>";
    }
}
