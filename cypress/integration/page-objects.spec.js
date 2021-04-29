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

var faker = require('faker');

let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();
let randomPrice = faker.commerce.price();


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
     newclientPage.createClient(randomName, randomMail, randomPhone, "Clients")
     clientsPage.verifyLastClient(randomName, randomMail, randomPhone,)
    
     dashboardPage.logoutUser("Login")
    })

    it.only("View Room ", () => {
        dashboardPage.viewRoom("Room")
        roomPage.viewRoom("New Room")
        newRoomPage.createRoom("double", "101", "1", "checked", randomPrice, "balcony", "Rooms")
        dashboardPage.logoutUser("Login")
    })  
    it.only("view bills page", () => {
        dashboardPage.viewBills("Bill")
        billsPage.viewBills("New Bill")
        newBillPage.createBill(randomPrice, "checked", "Bills")
        dashboardPage.logoutUser("Login")
        
    })   
    it.only("view Reservations page ", () => {
        dashboardPage.viewReservations("Reservations")
        reservationsPage.viewReservations("New Reservation")
        newReservationPage.createReservation("2020-04-01", "2020-04-04", "Jonas Hellman (#1)", "Floor 1, Room 102", "1", "Reservations")
        dashboardPage.logoutUser("Login")
        
    })
     it.only("delete last room", () => {
        dashboardPage.viewRoom("Rooms")
        deleteRoomPage.deleteLastRoom()
        dashboardPage.logoutUser("Login")
        

     })
    })   