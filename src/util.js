import $ from 'jquery';
import constants from './constants';

export default {
    /**
     * Calculate points based on the user's answers
     * @return {array} array which contains each result of points
     */
    calcPoints: function () {
        var ret = [0, 0, 0, 0, 0, 0];
        $('input:checked').each(function (i, elem) {
            $.each(constants.pointValues[$(elem).attr('id')], function (idx, val) {
                ret[idx] += val;
            });
        });
        return ret;
    },

    /**
     * Set points to the result table and show it.
     * @param  {array} data array contains each points
     */
    setPoints: function (data) {
        var strengthCamera, strengthThreeDee, strengthFantasy, strengthDictionary, strengthRadio, strengthSound;
        $('#camera').text(data[0]);
        $('#threeDee').text(data[1]);
        $('#fantasy').text(data[2]);
        $('#dictionary').text(data[3]);
        $('#radio').text(data[4]);
        $('#sound').text(data[5]);

        strengthCamera = data[0] > 25 ? constants.excellent : data[0] > 14 ? constants.good : constants.poor;
        strengthThreeDee = data[1] > 25 ? constants.excellent : data[1] > 14 ? constants.good : constants.poor;
        strengthFantasy = data[2] > 25 ? constants.excellent : data[2] > 14 ? constants.good : constants.poor;
        strengthDictionary = data[3] > 25 ? constants.excellent : data[3] > 14 ? constants.good : constants.poor;
        strengthRadio = data[4] > 25 ? constants.excellent : data[4] > 14 ? constants.good : constants.poor;
        strengthSound = data[5] > 25 ? constants.excellent : data[5] > 14 ? constants.good : constants.poor;

        $('#strengthCamera').text(strengthCamera);
        $('#strengthThreeDee').text(strengthThreeDee);
        $('#strengthFantasy').text(strengthFantasy);
        $('#strengthDictionary').text(strengthDictionary);
        $('#strengthRadio').text(strengthRadio);
        $('#strengthSound').text(strengthSound);
    },

    /**
     * Check and return the invalid element.
     * @return {object} HTML element of not answered question
     */
    checkInvalidInput: function () {
        var ret;
        $('.question').each(function (i) {
            var checkedElement = $(this).find('input:checked');
            if (checkedElement.length === 0) {
                ret = this;
                // stop the loop
                return false;
            }
        });
        return ret;
    }
}