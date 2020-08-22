// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(function() {
                console.log("Regristation Service Worker succeed");
            })
            .catch(function() {
                console.log("Regristation Service Worker failed");
            });
    });

} else {
    console.log("Service Worker is not supported in this browser");
}

document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var isFromSaved = urlParams.get("saved");

    const btnChange = document.getElementById("save");

    if (isFromSaved) {
        var deleteBtn = `<i class="large material-icons">delete</i>`;
        getSavedTeamById();
        btnChange.innerHTML = deleteBtn;
        btnChange.onclick = function() {
            removeFavorite();
        }
    } else {
        var add = getTeamById();
        btnChange.onclick = function() {
            console.log("FAB button is clicked.");
            add.then(function(team) {
                saveForLater(team);
            });
        }
    }
});