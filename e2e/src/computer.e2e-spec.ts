import { ComputerPage } from './computer.po';
import { browser, logging, element, by } from 'protractor';

describe('Test de mon app sur les ordinateurs', () => {
  let page: ComputerPage;
  let nbComputer: number;

  beforeEach(() => {
    page = new ComputerPage();
    browser.get('home');
  });
  it('Recherche le lien d\'ajout d\'ordinateur et clique dessus', () => {
    element.all(by.css('.countrow')).then(totalRows => {
      this.nbComputer = totalRows.length;
      element(by.css('#addComputerLink')).click();
      expect(browser.driver.getCurrentUrl()).toContain('addComputer');
    });
  });

  it('Test d\'ajout d\'un nouvel ordi', () => {
    browser.get('addComputer');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.css('#submitBtn'));
    submitBtn.click().then(fn => {
      element.all(by.css('.countrow')).then(totalNewRows => {
        this.nbComputer += 1;
        const compareComputer = this.nbComputer;
        expect(totalNewRows.length).toEqual(compareComputer);
        page.sleep();
      });
    });
  });

  it('Test de la suppression d un ordi', () => {
    browser.get('home');
    let lastDeleteButton = element.all(by.css('.deleteComputer')).last();
    lastDeleteButton.click().then(fn => {
      element.all(by.css('.countrow')).then(totalNewRows => {
        this.nbComputer -= 1;
        const compare = this.nbComputer;
        expect(totalNewRows.length).toEqual(compare);
      });
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
