const{test,expect} = require('@playwright/test');

test('praticeUI',async({browser})=>
{
    const context = await browser.newContext();
    const page= await context.newPage(); 

    const Products = page.locator(".card-body");
    const productName ='ZARA COAT 3';

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("kimigpgeorge@gmail.com");
    await page.locator("#userPassword").fill("Jewel@1993");
    await page.locator("[value='Login']").click();

    await Products.first().waitFor();

    const titles = await Products.allTextContents()
    console.log(titles)
    const count = await Products.count()
    
    for(let i=0;i<count;i++)
    {
        if (await Products.nth(i).locator("b").textContent()===productName)
        {
            await Products.nth(i).locator("text= Add To Cart").click();
            break;
        }

    }
    await page.locator("[routerlink*='cart']").click()
    await page.locator("div li").first().waitFor();
    
    const bool = page.locator("h3-has-text=ZARA COAT 3").isVisible();
    expect(bool).toBeTruthy();
    page.locator("text=Checkout").click();
    
    






});