input.onButtonPressed(Button.A, function () {
    basic.showString("" + (stem.getHumidity(OutputNumberFormat.INTEGER)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (stem.getPressure()))
})
basic.forever(function () {
	
})
