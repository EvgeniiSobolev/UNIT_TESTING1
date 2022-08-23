function sum(n1, n2) {
    return n1 + n2
}

function allUpper(arr) {
    return arr.map(el => el.toUpperCase())
}

function allLower(arr) {
    return arr.map(el => el.toLowerCase())
}

function solution(str) {
    return str.split('').reverse().join('');
}

function multiply(x1, x2) {
    return x1 * x2;
}

function division(y1, y2) {
    return y1 / y2;
}

function sub(o1, o2) {
    return o1 - o2;
}

function comparePositive(m1, m2) {
    return m1 > m2;
}

function compareNegative(p1, p2) {
    return p1 < p2;
}

console.log(sum(58, 9))
module.exports = {sum, comparePositive, compareNegative, sub, division, allUpper, allLower, solution, multiply};