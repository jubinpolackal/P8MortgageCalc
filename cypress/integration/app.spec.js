/// <reference types="cypress" />

describe('OnLoad', ()=>{
    it('should display min value for slider', ()=>{
        cy.visit('localhost:3000')
        cy.get('.left-section').should('not.be.empty')
    });

    it('should display max value for slider', ()=>{
        cy.visit('localhost:3000')
        cy.get('.right-section').should('not.be.empty')
    });
});