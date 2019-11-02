const account = {
    name: 'Milton Reed',
    expenses: [
        { description: 'Apartment Rent', amount: 1289 },
        { description: 'Hamburguer', amount: 2333 },
        { description: 'new smartphone', amount: 10 },
        { description: 'trip to Austin', amount: 10 },
        { description: 'Latex Mask', amount: 0 }],
    income: [],
    addIncome: function (concept, incomeAmount) {
        const newIncome = { concept: concept, incomeAmount: incomeAmount }
        this.income.push(newIncome)
    },
    addExpense: function (description, amount) {
        const newExpense = { description: description, amount: amount }
        this.expenses.push(newExpense)
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let totalBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.incomeAmount
        })

        totalBalance = totalIncome - totalExpenses

        return `Hello, ${this.name}, your total income is ${totalIncome} with expenses of ${totalExpenses}, with aa total balance of ${totalBalance}`
    }
}

account.addExpense('Phone Bills', 10)
account.addIncome('did some consulting', 5600)
console.log(account)

console.log(account.getAccountSummary())
