///<reference types = "cypress" />

const CREATE_CLIENT_BTN = 'h2 > .btn'
const CLIENT_LIST = '.client'
const THREE_DOTS_BTN = ' .action > img'
const DELETE_BTN = '.menu > :nth-child(2)'

function viewClientNew(confirmationContent) {
    cy.get(CREATE_CLIENT_BTN ).click()
    cy.contains(confirmationContent)

}

function verifyLastClient(name, mail, phone) {
    cy.get(CLIENT_LIST).last()
    .should("contain", name)
    .and("contain", mail)
    .and("contain", phone)
}



exports.default = {
    viewClientNew,
    verifyLastClient
    
}