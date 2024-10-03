describe('Join in web', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should mount elements of home page', () => {
    cy.get('p').contains('Favorite Radios')
  })
})
