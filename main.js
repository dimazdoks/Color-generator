var input = document.querySelector('input');
var body = document.querySelector('body');



input.onkeyup = function () {
	if (this.value === '')
		body.style.backgroundColor = '#fff';
	else
		body.style.backgroundColor = Math.floor( 100000 + Math.random() * 900000 );
};
