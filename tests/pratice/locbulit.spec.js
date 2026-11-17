const{test,expect} = require('@playwright/test')

test.describe.configure({mode:'parallel'})
test('builtin',async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

const logo = await page.getByAltText('company-branding')
await expect(logo).toBeVisible()

await page.getByPlaceholder('Username').fill("Admin")
await page.getByPlaceholder('Password').fill("admin123")

await page.getByRole('button',{type:'submit'}).click()

const name = await page.locator('.oxd-userdropdown-name').textContent()

await expect(page.getByText(name)).toBeVisible()

})

test('validapratice',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')

    await page.getByPlaceholder('email@example.com').fill("kimigpgeorge@gmail.com")
    await page.getByPlaceholder('enter your passsword').fill("Jewel@1993")
    await page.locator("[value='Login']").click();
    //await page.getByRole('button',{name:"Login"}).click()
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Automation Practice')).toBeVisible()

    await page.locator('.card-body').filter({hasText:"ZARA COAT 3"}).getByRole('button',{name :'Add To Cart'}).click()

    await page.getByRole('listitem').getByRole('button',{name:'  Cart '}).click()
    await page.locator('div li').first().waitFor()

    await expect(page.getByText('ZARA COAT 3')).toBeVisible()
    await page.getByRole('button',{name:'checkout'}).click()
    await page.getByPlaceholder('Select Country').pressSequentially("ind")
    await page.getByRole('button',{name:' India'}).nth(1).click()
    await page.getByText('Place Order ').click()

    await expect(page.getByText('	ZARA COAT 3')).toBeVisible()


    



})