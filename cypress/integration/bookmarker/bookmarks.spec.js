/* eslint-disable no-undef */
describe('Adding a bookmark', function () {
  beforeEach(function () {
    // create an account and log the user in
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const testUser = {
      username: 'test_user',
      password: 'test_password'
    }
    cy.request('POST', 'http://localhost:3001/api/users', testUser)
  
    cy.visit('http://localhost:3000')
    cy.get('#username').type(testUser.username)
    cy.get('#password').type(testUser.password)
    cy.contains('Login').click()
  })

  it('User can add a bookmark', function () {
    // clicking opens the dialogue form
    cy.get('.MuiFab-root').first().click()
    cy.contains('New Bookmark')

    // fill out the form and submit
    cy.get('#name').type('test bookmark')
    cy.get('#url').type('https://www.test.com')
    cy.get('#category').type('test category')
    cy.get('#save_added_bookmark').click()

    cy.get('.bookmark_card_class_selector').contains('test bookmark')

  })
})

describe('Managing a bookmark', function () {
  beforeEach(function () {
    // create an account and log the user in
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const testUser = {
      username: 'test_user',
      password: 'test_password'
    }
    cy.request('POST', 'http://localhost:3001/api/users', testUser)
  
    // log in
    cy.visit('http://localhost:3000')
    cy.get('#username').type(testUser.username)
    cy.get('#password').type(testUser.password)
    cy.contains('Login').click()

    // post a bookmark
    cy.get('.MuiFab-root').first().click()
    cy.get('#name').type('test bookmark')
    cy.get('#url').type('https://www.test.com')
    cy.get('#category').type('test category')
    cy.get('#save_added_bookmark').click()
  })

  it('User can remove a bookmark', function () {
    cy.get('.bookmark_menu_class_selector').first().click()
    cy.contains('Delete Bookmark').click()
    cy.contains('Are you sure you want to perminently delete this bookmark from your collection?')
    cy.get('.confirm_delete_class_selector').click()
    cy.contains('Nothing here yet!')
  })
})