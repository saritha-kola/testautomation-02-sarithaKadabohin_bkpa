///<reference types = "cypress" />

const VALUE_FIELD = 'input'
const PAID_FIELD = '.checkbox'


const SAVE_BTN = '.blue'

function createBill(value, paid, confiramtionContent) {
    
    cy.get(VALUE_FIELD ).type(value)
    cy.get(PAID_FIELD).click()
    cy.get(SAVE_BTN).click()
    cy.contains("Bills")

}

exports.default = {
    createBill
}