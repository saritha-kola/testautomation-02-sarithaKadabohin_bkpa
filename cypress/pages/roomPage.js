///<reference types = "cypress" />

const CREATE_ROOM_BTN = 'h2 > .btn'




function viewRoom(confirmationContent) {
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(confirmationContent)
}

exports.default = {
    viewRoom
}