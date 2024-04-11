/// <reference types="cypress" />

it('Sample automation', function () {
cy.visit('https://php811.funnelkitdemos.com/')
cy.wait(5000)
cy.get('a[aria-label="Add to cart: “De-Tan Face Gel I Aloe Vera & Turmeric”"]')
  .scrollIntoView()
  .click();
cy.get('#fkcart-checkout-button').click()
cy.wait(3000)
cy.get('#billing_email').type('chandu7508@gmail.com')
cy.get('#billing_first_name').type('Chandu')
cy.get('#billing_last_name').type('Gunturi')
cy.get('#shipping_address_1').type('21600 Maple street')
cy.get('#shipping_city').type('Houston')
cy.get('#shipping_postcode').type('47600')
cy.get('#select2-shipping_country-container').click()
cy.get('.select2-search__field').type('United States')
cy.get('.select2-results__option').contains('United States').click()

cy.get('#select2-shipping_state-container').click()
cy.get('.select2-search__field').type('Michigan')
cy.get('.select2-results__options').contains('Michigan').click()
cy.get('#billing_phone').scrollIntoView().type('1122334455')
cy.wait(1000)
cy.get('#wfob_657a9210552a2').click();
cy.wait(1000)
cy.get('#place_order').scrollIntoView().click()
cy.get('.elementor-button-text').scrollIntoView().click();
cy.wait(5000)
cy.get('.elementor-widget-container').should('contain', 'Order #');
})