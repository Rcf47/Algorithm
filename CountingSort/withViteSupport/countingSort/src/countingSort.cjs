"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countingSort = void 0;
function countingSort(arr) {
    var answer = [];
    var minValue = Math.min.apply(Math, arr);
    var maxValue = Math.max.apply(Math, arr);
    var k = maxValue - minValue + 1;
    var arrayCount = new Array().fill(0, 0, k);
    var j = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var now = arr_1[_i];
        arrayCount[now - minValue] += 1;
    }
    for (var i = minValue; i <= maxValue; i++) {
        while (arrayCount[i] > 0) {
            answer[j] = i;
            j++;
            arrayCount[i]--;
        }
    }
    return answer;
}
exports.countingSort = countingSort;
var arr = [0, 3, 5, 2, 4, 5, 2, 3];
console.log(countingSort(arr));
