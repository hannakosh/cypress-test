/// <reference types="cypress" />
import "cypress-real-events";

it('Validate add remove elemets', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    cy.get('h3').should('have.text', 'Add/Remove Elements');
    cy.get('.example button').click();
    cy.get('#elements button')
        .should('be.visible')
        .click()
        .should('not.exist');
  })

  it('Validate check/uncheck checkboxes', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    cy.get('h3').should('have.text', 'Checkboxes');
    cy.get('#checkboxes input')
        .should('have.length', 2)
        .first()
        .should('not.be.checked')
        .click()
        .should('be.checked');
  })

  it('Validate dropdown option selection', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown');
    cy.get('h3').should('have.text', 'Dropdown List');
    cy.get('#dropdown').select('2');
    cy.get('#dropdown option')
        .last()
        .should('be.selected');
  })


  it('Validate login page success', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('h2').should('have.text', ' Secure Area');
    cy.get('#flash').should('contain', ' You logged into a secure area!');
    cy.contains('Logout').click();
    cy.get('#flash').should('contain', ' You logged out of the secure area!');
  })

  it('Validate login page error', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your username is invalid!');
  })


  it('Validate slider', () => {
    cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
    cy.get('input')
      .invoke('val', '2')
      .trigger('change');
    cy.get('#range').should('have.text', '2');
  });

  it('Validate field accepts numeric', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs');
    cy.get('input')
      .type(123)
      .should('have.value', 123);
  });
  
  it('Validate field does not accept non-numeric ', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs');
    cy.get('input')
      .type('test')
      .should('have.value', '');
  });

  it('Validate key strokes', () => {
    cy.visit('https://the-internet.herokuapp.com/inputs');
    cy.get('input')
      .focus()
      .type('{upArrow}{upArrow}')
      .should('have.value', 2);
  });

  it('Validate hovers', () => {
    cy.visit('https://the-internet.herokuapp.com/hovers');
    cy.get('.figure').first().realHover();

    cy.get('.figure')
      .first()
      .contains('h5', 'name: user1')
      .should('be.visible');

    cy.get('.figure')
      .first()
      .contains('a', 'View profile')
      .should('be.visible');
  });

 