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