document.addEventListener("DOMContentLoaded", function () {

    let num18tn = document.createElement("button");
    num18tn.innerText = "number 1";
    num18tn.addEventListener("click", function () {
        alert("Willy Wonka Shrimp Boat")
    });
    document.body.appendChild(num18tn);


    let num2TextArea = document.querySelector("textarea");
    let num28tn = document.querySelector("button");
    console.log(num28tn);
    num28tn.addEventListener("click", function () {
        alert(num2TextArea.value);
    });

    let num3Div = document.querySelector("div");
    num3Div.addEventListener("mouseenter", function () {
        num3Div.style.backgroundColor = "red";
    });
    num3Div.addEventListener("mouseleave", function () {
        num3Div.style.backgroundColor = "initial";
    });

    let num4Paragraph = document.querySelector("p");
    num4Paragraph.addEventListener("click", function () {
        num4Paragraph.style.color = getRandomColor();
    });

    let num58tn = document.querySelectorAll("button")[2];
    let num5Div = document.querySelectorAll("div")[1];
    num58tn.addEventListener("click", function () {
        let span = document.createElement("span");
        span.innerText = "Sup";
        num5Div.appenchChild(span);
    });


    let num68tn = document.getElementById("num68tn");
    let num6ul = document.querySelector("ul");
    let friendsArray = ["Lydia", "Allison", "Meagan", "Celia", "Miranda", "Kyle", "Chase", "Gatsby", "Osiris", "Austin"]
    let friendsIndex = 0;
    num68tn.addEventListener("click", function () {
        if (friendsArray[friendIndex]) {
            let newLi = document.createElement("li");
            newLi.innerText = friendArrar[friendsIndex];
            num6Ul.appendChild(newli);
            friendIndex++
        } else {
            alert("no mo");
        }
    });
});

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
