let canvas, ctx, width, height, offsetX, offsetY, origin; // const
let amplitude, signalElementLength, xPos, yPos, encodingType, bitStream;

// initialize canvas
export function initCanvas(canvas) {
    encodingType = localStorage.getItem("encodingType");
    ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    width = canvas.width;
    height = canvas.height;
    (offsetX = width*0.02), (offsetY = offsetX);
    origin = [offsetX * 2, height / 2]; // [x,y]
    amplitude = 95;
    signalElementLength = 75;
    (xPos = 0), (yPos = 0);
    ctx.globalAlpha = 1.0; // Reset opacity for other drawings
}


// CUSTOM FUNCTIONS FOR EFFICIENCY -> WILL BE USED IN THE REST OF CODE
// moves ctx to x,y and updates local variables
export function myMoveTo(x, y) {
    ctx.moveTo(x, y);
    xPos = x;
    yPos = y;
}
// draws line from xpos,ypos to x,y, moves xpos,ypos & updates local variables
export function myLineTo(x, y) {
    ctx.lineTo(x, y);
    myMoveTo(x, y);
}



// draw x and y axes
export function drawAxes() {
    // setup
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.beginPath();
    ctx.fillText("o", offsetX + 10, height / 2 + 10);

    // x axis
    myMoveTo(offsetX, height / 2);
    myLineTo(width - offsetX, height / 2);
    ctx.fillText("x", width - offsetX / 2, height / 2);

    // y axis
    myMoveTo(offsetX * 2, offsetY);
    myLineTo(offsetX * 2, height - offsetY);
    ctx.fillText("y", offsetX * 2, offsetY - 5);

    myMoveTo(origin[0], origin[1]);
    ctx.stroke();
}


// draw bit grid
export function drawGrid() {
    ctx.beginPath();
    myMoveTo(origin[0], height/2);
    ctx.setLineDash([5,5]); // for making grid lines dashed

    // draw gridlines bitwise
    for (let i = 0; i < bitStream.length; i++) {
        ctx.fillText(bitStream[i], xPos + signalElementLength/2, height/4 - 20)
        myMoveTo(xPos + signalElementLength, height/8);
        myLineTo(xPos, height*7/8);
    }

    // stroke grid and reset dashed line -> solid line
    ctx.stroke();
    ctx.setLineDash([]);
    myMoveTo(origin[0], origin[1]);
}


// draw high amplitude
export function drawHigh() {
    myLineTo(xPos, height / 2 - amplitude);
    myLineTo(xPos + signalElementLength, height / 2 - amplitude);
    yPos = height / 2 - amplitude; // bring yPos back to x-axis (0 amplitude)
}


// draw low amplitude
export function drawLow() {
    myLineTo(xPos, height / 2 + amplitude);
    myLineTo(xPos + signalElementLength, height / 2 + amplitude);
    yPos = height / 2 + amplitude; // bring yPos back to x-axis (0 amplitude)
}


// draw zero amplitude
export function drawZero() {
    // current amplitude is high
    if (yPos < height / 2) {
        myLineTo(xPos, height / 2); // Go halfway to zero
        myLineTo(xPos + signalElementLength, height / 2); // Return to zero
        yPos = height / 2; // Update yPos to zero
    }
    // current amplitude is low
    else if (yPos > height / 2) {
        myLineTo(xPos, height/2); // Go halfway to zero
        myLineTo(xPos + signalElementLength, height / 2); // Return to zero
        yPos = height / 2; // Update yPos to zero
    }
    // already at zero
    else {
        myLineTo(xPos + signalElementLength, yPos); // Continue on zero line
    }
}


// continue previous level
export function drawPrevLevel() {
    let prevLevel;

    if (yPos == height/2) prevLevel = 0;
    else if (yPos > height/2) prevLevel = -1;
    else prevLevel = 1;

    myLineTo(xPos + signalElementLength, yPos);
}


// validate user input
export function validate(event) {
    const regex = /[0-1]+$/;
    const bitStream = document.getElementById("bitStream").value;

    if (!regex.test(bitStream)) {
        alert("Bitstream must only contain 0s and 1s.");
        return false;
    }
    return true;
}


// encoding logic
export function updateUI(stream) {

    // reset canvas
    ctx.clearRect(0, 0, width, height);
    drawAxes();
    
    // prepare simulation
    bitStream = stream;
    drawGrid();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    myMoveTo(origin[0], origin[1]);
    
    let prevNonZeroPositive = true;
    // let prevLevel = 0;
    
    // encoding logic based on type
    switch (encodingType) {
        case "NRZ-L":
            for (let i = 0; i < bitStream.length; i++) {
                if (bitStream[i] === "1") {
                    drawHigh();
                } else {
                    drawLow();
                }
            }
        break;
            
        case "NRZ-I":
            // prev level assumed => HIGH voltage
            myMoveTo(xPos, yPos + amplitude);

            for (let i = 0; i < bitStream.length; i++) {
                if (bitStream[i] === "1") {
                    prevNonZeroPositive ? drawLow() : drawHigh();
                    prevNonZeroPositive = !prevNonZeroPositive;
                } else {
                    drawPrevLevel();
                }
            }
        break;
            
        case "RZ":
            signalElementLength /= 2;
            for (let i = 0; i < bitStream.length; i++) {
                if (bitStream[i] === "1") {
                    drawHigh();
                    drawZero();
                } else {
                    drawLow();
                    drawZero();
                }
            }
            signalElementLength *= 2;
        break;
            
        case "Manchester":
            signalElementLength /= 2;
            for (let i = 0; i < bitStream.length; i++) {
                if (bitStream[i] === "1") {
                    drawLow();
                    drawHigh();
                } else {
                    drawHigh();
                    drawLow();
                }
            }
            signalElementLength *= 2;
        break;

        case "AMI":
            for (let i = 0; i < bitStream.length; i++) {
                // assume last non-zero amplitude to be negative
                if (bitStream[i] === "1") {
                    prevNonZeroPositive ? drawLow() : drawHigh();
                    prevNonZeroPositive = !prevNonZeroPositive;
                } else {
                    drawZero();
                }
            }
        break;

        case "MLT-3":
          for (let i = 0; i < bitStream.length; i++) {
            // assume last non-zero amplitude to be negative 
            if (bitStream[i] === "1") {
                let currLevelZero = (yPos == height/2);

                if (currLevelZero) {
                  prevNonZeroPositive ? drawLow() : drawHigh();
                  prevNonZeroPositive = !prevNonZeroPositive;
                } else {
                  drawZero();
                }
            } else {
                // drawPrevLevel();
                myLineTo(xPos + signalElementLength, yPos);
            }
        }  
        break;

        default:
        break;
    }

    ctx.stroke();

    return true;
}
