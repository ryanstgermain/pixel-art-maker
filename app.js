var mainCanvas = document.querySelector('.canvas')

function createPixels(numberofpixels){
    for(var i = 0; i < numberofpixels; i++){
        let newPixel = document.createElement('div')
        newPixel.setAttribute("class", "pixel")
        mainCanvas.appendChild(newPixel)
    }
}
createPixels(6999) 
