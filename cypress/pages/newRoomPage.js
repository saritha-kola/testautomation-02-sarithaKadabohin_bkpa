///<reference types = "cypress" />

const CATAGEORY_FIELD = ':nth-child(1) > select'
const NUMBER_FIELD = ':nth-child(2) > input'
const FLOOR_FIELD = ':nth-child(3) > input'
const AVAILABLE_FIELD = '.checkbox'
const PRICE_FIELD = ':nth-child(5) > input'
const FEATURES_FIELD = ':nth-child(6) > select'

const SAVE_BTN = '.blue'

function createRoom(catageory, number, floor, available, price, features, confirmationContent) {
 
 cy.get(CATAGEORY_FIELD).select(catageory)
 cy.get(NUMBER_FIELD).type(number)
 cy.get(FLOOR_FIELD).type(floor)
 cy.get(AVAILABLE_FIELD).click()
 cy.get(PRICE_FIELD).type(price)
 cy.get(FEATURES_FIELD).select(features)
 cy.get(SAVE_BTN).click()
 cy.contains("Rooms")

}

exports.default = {
    createRoom
}