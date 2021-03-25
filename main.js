var canvas = new fabric.Canvas('Minecraft_canvas')
playerx = 10
playery = 10
blockImagewidth = 30
blockImageheight = 30
var Playerobject = ""
var blockimageobject = ""

function player_update() {
    fabric.Image.fromURL("Swarnim.png", function (Img) {
        Playerobject = Img
        Playerobject.scaleToWidth(151)
        Playerobject.scaleToHeight(161)
        Playerobject.set({
            top: playery,
            left: playerx
        })
        canvas.add(Playerobject)
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockimageobject= Img
        blockimageobject .scaleToWidth(151)
        blockimageobject .scaleToHeight(161)
        blockimageobject .set({
            top: playery,
            left: playerx
        })
        canvas.add(blockimageobject)
    })
}