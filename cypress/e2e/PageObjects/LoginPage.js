class LoginPage {
  inputEmail() {
    return cy.get('#inputEmail');
  }
  inputPassword() {
    return cy.get('#inputPassword');
  }
  btnSubmit() {
    return cy.get('button.login-btn.action-btn.blue.block');
  }
  iconProfile() {
    return cy.get('a.admin-dropdown.profile');
  }
  btnLogout() {
    return cy.get('form > .action-btn');
  }
}
export default LoginPage;
