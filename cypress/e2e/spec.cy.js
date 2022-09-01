/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage';

describe('login/logout functionalities for a Bynder portal.', () => {
  const loginPage = new LoginPage();
  let data = {};

  before(function () {
    cy.fixture('example').then(function (loginData) {
      data = loginData;
      cy.log(data);
    });
  });

  it('Login with valid credentials', () => {
    cy.visit('https://wave-trial.getbynder.com/login/');

    cy.log(data);

    loginPage.inputEmail().type(data.email);
    loginPage.inputPassword().type(data.password);
    loginPage.btnSubmit().click();
  });

  it('Log out user', () => {
    loginPage.iconProfile().click();
    cy.wait(1000);
    loginPage.btnLogout().click();
  });

  it('Login with invalid password', () => {
    loginPage.inputEmail().type(data.email);
    loginPage.inputPassword().type('Invalid');
    loginPage.btnSubmit().click();
  });

  it('Login with invalid username', () => {
    loginPage.inputEmail().type('sanakar@gmail.com');
    loginPage.inputPassword().type(data.password);
    loginPage.btnSubmit().click();
  });
});
