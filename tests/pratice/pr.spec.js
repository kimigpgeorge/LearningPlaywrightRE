const{test,expect}=require('@playwright/test')


test('playloc',async({page})=>{
await page.goto('https://rahulshettyacademy.com/angularpractice/')

await page.getBylabel("Name").fill("abc")
await page.getBylable("Email").fill("abc@gmail.com")
await page.getByPlaceholder("Password").fill("abc123")

await page.getByRole('button',{name:'submit'}).click()

await page.getByRole('link',{name:'button'}).click()

})
test.only('popvalidations',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden()

    await page.on('dialog',dialog=>dialog.accept())
    await page.locator('#confirmbtn').click()

    await page.locator('#mousehover').hover()
    const framespage= page.frameLocator('#courses-iframe')

    await expect(framespage.getByText("contact@rahulshettyacademy.com")).toBeVisible()

})

