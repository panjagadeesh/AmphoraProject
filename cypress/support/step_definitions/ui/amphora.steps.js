const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const HomePage = require('../../pages/ui/HomePage');

Given('I navigate to Amphora website', () => {
    HomePage.visit();
});

When('I click on the Products dropdown', () => {
    HomePage.clickProductsDropdown("Markets");
    cy.get('#cookie_action_close_header')
  .trigger('mouseout', { force: true })
  .then(() => {
    cy.log('Mouseout triggered on cookie close button');
  });



});

// When('I verify all product list has been appearing', () => {
//     HomePage.verifyProductLinks();
// });

When('I click on the Resources dropdown', () => {
    HomePage.clickProductsDropdown("Resources");
    HomePage.clickResourcesDropdown();
});

When('I fill in the newsletter signup form', () => {
    const testEmail = `test${Date.now()}@example.com`;
    HomePage.fillNewsletterForm(testEmail, "Jagadeesh", "Doe");
});


Then('I should see the thank you message', () => {
    HomePage.verifyThankYouMessage();
}); 