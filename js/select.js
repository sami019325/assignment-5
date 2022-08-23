
if (playerList == 0) {
    insertInnerText("selected-players-box", "No player is selected")
}

function selectBtnClicked(event) {
    const playerName = event.target.value;
    const playerBtnID = event.target.id;
    const liForPlayer = document.createElement("li");
    liForPlayer.innerText = playerName;
    if (playerList == 5) {
        alert("You can not select more 5 players")
    }
    else if (playerList < 5) {
        playerList = playerList + 1;
        document.getElementById("selected-playes-box").appendChild(liForPlayer);
        const btn = document.getElementById(playerBtnID)
        btn.disabled = true;
        btn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
};

