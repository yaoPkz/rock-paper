let p1
let p2

window.addEventListener('load', () => {
    document.getElementById("p2").textContent = "❓️";
});

function resetGame() {
    p1 = undefined;
    p2 = undefined;
    document.getElementById("p1").textContent = "";
    document.getElementById("p2").textContent = "❓️";
}

function choose (number){
    p1 = number;
    console.log(p1);
    document.getElementById("p1").textContent = emoji(p1);
}


function play(){
    if(p1 === undefined){
    alert("Choose first!");
    return;
    }

    p2 = Math.floor(Math.random() * 3) + 1;
    console.log(p2)
    document.getElementById("p2").textContent = emoji(p2);

    if(p1 === p2){
        setTimeout(() => {
            alert("Draw");
            resetGame();
        }, 700);
        console.log("draw");
    }
    else if (
        (p1 === 1 && p2 === 3) ||
        (p1 === 2 && p2 === 1) ||
        (p1 === 3 && p2 === 2)
    ) {
        setTimeout(() => {
            alert("Win");
            resetGame();
        }, 700);
        console.log("win");
    }
    else{
        setTimeout(() => {
            alert("Lose");
            resetGame();
        }, 700);
        console.log("loose");
    }

}

function emoji(num){
    if(num === 1 ){
        return "🪨";
    }
    else if(num === 2){
        return"🧻";
    }
    else if(num === 3){
        return "✂️"
    }
}



