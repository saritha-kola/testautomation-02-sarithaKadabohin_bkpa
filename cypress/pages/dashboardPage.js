/// <reference types = "cypress" />

//Elements
const LOGOUT_BTN = '.user > .btn'
const VIEW_CLIENTS_BTN = '.blocks > :nth-child(2) > .btn'
const VIEW_ROOM_BTN = '.blocks > :nth-child(1) > .btn'
const VIEW_BILLS_BTN = '.blocks >:nth-child(3) > .btn'
const VIEW_RESERVATIONS_BTN = '.blocks >:nth-child(4) > .btn'
 

//Actions
function logoutUser(confirmationContent) {
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)
    
}
function viewclients (confirmationContent) {
      cy.get(VIEW_CLIENTS_BTN).click()
      cy.contains(confirmationContent)
}

function viewRoom(confirmationContent) {
    cy.get(VIEW_ROOM_BTN).click()
    cy.contains(confirmationContent)
}
function viewBills(confirmationContent) {
    cy.get(VIEW_BILLS_BTN).click()
    cy.contains(confirmationContent)
}

function viewReservations(confirmationContent) {
    cy.get(VIEW_RESERVATIONS_BTN).click()
    cy.contains(confirmationContent)
}

 
  //exports
exports.default = {
    logoutUser,
    viewclients,
    viewRoom,
    viewBills,
    viewReservations
    
   
   }
    
    
