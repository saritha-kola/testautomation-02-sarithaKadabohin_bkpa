///<reference types = "cypress" />

const CREATE_RESERVATIONS_BTN = 'h2 > .btn'


function viewReservations(confirmationContent) {
    cy.get(CREATE_RESERVATIONS_BTN).click()
    cy.contains(confirmationContent)
}

exports.default = {
    viewReservations
}