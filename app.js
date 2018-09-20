var mainCanvas = document.querySelector('.canvas')
var fillBox = document.getElementsByClassName('pixel')
var pen = document.getElementById('red')
var colorPick = document.getElementsByClassName('colorPicker')

function createPixels(numberofpixels){
    for(var i = 0; i < numberofpixels; i++){
        let newPixel = document.createElement('div')
        newPixel.setAttribute("class", "pixel")
        mainCanvas.appendChild(newPixel)
    }
}
createPixels(6999)

for(var i = 0; i < colorPick.length; i++){
    colorPick[i].addEventListener('click', function(event){
    pen = event.target.id
        console.log(pen)
    })
}

for(var i = 0; i < fillBox.length; i++){
   fillBox[i].addEventListener('click', function(event){
   event.target.id = pen
   }) 
}

