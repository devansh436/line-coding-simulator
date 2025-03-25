let canvas, ctx, width, height, offsetX, offsetY, origin; // const
let voltage, xPos, yPos, encodingType;

// initialize canvas
export function initCanvas(canvas) {
    encodingType = localStorage.getItem("encodingType");
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    (offsetX = 20), (offsetY = 20);
    origin = [offsetX * 2, height / 2]; // [x,y]
    voltage = 75;
    (xPos = 0), (yPos = 0);
}

// draw x and y axes
export function drawAxes() {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    // graph setup
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

// draw high voltage
export function drawHigh() {
    myLineTo(xPos, height / 2 - voltage);
    myLineTo(xPos + voltage, height / 2 - voltage);
    yPos = height / 2 - voltage; // bring yPos back to x-axis (0 voltage)
}

// draw low voltage
export function drawLow() {
    myLineTo(xPos, height / 2 + voltage);
    myLineTo(xPos + voltage, height / 2 + voltage);
    yPos = height / 2 + voltage; // bring yPos back to x-axis (0 voltage)
}

// draw zero voltage
export function drawZero() {
    // current voltage is high
    if (yPos < height / 2) {
        myLineTo(xPos, height / 2); // Go halfway to zero
        myLineTo(xPos + voltage, height / 2); // Return to zero
        yPos = height / 2; // Update yPos to zero
    }
    // current voltage is low
    else if (yPos > height / 2) {
        myLineTo(xPos, height/2); // Go halfway to zero
        myLineTo(xPos + voltage, height / 2); // Return to zero
        yPos = height / 2; // Update yPos to zero
    }
    // already at zero
    else {
        myLineTo(xPos + voltage, yPos); // Continue on zero line
    }
}

// continue previous level
// export function drawPrevLevel() {

// }

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
export function updateUI(event) {
    event.preventDefault();

    // reset canvas
    ctx.clearRect(0, 0, width, height);
    drawAxes();

    // prepare simulation
    const bitStream = document.getElementById("bitStream").value;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    myMoveTo(origin[0], origin[1]);
    
    let prevNonZeroPositive = false;
  
    // encoding logic based on type
    switch (encodingType) {
        case "NRZ":
            for (let i = 0; i < bitStream.length; i++) {
                if (bitStream[i] === "1") {
                    drawHigh();
                } else {
                    drawLow();
                }
            }
        break;

        case "Manchester":
            
        break;

        case "AMI":
            for (let i = 0; i < bitStream.length; i++) {
                // assume last non-zero voltage to be negative
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
            // assume last non-zero voltage to be negative 
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
                myLineTo(xPos + voltage, yPos);
            }
        }  
        break;

        default:
        break;
    }

    ctx.stroke();

    return true;
}

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
