import $ from 'jquery';

(function () {
    "use strict";
    var $debugButton = $('<input type="button" value="debug">').on('click', function () {
        $('.question .choiceContainer input').each(function (i) {
            $(this).prop('checked', true);
        })
    });
    $('#questions').append($debugButton);
}());