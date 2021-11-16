
const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// const addBtn = driver.findElement(By.xpath('//*[@class="add-btn"]'))


beforeAll(async () => {
    await (await driver).get('http://localhost:5500/movieList/index.html')
})
afterAll(async () => {
    await (await driver).quit()
})
test('Movie List Add Test', async () => {
    await driver.findElement(By.xpath('(//input)')).sendKeys("Batman\n")
    await driver.sleep(3000)
}) 
test('Movie list item can be crossed off', async () => {
    await driver.findElement(By.xpath('//*[@class="list"]')).click()
    await driver.sleep(3000)
})
test('Movie can be deleted', async () => {
    await driver.findElement(By.xpath('//*[@class="dlt-btn"]')).click()
    await driver.sleep(3000)
})


