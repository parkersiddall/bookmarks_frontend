/* eslint-disable no-undef */
describe('Login page displays correctly', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('Landing page displays title, subtitle, and login form', function () {
    cy.contains('Bookmarks')
    cy.contains('With pretty pictures from your favorite subreddits')
    cy.contains('Log in to your account')
    cy.contains('Login')
  })

  it('Clicking register opens up the registration form', function () {
    cy.contains('Create an Account').click()
    cy.contains('Create an account')
    cy.contains('Register')
  })

  it('Clicking register, then clicking login displays correct form', function () {
    cy.contains('Create an Account').click()
    cy.contains('Cancel').click()

    cy.contains('Create an account')
    cy.contains('Log in to your account')
    cy.contains('Login')
  }) 
})

describe('User can log in', function () {
  it('User can log in', function () {
    // clear test DB and create user
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
  
    cy.contains('Logout')
  })
})

describe('Registration is successful and logs user in', function () {
  it('User can log in', function () {
    // clear test DB
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    // click to open registration form
    cy.visit('http://localhost:3000')
    cy.contains('Create an Account').click()

    // fill out form
    cy.get('#register_username').type('test_user')
    cy.get('#register_password').type('test_password')
    cy.get('#confirm_password').type('test_password')

    cy.contains('Register').click()
  
    cy.contains('Logout')
  })
})