function react (degrees: number) {
    servos.turnServo(servos.ServoPin.P1, degrees)
    basic.pause(1000)
    motor.turnRight(-30)
    basic.pause(2500)
    motor.stop()
    servos.turnServo(servos.ServoPin.P1, 35)
    basic.pause(1000)
    motor.turnRight(50)
    basic.pause(1000)
}
servos.turnServo(servos.ServoPin.P1, 35)
servos.motorPinPower(servos.MotorPin.Left, servos.Power.On)
motor.turnRight(50)
basic.forever(function () {
    basic.pause(1000)
    sonar.graphSonar(50)
    if (sonar.isSonar(sonar.Comparison.Closer, 30)) {
        motor.stop()
        basic.pause(1000)
        if (Math.randomBoolean()) {
            react(60)
        } else {
            react(10)
        }
    }
})
