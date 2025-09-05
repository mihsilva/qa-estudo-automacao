describe('Botão de exemplo', () => {
  it('Deve clicar no botão', () => {
    cy.visit('https://exemplo.com')
    cy.get('button#meuBotao').click()
    cy.contains('Botão clicado com sucesso')
  })
})
