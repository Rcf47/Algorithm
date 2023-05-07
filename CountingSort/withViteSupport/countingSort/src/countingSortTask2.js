"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDigitPerMutation = void 0;
function isDigitPerMutation(x, y) {
    function countDigit(num) {
        var digitCount = new Array(10).fill(0);
        while (num > 0) {
            var lastdigit = num % 10;
            digitCount[lastdigit] += 1;
            num = Math.floor(num / 10);
        }
        return digitCount;
    }
    var digitsx = countDigit(x);
    var digitsy = countDigit(y);
    for (var i = 0; i <= 9; i++) {
        if (digitsx[i] !== digitsy[i]) {
            return false;
        }
    }
    return true;
}
exports.isDigitPerMutation = isDigitPerMutation;
