const váha = []
function bmicalculate() {
    const userkg = parseFloat(document.getElementById("userkg").value);
    const userm = parseFloat(document.getElementById("userm").value);

    const output = userkg / ((userm * userm)).toFixed(1)

    document.getElementById("result").innerHTML = output

    if (output < 0 || output < 0)
        document.getElementById("finalresult").textContent = "Špatné číslo";


    else if (output < 18.5) {
        document.getElementById("finalresult").textContent = "Podváha";
        váha.push("podváha")
    } else if (output >= 18.5 && output < 25) {
        document.getElementById("finalresult").textContent = "Normální váha";
        váha.push("Normální váha")
    } else if (output >= 25 && output < 30) {
        document.getElementById("finalresult").textContent = "Nadváha";
        váha.push("Nadváha")
    } else if (output >= 30) {
        document.getElementById("finalresult").textContent = "Obezita";
        váha.push("Obezita");
    }
    else if ( No = No ){
    váha.pop("Špatné číslo","Obezita","Nadváha","Normální váha","Podváha")
}
        if (output <= 0)
            console.log(váha)
    document.getElementById("Arrey").innerHTML = váha
}




