// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Example of Custom Command

Cypress.Commands.add('signInSauce', (username1, password11) => {
    cy.visit('/')

    cy.get('#user-name')
        .clear()
        .type(username1)

    cy.get('#password')
        .clear()
        .type(password11)
        
    cy.get('#login-button')
        .click()
});

Cypress.Commands.add('checkoutForm', (firstName1, lastName1, postalCode) => {

    cy.get('#first-name')
        .clear()
        .type(firstName1)

    cy.get('#last-name')
        .clear()
        .type(lastName1)

    cy.get('#postal-code')
        .clear()
        .type(postalCode)
        
    cy.get('#continue')
        .click()
});


require('cypress-iframe');

import 'cypress-file-upload';

import '@4tw/cypress-drag-drop'

import "cypress-real-events/support";


