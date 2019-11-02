let getTip = function (total, percent = .1) {
    let finalPercent = percent * 100
    let tip = total * percent
    return `a ${finalPercent}% tip on ${total} would be ${tip} `
}

let resultingTip = getTip(500, .2);
let secondTip = getTip(1200, .5)
let thirdTip = getTip(300, .1)

console.log(resultingTip)
console.log(secondTip)
console.log(thirdTip)