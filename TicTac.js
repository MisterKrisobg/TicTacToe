// Use event delegation on the container to avoid having to create a variable for each tic-tac-toe box?
const tttContainer = document.querySelector("#tic-tac-toe")
tttContainer.addEventListener("click", (e) => {
    e.target.value
})

/* Main problems: 
1. Finding a way to represent X and O (Maybe just increase font-size and set innerText to X/O.)
2. Figuring out a way to determine who wins.
*/