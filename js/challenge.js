
document.addEventListener('DOMContentLoaded', () => {

let myInterval 

const timer = () => (myInterval = setInterval(countUp, 1000))

timer();

let counter = document.getElementById("counter").innerHTML;
    
function countUp() {
    // console.log(document.getElementById("counter").textContent)
    document.getElementById("counter").textContent = counter++;
}

document.getElementById("plus").addEventListener('click', increment)

function increment() {
    return document.getElementById("counter").textContent = counter ++;
}

document.getElementById("minus").addEventListener('click', decrement)

function decrement() {
    return document.getElementById("counter").innerText = counter --;
}

document.getElementById("heart").addEventListener('click', heartNumber)

let likedNumbers = [];
let likeCount = 0;

function heartNumber() {
    if (likedNumbers.includes(counter)) {
        const p = document.getElementById(counter);
        p.innerText = `${counter} was favorited ${likeCount += 1} times`;
        document.querySelector("ul").appendChild(p);
    } else { 
        let p = document.createElement(`p`);
        p.id = counter;
        p.innerText = `${counter} was favorited ${likeCount = 1} time`;
        document.querySelector("ul").appendChild(p);
        console.log(likedNumbers);
    }
    console.log(counter);
    likedNumbers.push(counter);
}

document.getElementById("pause").addEventListener('click', pauseTimer);

// let pauseBtn = document.getElementById("pause").innerText;

function pauseTimer() {
    if (document.getElementById("pause").innerText === "pause") {
        console.log('hello');
        clearInterval(myInterval);
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("pause").innerText = "resume";
    } else {
        timer();
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("pause").innerText = "pause";
    }
}


 document.querySelector("form").addEventListener(`submit`, (e) => {
    e.preventDefault();
    let p = document.createElement(`p`);
    p.textContent = document.querySelector("#comment-input").value
    console.log(p);
    let list = document.getElementById("list");
    list.append(p);
});

})