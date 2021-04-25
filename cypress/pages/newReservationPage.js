///<reference types = "cypress" />

const START_DATE_FIELD = ':nth-child(1) > input'
const END_DATE_FIELD = ':nth-child(2) > input'
const CLIENT_FIELD = ':nth-child(3) > select'
const ROOM_FIELD = ':nth-child(4) > select'
const BILL_FIELD = ':nth-child(5) > select'

const SAVE_BTN = '.blue'


function createReservation(startdate, enddate, client, room, bill, confirmationContent) {
    cy.get(START_DATE_FIELD).type(startdate)
    cy.get(END_DATE_FIELD).type(enddate)
    cy.get(CLIENT_FIELD).select(client)
    cy.get(ROOM_FIELD).select(room)
    cy.get(BILL_FIELD).select(bill)
    cy.get(SAVE_BTN).click()
    cy.contains("Reservations")

}

exports.default = {
    createReservation
}