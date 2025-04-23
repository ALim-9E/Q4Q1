function bmi() {
	var height = document.getElementById('height').value;

	var weight = document.getElementById('weight').value;

	var overall = (weight/(height**2)).toFixed(2);

	if (overall < 18.5) {
		document.getElementById('conclusion').innerHTML = overall
		document.getElementById('result').innerHTML = 'You are ' + 'UNDERWEIGHT'
	}

	else if (overall > 18.5 && overall < 24.9) {
		document.getElementById('conclusion').innerHTML = overall
		document.getElementById('result').innerHTML = 'You are ' + 'NORMAL'
	}

	else if (overall > 25 && overall < 29.9) {
		document.getElementById('conclusion').innerHTML = overall
		document.getElementById('result').innerHTML = 'You are ' + 'OVERWEIGHT'
	}

	else if (overall > 30) {
		document.getElementById('conclusion').innerHTML = overall
		document.getElementById('result').innerHTML = 'You are ' + 'OBESE'
	}
}