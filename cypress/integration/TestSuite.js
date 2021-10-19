describe('Sauvegarder Filters', () => {
    
  beforeEach(() => {
    //Faire login dans le site Centreon
      cy.visit ('http://192.168.1.174/centreon/'),
      cy.get('.inputclassic').type('admin'), // User
      cy.get('.inputclassicPass').type('centreon'), //Mot de passe
      cy.get('.btc').click()    
  })
  
  it.skip('1. Testcase #1', () => {
      //TestCase1: Sauvegarder votre actuel filtre tant qu’un nouveau filtre
      cy.get('.jss125 > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').click(),
      cy.get('.jss125 > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('Partitioning'),
      cy.get('.MuiAccordionSummary-content > .jss125 > .MuiButton-root').click(),
      cy.get('[title="Save filter"]').click(),
      cy.get('.MuiList-root > [tabindex="0"]').click(),
      cy.get('.MuiDialogContent-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('TC1'),
      cy.get('.MuiDialogActions-root > :nth-child(2)').click(),
      cy.get('.MuiAlert-message').should('have.text', 'Filter created'),
      cy.get('.MuiAlert-action > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
    })
  
    it.skip('2. Testcase #2', () => {
      
      //Call - TestCase #1
      cy.get('.jss125 > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').click(),
      cy.get('.jss125 > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('Partitioning'),
      cy.get('.MuiAccordionSummary-content > .jss125 > .MuiButton-root').click(),
      cy.get('[title="Save filter"]').click(),
      cy.get('.MuiList-root > [tabindex="0"]').click(),
      cy.get('.MuiDialogContent-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('TC2'),
      cy.get('.MuiDialogActions-root > :nth-child(2)').click(),
      cy.get('.MuiAlert-message').should('have.text', 'Filter created'),
      cy.get('.MuiAlert-action > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click(),
      
      
      //TestCase #2: Editer le filtre actuel afin qu'il soit mis à jour en utilisant les critères actuellement appliqués
      cy.reload(),
      cy.get('.MuiAccordionSummary-expandIcon').click,
      cy.get('.MuiAccordionDetails-root > .jss125 > .MuiTypography-root').should('have.text','Criterias')
      //Anomalies trouvées

    })

    it.skip('3. Testcase #3', () => {

    //TestCase3: Supprimer un filtre
    //Mise en place dans "AfterEach"
    
  })


    it('4. Testcase #4', () => {
   
      //Call - TestCase #1
   cy.get('.jss125 > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').click(),
   cy.get('.jss125 > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('Partitioning'),
   cy.get('.MuiAccordionSummary-content > .jss125 > .MuiButton-root').click(),
   cy.get('[title="Save filter"]').click(),
   cy.get('.MuiList-root > [tabindex="0"]').click(),
   cy.get('.MuiDialogContent-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('TC4'),
   cy.get('.MuiDialogActions-root > :nth-child(2)').click(),
   cy.get('.MuiAlert-message').should('have.text', 'Filter created'),
   cy.get('.MuiAlert-action > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click(),
   
   
   //TestCase #4: Renommer un filtre
   cy.reload(),
   cy.get('[title="Save filter"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click(), 
   cy.get('.MuiList-root > [tabindex="0"]').click(),
   cy.get('.jss195 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('TC4modifié').type('{enter}'),
   cy.get('.MuiAlert-message').should('have.text', 'Filter updated')
   
    })

    afterEach(() => {
      //Effacer le filtre déjà crée pour eviter la data redoublante
    cy.reload(),
    cy.get('[title="Save filter"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click(),
    cy.get('.MuiList-root > [tabindex="0"]').click(),
    cy.get('[title="Delete"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click(),
    cy.get('.MuiDialogActions-root > :nth-child(2)').click(),
    cy.get('[aria-label="Close"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click,
    cy.get('.MuiAlert-message').should('have.text', 'Filter deleted')
    })
  
})
  