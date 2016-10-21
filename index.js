'use strict';

angular.module('ng-number-filter', []).filter('euroNumber', function ($filter) {
    function decimalPlaces(number) {
        return (number.split('.')[1] || []).length;
    }

    return function (inputNumber, decimalScale, currencySymbol) {
        inputNumber = isNaN(inputNumber) || inputNumber === '' || inputNumber === null ? '0' : String(inputNumber);

        currencySymbol = currencySymbol || ' ';
        decimalScale = (decimalScale !== undefined) ? decimalScale : decimalPlaces(inputNumber);
        var thousandsSeperator = '.';
        var decimalSeperator = ',';

        var minus = inputNumber < 0;

        var out = $filter('number')(Math.abs(inputNumber), decimalScale);

        if (thousandsSeperator !== ',') {
            out = out.replace(/\,/g, 'T');
        }
        if (decimalSeperator !== '.') {
            out = out.replace(/\./g, 'D');
        }
        out = out.replace(/T/g, thousandsSeperator);
        out = out.replace(/D/g, decimalSeperator);

        if (minus) {
            return '-' + currencySymbol + ' ' + out;
        } else {
            if (currencySymbol && currencySymbol !== ' ') {
                return currencySymbol + ' ' + out;
            } else {
                return out;
            }
        }
    };
});
