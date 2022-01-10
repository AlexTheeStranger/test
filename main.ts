input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
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
