$(document).ready(function () {

    let button = $("<button type = 'button'>Display Alert!</button>");
    button.click(function () {
        alert("EW");
    });
    $("body").append(button);

    let num2Button = $("#num2Button");
    let num2TextBox = $("#num2TextBox");
    num2Button.click(function () {
        alert(num2TextBox.val());
    });

    let num3Div = $("#num3Div");
    num3Div.hoover(
        function () {
            num3Div.css("background-color", "red");
        }, function () {
            num3Div.css("background-color", "initial");
        });

    let paraText = $("#paraText");
    paraText.click(function () {
        paraText.css("color", getRandomColor());
    });

    let num5Button = $("#num5Button");
    let num5Div = $("#num5Div");
    num5Button.click(function() {
        num5Div.append($("<span>Bree</span>"));
    });

    let num6Button = $("#num6Button");
    let num6ul = $("ul");
    let friendsArray = ["Meagan", "Kyle", "Chase", "Meri-Kathryn", "Celia", "Lydia", "Gatsby", "Osiris", "Allison", "Carol Baskins"];
    let friendIndex = 0;
    num6Button.click(function() {
        if (friendsArray[friendIndex]) {
            let newLi = $(`<li>${friendsArray[friendIndex]}</li>`);
            num6ul.append(newLi);
            friendIndex++;
        }
        else {
            alert("nomo");
        }
    });
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}