exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    
    // welcome
    this.createCollectionSelector = page.locator('#create-collection');
    this.addCollectionSelector = page.locator('#add-collection');
    this.importCollectionSelector = page.locator('#import-collection');
    this.loadSampleCollectionSelector = page.locator('#load-sample-collection');

    // sample collection
    this.loadSampleCollectionToastSuccess = page.getByText('Sample Collection loaded successfully');
    this.sampeCollectionSelector = page.locator('#sidebar-collection-name');
    this.getUsersSelector = page.getByText('Users');
    this.getSingleUserSelector = page.getByText('Single User');
    this.getUserNotFoundSelector = page.getByText('User Not Found');
    this.postCreateSelector = page.getByText('Create');
    this.putUpdateSelector = page.getByText('Update');

    // request panel
    this.sendRequestButton = page.locator('#send-request');
    this.statusRequestSuccess = page.getByText('200 OK');
    this.statusRequestNotFound = page.getByText('404 Not Found');
    this.statusRequestCreated = page.getByText('201 Created');
    
    // create collection
    this.collectionNameField = page.locator('#collection-name');
    this.submitButton = page.locator(`button[type='submit']`);
    this.createCollectionToastSuccess = page.getByText('Collection created');
  }

  async open() {
    await this.page.goto('/');
  }

  async loadSampleCollection() {
    await this.loadSampleCollectionSelector.click();
  }

  async getUsers() {
    await this.sampeCollectionSelector.click();
    await this.getUsersSelector.click();
    await this.sendRequestButton.click();
  }

  async getSingleUser() {
    await this.getSingleUserSelector.click();
    await this.sendRequestButton.click();
  }

  async getUserNotFound() {
    await this.getUserNotFoundSelector.click();
    await this.sendRequestButton.click();
  }

  async createUser() {
    await this.postCreateSelector.click();
    await this.sendRequestButton.click();
  }

  async updateUser() {
    await this.putUpdateSelector.click();
    await this.sendRequestButton.click();
  }

  async createCollection(collectionName) {
    await this.createCollectionSelector.click();
    await this.collectionNameField.fill(collectionName);
    await this.submitButton.click();
  }
}
