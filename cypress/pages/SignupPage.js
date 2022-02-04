

class SignupPage {

    go() {
        cy.visit('/')
        cy.screenshot('my screenshot 1');

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
        cy.screenshot('my screenshot 2');

    }

    fillForm(deliver)   {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.screenshot('my screenshot 3');
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.screenshot('my screenshot 4');
        cy.get('input[name="email"]').type(deliver.email)
        cy.screenshot('my screenshot 5');
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.screenshot('my screenshot 6');

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.screenshot('my screenshot 7');
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.screenshot('my screenshot 8');

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.screenshot('my screenshot 9');
        cy.get('input[name="address-details"]').type(deliver.address.details)
        cy.screenshot('my screenshot 10');

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
        
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile(deliver.cnh)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
        cy.screenshot('my screenshot 11');
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
        cy.screenshot('my screenshot 12');
        }

}

export default new SignupPage;


