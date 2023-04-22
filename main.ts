let start = 0
let tid = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    tid = input.runningTime() - start
    basic.showNumber(tid / 1000)
})
basic.forever(function () {
	
})
