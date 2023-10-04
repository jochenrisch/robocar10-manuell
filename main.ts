radio.setGroup(128)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(1)
        basic.showNumber(1)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2)
        basic.showNumber(2)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(3)
        basic.showNumber(3)
    } else if (input.logoIsPressed()) {
        radio.sendNumber(8)
        basic.showNumber(8)
    } else {
        radio.sendNumber(9)
        basic.showNumber(9)
    }
})
