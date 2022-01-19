let count = 0;
let letter;
let win = false;

let tl = document.querySelector("#tl");
let tm = document.querySelector("#tm");
let tr = document.querySelector("#tr");
let ml = document.querySelector("#ml");
let mm = document.querySelector("#mm");
let mr = document.querySelector("#mr");
let bl = document.querySelector("#bl");
let br = document.querySelector("#br");
let bm = document.querySelector("#bm");

let t = [[tl, tm, tr], [ml, mm, mr], [bl, bm, br]];

const process = (e) => {
    if (e.target.innerText) {
        return;
    }
    count+= 1
    if (count % 2 === 0) {
        letter = "O";
            
    }
    else {
        letter = "X";
    }
    e.target.innerText = letter;

    winCheck();

    if (win === true) {
        let announcement = document.createElement("h2");
        announcement.append(`Player ${letter} Wins!`);
        announcement.classList.add("announce-winner");
        document.querySelector("body").insertBefore(announcement, document.querySelector("#tic-tac-toe"))
        tttContainer.removeEventListener("click", process)
    }
    if (count === 9  && win === false) {
        let announcement = document.createElement("h2");
        announcement.append(`Player ${letter} Wins!`);
        announcement.classList.add("announce-winner");
        document.querySelector("body").insertBefore(announcement, document.querySelector("#tic-tac-toe"))
    }
}


const tttContainer = document.querySelector("#tic-tac-toe")
tttContainer.addEventListener("click", process)
tttContainer.remove


let winCheck = () => {
    switch( true ) {
        //Top horizontal
        case(t[0][0].innerText === t[0][1].innerText && t[0][1].innerText === t[0][2].innerText && t[0][1].innerText != ""):
            win = true;
        //Mid horizontal
        case(t[1][0].innerText === t[1][1].innerText && t[1][1].innerText === t[1][2].innerText && t[1][1].innerText != ""):
            win = true;
        //Bot horizontal
        case(t[2][0].innerText === t[2][1].innerText && t[2][1].innerText === t[2][2].innerText && t[2][1].innerText != ""):
            win = true;
        //Left vertical
        case(t[0][0].innerText === t[1][0].innerText && t[1][0].innerText === t[2][0].innerText && t[1][0].innerText != ""):
            win = true;
        //Mid vertical
        case(t[0][1].innerText === t[1][1].innerText && t[1][1].innerText === t[2][1].innerText && t[1][1].innerText != ""):
            win = true;
        //Right vertical
        case(t[0][2].innerText === t[1][2].innerText && t[1][2].innerText === t[2][2].innerText && t[1][2].innerText != ""):
            win = true;
        //Left to right diagonal
        case(t[0][0].innerText === t[1][1].innerText && t[1][1].innerText === t[2][2].innerText && t[1][1].innerText != ""):
            win = true;
        //Right to left diagonal
        case(t[0][2].innerText === t[1][1].innerText && t[1][1].innerText === t[2][0].innerText && t[1][1].innerText != ""):
            win = true;
    }
}

