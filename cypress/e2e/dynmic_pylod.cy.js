// Example of generating a dynamic user ID and timestamp
const userId = Cypress._.random(1000, 9999); // Random ID between 1000 and 9999
const timestamp = new Date().toISOString(); // Current timestamp

const payload = {
    userId: userId,
    createdAt: timestamp,
    name: `User_${userId}`,
    email: `user_${userId}@example.com`
  };


  describe('XPayload',()=>{
    it('Payload for POST',()=>{
  cy.fixture('userPayload').then((payload) => {
    // Replace dynamic placeholders
    const userId = Cypress._.random(1000, 9999);
    const timestamp = new Date().toISOString();
  
    payload.userId = userId;
    payload.createdAt = timestamp;
    payload.name = `User_${userId}`;
    payload.email = `user_${userId}@example.com`;
  
    cy.request({
      method: 'POST',
      url: '/api/users',
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // Assertions or further actions
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', userId);
    });
    })
  });
  })
  