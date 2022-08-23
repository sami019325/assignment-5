console.log("calculate");
// player cost
document.getElementById("Calculate").addEventListener("click", function () {
    const playerCost = parseIntFunction("per-player-cost")
    if (playerCost == false) {
        console.log(" error: field is empty");
    }
    else {
        const totalPayerCost = playerCost * playerList
        insertInnerText("calculated_player-expenses", totalPayerCost)
    }
});
// total cost 
document.getElementById("Calculate-total").addEventListener("click", function () {


    const TotalplayerCost = document.getElementById("calculated_player-expenses").innerText;
    const totalPayerCostParsed = parseFloat(TotalplayerCost);
    const TotalManagerCost = parseIntFunction("manager");
    const TotalCoachCost = parseIntFunction("coach");
    if (TotalManagerCost === false || TotalCoachCost === false) {
        console.log(" error: field is empty");
    }
    else {
        const totaCost = totalPayerCostParsed + TotalManagerCost + TotalCoachCost
        console.log(totaCost)
        insertInnerText("calculated-total-expenses", totaCost)
    }
});