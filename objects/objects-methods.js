let restaurant = {
    name: 'Carls Jr.',
    guestCapacity: 100,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize

    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize

    }
}

restaurant.seatParty(99)
console.log(restaurant.checkAvailability(2))
console.log(restaurant.guestCount)

restaurant.removeParty(10)
console.log(restaurant.checkAvailability(4))
console.log(restaurant.guestCount)
console.log(restaurant.checkAvailability(12))




