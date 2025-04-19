
const candidateRoutes = {
    "1": [1,2,3,4,5,6,7,8],
    "2": [2,3,4,5,6,7,8,1]
};
let currentIndex = 0;
let route = [];

function startMock(candidate) {
    route = candidateRoutes[candidate];
    currentIndex = 0;
    window.location.href = `stations/station${route[currentIndex]}.html`;
}

function nextStation() {
    currentIndex++;
    if (currentIndex < route.length) {
        window.location.href = `station${route[currentIndex]}.html`;
    } else {
        document.body.innerHTML = '<h2>Mock Complete</h2><p>You have completed all stations.</p>';
    }
}
