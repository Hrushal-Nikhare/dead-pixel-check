let counter = 0;
let fullScreen = false;
document.addEventListener("keydown", (event) => {
    // counter++;'
    if (!fullScreen){
        document.documentElement.requestFullscreen()
    } else {
        fullScreen = true;
    }
    ColorHandler(event.key);
    const counterElement = document.getElementById("Counter");
    // if (counterElement !== null) {
    //     counterElement.innerText = counter.toString();
    // }
});


function ColorHandler(key) {
    console.log(key);
    const colors = {
        b: "black",
        w: "white",
        r: "red",
        g: "green",
        l: "blue",
        o: "orange",
        y: "yellow",
        p: "purple",
    };
    if (colors[key]) {
        document.body.style.backgroundColor = colors[key];
    } else {
        RandomiseBG();
    }
}

function RandomiseBG() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}