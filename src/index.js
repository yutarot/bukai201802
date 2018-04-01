import './file';
import $ from 'jquery';
import Chart from 'chart.js';
import constants from './constants';
import util from './util';

(function () {
  "use strict";

  var $window = $(window);
  var $html = $('html');
  var $questions = $('#questions');
  var $warning = $('#warning');
  var $result = $('#result');
  var chartConfig = constants.chartConfig;

  // submit button on the test view
  $('#submitButton').on('click', function (e) {
    var invalidElement = util.checkInvalidInput();
    if (invalidElement) {
      // scroll and blink the invalid question
      var $invalidElement = $(invalidElement);
      var invalidPosition = $invalidElement.offset().top;
      var scrollNeeded = invalidPosition < $window.scrollTop();
      var blinkTitle = function () {
        // blink the title 3 times
        $invalidElement.find('.question_title')
          .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      };
      if (scrollNeeded) {
        $html.animate({
          scrollTop: invalidPosition - 10
        }, 2000, blinkTitle);
      } else {
        // immidiately blinking the title when the elemnt is already in the window
        blinkTitle();
      }
    } else {
      // show the result chart radar
      var $chart = $('#myChart');
      chartConfig.data.datasets[0].data = util.calcPoints();
      var myRadar = new Chart($chart, chartConfig);
      util.setPoints(chartConfig.data.datasets[0].data);
      $questions.fadeOut(500, function () {
        $result.fadeIn(500);
      });
    }
  });

  // back button on the result view
  $('#backButton').on('click', function (e) {
    $result.fadeOut(500, function () {
      $questions.fadeIn(500);
    });
  });

  // accept button on the initial view
  $('#acceptWarning').on('click', function (e) {
    $warning.hide();
    $questions.show();
  });
}());