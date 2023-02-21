let x = 0
let Y = 0
let pintar_X = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    Y = input.acceleration(Dimension.Y)
    if (x < 700) {
        pintar_X = 0
    } else if (x < -200) {
        pintar_X = 1
    } else if (x < 700) {
        pintar_X = 4
    } else if (x < 200) {
        pintar_X = 3
    }
})
