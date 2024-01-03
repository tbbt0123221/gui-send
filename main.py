def on_button_pressed_a():
    global 送信
    送信 += -1
    basic.show_number(送信)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(送信)
    radio.send_number(送信)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global 送信
    送信 += 1
    basic.show_number(送信)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_number(receivedNumber):
    global i, l, re
    basic.clear_screen()
    if 0 <= receivedNumber:
        i = 0
        for index in range(int(receivedNumber / 5)):
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += 1
        l = 0
        for index2 in range(receivedNumber % 5):
            led.plot(l, i)
            l += 1
    else:
        re = receivedNumber * -1
        i = 4
        for index3 in range(int(re / 5)):
            led.plot(0, i)
            led.plot(1, i)
            led.plot(2, i)
            led.plot(3, i)
            led.plot(4, i)
            i += -1
        l = 4
        for index4 in range(re % 5):
            led.plot(l, i)
            l += -1
    basic.pause(1000)
radio.on_received_number(on_received_number)

re = 0
l = 0
i = 0
radio.set_group(23)

送信 = 0
送信 = 0
radio.set_group(23)


