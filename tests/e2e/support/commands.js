// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-plugin-snapshots/commands';

Cypress.Commands.add('visitDemo', (ipCountry) => {
  cy.visit('/', {
    onBeforeLoad(win) {
      cy.stub(win, 'fetch').withArgs('https://ip2c.org/s')
        .resolves({
          ok: true,
          text: () => Promise.resolve(ipCountry ? `1;${ipCountry}` : '0'),
        });
    },
  });

  cy.document().then((doc) => {
    const $style = doc.createElement('style');
    $style.innerHTML = '#app.v-application, #app.v-application * { font-family: Helvetica !important; }';
    console.log(doc);
    doc.head.appendChild($style);
  });

  cy.document().its('fonts.status').should('equal', 'loaded');
});
