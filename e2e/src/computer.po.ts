import { browser, by, element } from 'protractor';
export class ComputerPage {
  sleep() {
    browser.driver.sleep(5000);
  }
  completeForm() {
    let modele = element.all(by.id('modele'));
    let marque = element.all(by.id('inputRadio-Apple'));
    let type = element.all(by.id('type'));
    let categorie = element.all(by.id('inputRadio-Gaming'));
    let prixAchat = element.all(by.id('prixAchat'));
    let prixVente = element.all(by.id('prixVente'));
    modele.sendKeys('test add e2e OMEN');
    marque.click();
    type.sendKeys('Fixe');
    categorie.click();
    prixAchat.sendKeys(500);
    prixVente.sendKeys(700);
  }
}
