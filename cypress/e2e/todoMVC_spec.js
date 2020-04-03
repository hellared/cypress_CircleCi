describe('Basic test', function () {
    it('check input', function () {
        cy.visit('/examples/vue/');
        cy.get('.new-todo').should('exist');
    });
});