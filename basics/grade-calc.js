//  student score, total possible score
// 15/20 -> you got a C,(75%)!

const gradeCalculator = function (studentScore, totalPossibleScore) {

    if (typeof studentScore !== 'number' || typeof totalPossibleScore !== 'number') {
        throw Error('the scores have to be numbers!')
    }

    const percentGrade = (studentScore / totalPossibleScore) * 100
    let letterGrade = ''

    if (percentGrade >= 90) {
        letterGrade = 'A'
        return `you got an A! (${percentGrade}%)`
    } else if (percentGrade >= 80) {
        letterGrade = 'B'

    } else if (percentGrade >= 70) {
        letterGrade = 'C'
    } else if (percentGrade >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `you got a ${letterGrade} (${percentGrade}%)`
}



try {
    const resultingGrade = gradeCalculator('test', 100)

    console.log(resultingGrade)

} catch (e) {
    console.log(e.message)
}

