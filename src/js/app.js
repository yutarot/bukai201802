const $ = require('jquery');
const Chart = require('chart.js');
const Constants = require('./constants');

(function() {
  "use strict";

  var $window = $(window);
  var $html = $('html');
  var $questions = $('#questions');
  var $warning = $('#warning');
  var $result = $('#result');
  var pointValues = Constants.getPointValues();
  var chartConfig = Constants.getChartConfig();

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

    strengthCamera = data[0] > 25 ? Constants.excellent() : data[0] > 14 ? Constants.good() : Constants.poor();
    strengthThreeDee = data[1] > 25 ? Constants.excellent() : data[1] > 14 ? Constants.good() : Constants.poor();
    strengthFantasy = data[2] > 25 ? Constants.excellent() : data[2] > 14 ? Constants.good() : Constants.poor();
    strengthDictionary = data[3] > 25 ? Constants.excellent() : data[3] > 14 ? Constants.good() : Constants.poor();
    strengthRadio = data[4] > 25 ? Constants.excellent() : data[4] > 14 ? Constants.good() : Constants.poor();
    strengthSound = data[5] > 25 ? Constants.excellent() : data[5] > 14 ? Constants.good() : Constants.poor();

    $('#strengthCamera').text(strengthCamera);
    $('#strengthThreeDee').text(strengthThreeDee);
    $('#strengthFantasy').text(strengthFantasy);
    $('#strengthDictionary').text(strengthDictionary);
    $('#strengthRadio').text(strengthRadio);
    $('#strengthSound').text(strengthSound);
  };

  /**
   * Check and return the invalid element.
   * @return {object} HTML element of not answered question
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
  };

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
      chartConfig.data.datasets[0].data = calcPoints();
      var myRadar = new Chart($chart, chartConfig);
      setPoints(chartConfig.data.datasets[0].data);
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
    $warning.hide();
    $questions.show();
  });
}());