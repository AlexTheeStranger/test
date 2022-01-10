input.onButtonPressed(Button.A, function () {
    music.playMelody("- - - - - - - - ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
})
