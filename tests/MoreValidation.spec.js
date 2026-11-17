const{expect,test}=require('@playwright/test')

test("popvalidation",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    
    await page.locator('#displayed-text').click()
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    await page.pause();

    page.on('dialog',dialog => dialog.accept())
    await page.locator("#confirmbtn").click();

    await page.locator('#mousehover').hover();

    const framePage = page.frameLocator("#courses-iframe");
   
});
test("screenshot",async({page})=>{


 await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    
    await page.locator('#displayed-text').click()
    await expect(page.locator("#displayed-text")).toBeVisible();

    await page.locator('#displayed-text').screenshot({path:'screenshot.png'});
    await page.locator('#hide-textbox').click();
    await page.screenshot({path:'screenshot.png'});
   

    await expect(page.locator('#displayed-text')).toBeHidden();


})