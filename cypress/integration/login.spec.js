/// <reference types = "cypress" / >

describe('First example', () => {

    it ('Test case 1', () => {

        cy.visit('http://localhost:3000/login') 
        cy.title().should('eq', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01')
        cy.get('.user > .btn').click()
        cy.contains('Login')

    })
})