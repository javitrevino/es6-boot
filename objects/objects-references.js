let myAccount = {
    name: 'Javier',
    expenses: 0,
    income: 0
}

let addExpenses = function (userAccount, expenseAmount) {
    userAccount.expenses = userAccount.expenses + expenseAmount
}
let addIncome = function (userAccount, incomeAmount) {
    userAccount.income = userAccount.income + incomeAmount

}

let resetAccount = function (userAccount) {
    userAccount.expenses = 0
    userAccount.income = 0
}

let getAccountSummmary = function (userAccount) {
    // user has 100 usd and makes 10,000 as their income, 100 in expenses so their total is.. that.
    let user = userAccount.name
    let salary = userAccount.income
    let balance = userAccount.income - userAccount.expenses

    return `${user} had ${salary} and spent ${userAccount.expenses} so their balance currently is ${balance}. ${userAccount.expenses} in expenses`

}

addIncome(myAccount, 2000)

addExpenses(myAccount, 2.50)

addExpenses(myAccount, 160)

console.log(getAccountSummmary(myAccount))

resetAccount(myAccount)

console.log(getAccountSummmary(myAccount))










