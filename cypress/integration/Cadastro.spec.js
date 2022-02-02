import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', () => {

    /* beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    }) */
   
    it.skip('Usuário deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it.skip('Validar cpf inválido', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '00000014ABC'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')     
    })

    it.skip('Validar email inválido', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'abc.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')            
    })

    it('Verificar e validar campos obrigatórios', function () {
        signupPage.go()
        signupPage.submit()
        signupPage.alertMessageShouldBe('É necessário informar o nome')
        signupPage.alertMessageShouldBe('É necessário informar o CPF')
        signupPage.alertMessageShouldBe('É necessário informar o email')
        signupPage.alertMessageShouldBe('É necessário informar o CEP')
        signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        signupPage.alertMessageShouldBe('Selecione o método de entrega')
        signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })
})