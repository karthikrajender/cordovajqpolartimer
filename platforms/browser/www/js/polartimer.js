$(document).ready(function()
   {

	$('#demoTimer').polartimer({
		 
        timerSeconds: 1,
		color: '#FF0000',
		opacity: 0.7,
		callback: function () {
		alert('jquery.polartimer.js: done!');
		}
		});
	    $('#demoTimer').polartimer('start');
	});
	