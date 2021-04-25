///<reference types = "cypress" />

const CREATE_BILLS_BTN = 'h2 > .btn'


function viewBills(confirmationContent) {
    cy.get(CREATE_BILLS_BTN).click()
    cy.contains(confirmationContent)
}

exports.default = {
    viewBills
}