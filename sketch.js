let brushColor = '#FFFCFC';
let brushSize = 4

function setup() {
    canvas = createCanvas(500,300);
    canvas.position(500,400);

    background(0);

    let colorPicker = createColorPicker(brushColor);
    colorPicker.position(500,400);
    colorPicker.input(() => brushColor = colorPicker.value());
  
    let saveButton = createButton('Save Painting');
    saveButton.position(900, 670);
    saveButton.mousePressed(() => saveCanvas('myPainting', 'png'));

    let clearButton = createButton('Clear Canvas');
    clearButton.position(500, 670);
    clearButton.mousePressed(() => background(0)); 
    
    // createP('Brush Size:').position(10, 60);
    // let sizeSlider = createSlider(1, 50, brushSize);
    // sizeSlider.position(10, 80);
    // sizeSlider.input(() => brushSize = sizeSlider.value());
  
}

function draw() {
    if (mouseIsPressed) {
        stroke(brushColor);
        strokeWeight(brushSize);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}