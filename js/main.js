let go = {} //creating empty gloabl object

//access to dom elements
document.addEventListener("DOMContentLoaded", () => {
    //creating canvas with default height and width
    go.canvas = document.getElementById('spongebob');
    go.canvas.width = 500;
    go.canvas.height = 500;

    go.ctx = go.canvas.getContext('2d')
    //default canvas attruibutes
    let canvasObj = {
        toptext: "tOp TeXt",
        bottomtext: "bOtToM tExT",
        image: "img/spongebob.png",
        fontWeight: "bold",
        fontSize: "450%",
        color: "white",
        bordercolor: "black"
    }
    //defaults sent to canvas
    sendToCanvas(canvasObj);
    //sending top text to canvas with user input
    document.getElementById('top-text').addEventListener("input", function () {
        canvasObj.toptext = convertText(this.value);
        sendToCanvas(canvasObj);
    });
    //sending bottom text to canvas with user input
    document.getElementById('btm-text').addEventListener("input", function () {
        canvasObj.bottomtext = convertText(this.value);
        sendToCanvas(canvasObj);
    });
});

//function to send attributes to canvas
function sendToCanvas(ob) {
    //creating new empty image
    let img = new Image();
    //setting image source
    img.src = ob.image;
    //setting image attributes on load
    img.addEventListener('load', function () {
        go.ctx.drawImage(img, 0, 0, go.canvas.width, go.canvas.height);
        go.ctx.font = ob.fontWeight + ' ' + ob.fontSize + ' ' + 'Impact';
        go.ctx.textAlign = 'center';
        go.ctx.fillStyle = ob.color;
        go.ctx.strokeStyle = ob.bordercolor;
        go.ctx.lineWidth = 3;
        go.ctx.strokeText(ob.toptext, go.canvas.width / 2, go.canvas.height / 4.25)
        go.ctx.strokeText(ob.bottomtext, go.canvas.width / 2, go.canvas.height / 1.2)
        go.ctx.fillText(ob.toptext, go.canvas.width / 2, go.canvas.height / 4.25);
        go.ctx.fillText(ob.bottomtext, go.canvas.width / 2, go.canvas.height / 1.2);
    });
}

//function to convert every other letter to uppercase
function convertText(text) {
    //create empty string
    let result = "";
    //loop through string and convert every other letter to uppercase
    for (let i = 0; i < text.length; i++) {
        result += i % 2 == 0 ? text[i].toLowerCase() : text[i].toUpperCase();
    }
    return result;
}