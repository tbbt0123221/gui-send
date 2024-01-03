input.onButtonPressed(Button.A, function () {
    送信 += -1
    basic.clearScreen()
    if (0 <= 送信) {
        i = 0
        for (let index = 0; index < Math.trunc(送信 / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += 1
        }
        l = 0
        for (let index = 0; index < 送信 % 5; index++) {
            led.plot(l, i)
            l += 1
        }
    } else {
        re = 送信 * -1
        i = 4
        for (let index = 0; index < Math.trunc(re / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += -1
        }
        l = 4
        for (let index = 0; index < re % 5; index++) {
            led.plot(l, i)
            l += -1
        }
    }
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendNumber(送信)
    if (input.isGesture(Gesture.LogoUp)) {
        radio.sendValue("spead", 25)
        led.setBrightness(255)
    } else {
        radio.sendValue("spead", 0)
        led.setBrightness(100)
    }
    if (0 <= 送信) {
        i = 0
        for (let index = 0; index < Math.trunc(送信 / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += 1
        }
        l = 0
        for (let index = 0; index < 送信 % 5; index++) {
            led.plot(l, i)
            l += 1
        }
    } else {
        re = 送信 * -1
        i = 4
        for (let index = 0; index < Math.trunc(re / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += -1
        }
        l = 4
        for (let index = 0; index < re % 5; index++) {
            led.plot(l, i)
            l += -1
        }
    }
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    送信 += 1
    basic.clearScreen()
    if (0 <= 送信) {
        i = 0
        for (let index = 0; index < Math.trunc(送信 / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += 1
        }
        l = 0
        for (let index = 0; index < 送信 % 5; index++) {
            led.plot(l, i)
            l += 1
        }
    } else {
        re = 送信 * -1
        i = 4
        for (let index = 0; index < Math.trunc(re / 5); index++) {
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += -1
        }
        l = 4
        for (let index = 0; index < re % 5; index++) {
            led.plot(l, i)
            l += -1
        }
    }
    basic.pause(100)
})
let re = 0
let l = 0
let i = 0
let 送信 = 0
radio.setGroup(11)
送信 = 0
