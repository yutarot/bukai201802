(function() {
	"use strict";

	var $window = $(window);
	var $html = $('html');
	var $questions = $('#questions');
	var $result = $('#result');
	var pointValues = {
		'q1-1': [2, 2, 1, 0, 0, 0],
		'q1-2': [0, 0, 0, 2, 0, 0],
		'q1-3': [0, 0, 0, 0, 1, 2],

		'q2-1': [4, 0, 0, 2, 0, 0],
		'q2-2': [0, 2, 0, 0, 0, 0],
		'q2-3': [0, 0, 4, 0, 2, 1],

		'q3-1': [4, 2, 0, 0, 0, 0],
		'q3-2': [0, 0, 1, 0, 0, 0],
		'q3-3': [0, 0, 0, 2, 2, 2],

		'q4-1': [0, 0, 0, 0, 0, 4],
		'q4-2': [0, 0, 2, 1, 4, 0],
		'q4-3': [1, 1, 0, 0, 0, 0],

		'q5-1': [0, 0, 0, 0, 0, 4],
		'q5-2': [0, 0, 1, 2, 4, 0],
		'q5-3': [1, 1, 0, 0, 0, 0],

		'q6-1': [2, 0, 0, 0, 0, 0],
		'q6-2': [0, 2, 1, 0, 0, 0],
		'q6-3': [0, 0, 0, 4, 0, 0],
		'q6-4': [0, 0, 0, 0, 2, 2],

		'q7-1': [0, 0, 0, 0, 2, 4],
		'q7-2': [0, 0, 1, 1, 0, 0],
		'q7-3': [1, 1, 0, 0, 0, 0],

		'q8-1': [2, 2, 0, 0, 0, 0],
		'q8-2': [0, 0, 2, 0, 1, 1],
		'q8-3': [0, 0, 0, 2, 0, 0],

		'q9-1': [2, 4, 0, 0, 0, 0],
		'q9-2': [0, 0, 2, 1, 0, 0],
		'q9-3': [0, 0, 0, 0, 1, 1],

		'q10-1': [0, 0, 0, 0, 2, 4],
		'q10-2': [0, 2, 2, 0, 0, 0],
		'q10-3': [1, 0, 0, 1, 0, 0],

		'q11-1': [4, 4, 1, 0, 0, 0],
		'q11-2': [0, 0, 0, 2, 4, 4],

		'q12-1': [4, 0, 0, 0, 0, 0],
		'q12-2': [0, 4, 0, 0, 0, 0],
		'q12-3': [0, 0, 4, 1, 2, 0],
		'q12-4': [0, 0, 0, 0, 0, 4],

		'q13-1': [0, 4, 2, 0, 0, 0],
		'q13-2': [2, 0, 0, 1, 0, 0],
		'q13-3': [0, 0, 0, 0, 1, 1],

		'q14-1': [0, 0, 2, 4, 2, 0],
		'q14-2': [0, 2, 0, 0, 0, 0],
		'q14-3': [2, 0, 0, 0, 0, 0],
		'q14-4': [0, 0, 0, 0, 0, 0],

		'q15-1': [0, 0, 0, 4, 0, 0],
		'q15-2': [0, 0, 1, 0, 0, 0],
		'q15-3': [2, 2, 0, 0, 0, 0],
		'q15-4': [0, 0, 0, 0, 1, 2],

		'q16-1': [0, 2, 0, 0, 0, 0],
		'q16-2': [0, 0, 2, 1, 1, 1],
		'q16-3': [2, 0, 0, 0, 0, 0],

		'q17-1': [0, 0, 2, 0, 0, 0],
		'q17-2': [2, 1, 0, 0, 0, 0],
		'q17-3': [0, 0, 0, 4, 0, 0],
		'q17-4': [0, 0, 0, 0, 2, 0],
		'q17-5': [0, 0, 0, 0, 0, 2],

		'q18-1': [0, 0, 2, 0, 0, 0],
		'q18-2': [2, 2, 0, 0, 0, 0],
		'q18-3': [0, 0, 0, 2, 1, 2],

		'q19-1': [0, 0, 2, 0, 0, 0],
		'q19-2': [2, 2, 0, 0, 0, 0],
		'q19-3': [0, 0, 0, 0, 2, 2],
		'q19-4': [0, 0, 0, 2, 0, 0],

		'q20-1': [2, 1, 0, 0, 0, 0],
		'q20-2': [0, 0, 1, 0, 0, 0],
		'q20-3': [0, 0, 0, 0, 0, 0],

		'q21-1': [2, 2, 0, 0, 0, 0],
		'q21-2': [0, 0, 2, 2, 0, 0],
		'q21-3': [0, 0, 0, 0, 0, 0],

		'q22-1': [0, 2, 2, 0, 0, 0],
		'q22-2': [2, 0, 0, 1, 0, 0],
		'q22-3': [0, 0, 0, 0, 0, 0],

		'q23-1': [0, 0, 0, 4, 2, 0],
		'q23-2': [0, 0, 4, 0, 0, 0],
		'q23-3': [0, 0, 0, 0, 0, 0],

		'q24-1': [0, 0, 0, 0, 0, 2],
		'q24-2': [0, 4, 2, 0, 0, 0],
		'q24-3': [0, 0, 0, 1, 2, 0],
		'q24-4': [1, 0, 0, 0, 0, 0],

		'q25-1': [0, 2, 1, 0, 0, 0],
		'q25-2': [0, 0, 0, 1, 0, 0],
		'q25-3': [0, 0, 0, 0, 0, 0],
		'q25-4': [2, 0, 0, 0, 0, 0],

		'q26-1': [0, 0, 0, 4, 0, 0],
		'q26-2': [0, 0, 0, 0, 2, 1],
		'q26-3': [0, 0, 4, 0, 0, 0],
		'q26-4': [2, 2, 0, 0, 0, 0],

		'q27-1': [0, 0, 2, 0, 1, 0],
		'q27-2': [0, 0, 0, 1, 0, 1],
		'q27-3': [1, 1, 0, 0, 0, 0],

		'q28-1': [0, 0, 0, 0, 4, 2],
		'q28-2': [0, 0, 2, 1, 0, 0],
		'q28-3': [1, 1, 0, 0, 0, 0],

		'q29-1': [0, 0, 2, 0, 1, 1],
		'q29-2': [0, 0, 0, 2, 0, 0],
		'q29-3': [1, 1, 0, 0, 0, 0],

		'q30-1': [0, 0, 0, 0, 0, 2],
		'q30-2': [0, 0, 1, 2, 0, 0],
		'q30-3': [0, 0, 0, 0, 2, 0],
		'q30-4': [1, 1, 0, 0, 0, 0],

		'q31-1': [2, 1, 0, 2, 0, 0],
		'q31-2': [0, 0, 0, 0, 4, 2],
		'q31-3': [0, 0, 1, 0, 0, 0],

		'q32-1': [0, 0, 0, 0, 2, 4],
		'q32-2': [0, 0, 0, 0, 0, 0],

		'q33-1': [0, 0, 0, 0, 2, 4],
		'q33-2': [0, 0, 1, 1, 0, 0],
		'q33-3': [0, 0, 0, 0, 0, 0],

		'q34-1': [2, 2, 0, 0, 0, 0],
		'q34-2': [0, 0, 0, 1, 2, 0],
		'q34-3': [0, 0, 1, 0, 0, 0],

		'q35-1': [0, 0, 0, 0, 2, 0],
		'q35-2': [0, 0, 2, 1, 0, 1],
		'q35-3': [2, 1, 0, 0, 0, 0],

		'q36-1': [2, 2, 1, 0, 0, 0],
		'q36-2': [0, 0, 0, 0, 0, 0],

		'q37-1': [0, 0, 0, 2, 2, 0],
		'q37-2': [0, 0, 1, 0, 0, 1],
		'q37-3': [0, 0, 0, 0, 0, 0],

		'q38-1': [4, 0, 0, 0, 0, 0],
		'q38-2': [0, 4, 2, 0, 0, 0],
		'q38-3': [0, 0, 0, 4, 0, 0],
		'q38-4': [0, 0, 0, 0, 2, 1],

		'q39-1': [0, 0, 0, 0, 0, 4],
		'q39-2': [0, 0, 0, 0, 2, 0],
		'q39-3': [0, 2, 0, 0, 0, 0],
		'q39-4': [0, 0, 2, 2, 0, 0],

		'q40-1': [4, 2, 0, 0, 0, 0],
		'q40-2': [0, 0, 4, 2, 4, 0],
		'q40-3': [0, 0, 0, 0, 0, 4]
	};
	var colorSet = {
		red: 'rgb(255, 99, 132)',
		orange: 'rgb(255, 159, 64)',
		yellow: 'rgb(255, 205, 86)',
		green: 'rgb(75, 192, 192)',
		blue: 'rgb(54, 162, 235)',
		purple: 'rgb(153, 102, 255)',
		grey: 'rgb(201, 203, 207)'
	};

	// RGB conversion
	var color = Chart.helpers.color;

	// Chart default configurations
	var config = {
		type: 'radar',
		data: {
			labels: ["カメラタイプ", "3Dタイプ", "ファンタジータイプ", "辞書タイプ", "ラジオタイプ", "サウンドタイプ"],
			datasets: [{
				label: "あなたの特性",
				backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
				borderColor: colorSet.red,
				pointBackgroundColor: colorSet.red,
				data: []
			}]
		},
		options: {
			animation: false,
			showTooltips: false,
			legend: {
				position: 'bottom'
			},
			title: {
				display: true,
				fontSize: 14,
				fontColor: '#666'
			},
			scale: {
				display: true,
				pointLabels: {
					fontSize: 10,
					fontColor: colorSet.blue
				},
				ticks: {
					display: true,
					fontSize: 12,
					fontColor: colorSet.blue,
					beginAtZero: true
				},
				gridLines: {
					display: true,
					color: colorSet.blue
				}
			}
		}
	};

	/**
	 * Calculate points based on the user's answers
	 * @return {array} array which contains each result of points
	 */
	var calcPoints = function() {
		var ret = [0, 0, 0, 0, 0, 0];
		$('input:checked').each(function(i, elem) {
			$.each(pointValues[$(elem).attr('id')], function(idx, val) {
				ret[idx] += val;
			});
		});
		return ret;
	};

	/**
	 * Set points to the result table and show it.
	 * @param  {array} data array contains each points
	 */
	var setPoints = function(data) {
		var strengthCamera, strengthThreeDee, strengthFantasy, strengthDictionary, strengthRadio, strengthSound;
		$('#camera').text(data[0]);
		$('#threeDee').text(data[1]);
		$('#fantasy').text(data[2]);
		$('#dictionary').text(data[3]);
		$('#radio').text(data[4]);
		$('#sound').text(data[5]);

		strengthCamera = data[0] > 25 ? '◎' : data[0] > 14 ? '◯' : '△';
		strengthThreeDee = data[1] > 25 ? '◎' : data[1] > 14 ? '◯' : '△';
		strengthFantasy = data[2] > 25 ? '◎' : data[2] > 14 ? '◯' : '△';
		strengthDictionary = data[3] > 25 ? '◎' : data[3] > 14 ? '◯' : '△';
		strengthRadio = data[4] > 25 ? '◎' : data[4] > 14 ? '◯' : '△';
		strengthSound = data[5] > 25 ? '◎' : data[5] > 14 ? '◯' : '△';

		$('#strengthCamera').text(strengthCamera);
		$('#strengthThreeDee').text(strengthThreeDee);
		$('#strengthFantasy').text(strengthFantasy);
		$('#strengthDictionary').text(strengthDictionary);
		$('#strengthRadio').text(strengthRadio);
		$('#strengthSound').text(strengthSound);
	};

	/**
	 * Check and return the invalid element.
	 * @return {[type]} HTML element of not answered question
	 */
	var checkInvalidInput = function() {
		var ret;
		$('.question').each(function(i) {
			var checkedElement = $(this).find('input:checked');
			if (checkedElement.length === 0) {
				ret = this;
				// stop the loop
				return false;
			}
		});
		return ret;
	}

	/*
		Check the answers and show the result
	 */
	$('#submitButton').on('click', function(e) {
		var invalidElement = checkInvalidInput();
		if (invalidElement) {
			/*
				scroll and blink the invalid question
			 */
			var $invalidElement = $(invalidElement);
			var invalidPosition = $invalidElement.offset().top;
			var scrollNeeded = invalidPosition < $window.scrollTop();
			var blinkTitle = function() {
				// blink the title 3 times
				$invalidElement.find('.question_title')
					.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
			};
			if (scrollNeeded) {
				$html.animate({
					scrollTop: invalidPosition - 10
				}, 2000, blinkTitle);
			} else {
				blinkTitle();
			}
		} else {
			/*
				show the result chart radar
			 */
			var $chart = $('#myChart');
			config.data.datasets[0].data = calcPoints();
			var myRadar = new Chart($chart, config);
			setPoints(config.data.datasets[0].data);
			$questions.fadeOut(500, function() {
				$result.fadeIn(500);
			});
		}
	});

	$('#backButton').on('click', function(e) {
		$result.fadeOut(500, function() {
			$questions.fadeIn(500);
		});
	});

	$('#acceptWarning').on('click', function(e) {
		$('#warning').hide();
		$questions.show();
	});

}());