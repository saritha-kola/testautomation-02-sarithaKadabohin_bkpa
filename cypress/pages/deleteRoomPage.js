///<reference types = "cypress" />


const CREATE_ROOM_BTN = 'h2 > .btn'
const ROOM_LIST = '.room'
const THREE_DOTS_BTN = ' .action > img'
const DELETE_BTN = '.menu > :nth-child(2)'


function viewRoom(confirmationContent) {

    cy.get(CREATE_ROOM_BTN).click()
    cy.get(ROOM_LIST).last()
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
    cy.contains(confirmationContent)
}

function deleteLastRoom() {
cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()

}

exports.default = {
    viewRoom,
    deleteLastRoom
}
