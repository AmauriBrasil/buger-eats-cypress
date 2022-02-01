import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', () => {

    /* beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    }) */
   
    it('Usuário deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it('Cpf inválido', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '00000014ABC'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')     
    })

    it('Email inválido', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'abc.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')            
    })
})