
var playerList = 0;

function insertInnerText(id, text) {
    document.getElementById(id).innerText = text;
};

function parseIntFunction(id) {
    const amount = document.getElementById(id).value;
    console.log(id);
    if (amount !== "") {
        const amountParsed = parseFloat(amount);
        document.getElementById(id).style.border = "1px solid #FFFFFF";
        return amountParsed;
    }
    else {
        const inputAres = document.getElementById(id)
        inputAres.style.border = "1px solid red";
        inputAres.value = "";
        return false;
    }

};