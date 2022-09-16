input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.turnLeft(90)
})
input.onButtonPressed(Button.B, function () {
    forward()
})
function forward () {
    kitronik_servo_lite.driveForwards(5)
}
