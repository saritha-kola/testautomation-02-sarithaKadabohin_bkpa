///<reference types = "cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardPage from '../pages/dashboardPage'
import * as clientsPage from '../pages/clientsPage'
import * as newclientPage from '../pages/newclientPage'
import * as roomPage from '../pages/roomPage'
import * as newRoomPage from '../pages/newRoomPage'
import * as billsPage from '../pages/billsPage'
import * as newBillPage from '../pages/newBillPage'
import * as reservationsPage from '../pages/reservationsPage'
import * as newReservationPage from '../pages/newReservationPage'
import * as deleteRoomPage from '../pages/deleteRoomPage'


describe(' page-objects', () => {
    beforeEach (() => {
       cy.visit('http://localhost:3000')
       loginFuncs.checkLoginPageTitle()
       loginFuncs.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Welcome tester01')
    })
      
       it ( "login and logout", () => {
       dashboardPage.logoutUser("Login")
    })

    
    it.only("create client and verify",() => {
     dashboardPage.viewclients("Clients")
     clientsPage.viewClientNew("New Client")
     newclientPage.createClient("apple", "apple@gmail.com", "0701234567", "Clients")
     clientsPage.verifyLastClient("apple", "apple@gmail.com", "0701234567")
    
     dashboardPage.logoutUser("Login")
    })

    it.only("View Room ", () => {
        dashboardPage.viewRoom("Room")
        roomPage.viewRoom("New Room")
        newRoomPage.createRoom("double", "101", "1", "checked", "1500kr", "balcony", "Rooms")
        dashboardPage.logoutUser("Login")
    })  
    it.only("view bills page", () => {
        dashboardPage.viewBills("Bill")
        billsPage.viewBills("New Bill")
        newBillPage.createBill("3500kr", "checked", "Bills")
        dashboardPage.logoutUser("Login")
        
    })   
    it.only("view Reservations page ", () => {
        dashboardPage.viewReservations("Reservation")
        reservationsPage.viewReservations("New Reservation")
        newReservationPage.createReservation("2020-04-19", "2020-04-22", "apple (#3)", "Floor 1, Room 102", "1", "Reservations")
        dashboardPage.logoutUser("Login")
        
    })
     it.only("delete last room", () => {
        dashboardPage.viewRoom("Rooms")
        deleteRoomPage.deleteLastRoom()
        dashboardPage.logoutUser("Login")
        

     })
    })   