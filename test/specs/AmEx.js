describe('Open and Test Amex', async () => {

    it('Open-Base-URL', async () => {
        await browser.url('https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/');
        await $(`//a[starts-with(text(),'Business Home')]`).waitForDisplayed();
        await browser.pause(500);
    })

    it('Click-Welcome-Offer-Blue-Business®-Plus-Credit-Card', async () => {
        await $(`a[href="/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/45094?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-Offer-BlueForBusinessPlus"]`).click();
    })

    it('Verify-Blue-Business®-Plus-Credit-Card-Page', async () => {
        // await $(`//button[starts-with(text(),'Apply Now')]`).waitForDisplayed();
        await $(`img[src="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/blue-business-plus.png"]`).waitForDisplayed();
        await expect($(`//h1`)).toHaveText(`Blue Business® Plus Credit Card`);
    })

})