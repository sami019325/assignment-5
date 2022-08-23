console.log("select");



if (playerList == 0) {
    insertInnerText("selected-players-box", "No player is selected")
}

function selectBtnClicked(event) {
    const playerName = event.target.value;
    const playerBtnID = event.target.id;
    // console.log(playerBtnID);
    const liForPlayer = document.createElement("li");
    liForPlayer.innerText = playerName;
    playerList = playerList + 1;
    console.log(playerList);

    if (playerList == 6) {
        alert("You can not select more 5 players")

    }
    else if (playerList <= 5) {

        document.getElementById("selected-playes-box").appendChild(liForPlayer);
        const btn = document.getElementById(playerBtnID)
        btn.disabled = true;
        btn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }

    // insertInnerText("selected-playes-box", playerName)


};

