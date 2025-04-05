describe('Home Page Tests', () => {
  const baseUrl = 'https://gabrielvolponi-txt.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl).then(() => {
      cy.url().should('contain', baseUrl);
    });
  });

  it('Validate Page Title', () => {
    cy.title().should('eq', 'Gabriel Volponi');
  });

  it('Validate Hero Section', () => {
    cy.get('.about_me').should('exist');
    cy.get('#apresentation').should('contain.text', 'Hey, Nice to meet You 👋🏽☕');
    cy.get('#who-am-i').should('contain.text', 'Who am I?');
    cy.get('.about_me p').should('contain.text', "Hi, I'm Gabriel Volponi");
  });

  it('Validate Stacks Section', () => {
    cy.get('.stacks').should('exist');
    cy.get('.stacks h2').should('contain.text', 'Stacks');
    cy.get('.stacks ul li i').should('have.length.greaterThan', 0);
    cy.get('.stacks ul li i[data-icon="javascript"]').should('exist');
  });

  it('Validate Social Links', () => {
    cy.get('.where_am_i').should('exist');
    cy.get('.where_am_i h2').should('contain.text', 'Find Me');
    cy.get('.where_am_i ul li a').should('have.length.greaterThan', 0);
    cy.get('.where_am_i ul li a').each((link) => {
      cy.wrap(link).should('have.attr', 'href').and('not.be.empty');
    });
  });

  it('Validate Portfolio Link in Footer', () => {
    cy.get('.visual_Portfolio a').should('exist');
    cy.get('.visual_Portfolio a').should('have.attr', 'href', 'https://gabrielvolponi.vercel.app/');
    cy.get('.visual_Portfolio a').should('contain.text', 'Visit my Portfolio');
  });

  it('Validate Social Media Icons in Footer', () => {
    cy.get('.socials .links_socials a i').should('have.length.greaterThan', 0);
    cy.get('.socials .links_socials a i[data-icon="x"]').should('exist');
    cy.get('.socials .links_socials a i[data-icon="figma"]').should('exist');
  });

  it('Validate Responsive Design for Mobile', () => {
    cy.viewport(480, 800); // Simulate mobile screen
    cy.get('body').should('have.css', 'font-size', '24px'); // Adjust based on your CSS
    cy.get('.stacks ul').should('have.css', 'flex-direction', 'column');
  });

  it('Validate External Links Open in New Tab', () => {
    cy.get('a[target="_blank"]').each((link) => {
      cy.wrap(link).should('have.attr', 'href').and('not.be.empty');
    });
  });
});