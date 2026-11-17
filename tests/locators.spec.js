const{test,expect}=require('@playwright/test');

test("locator",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

await expect(page.locator('#small-searchterms')).toBeVisible()
await page.locator('#small-searchterms').fill("T-shirts")

//.search-box-text
//input[name='q']
//input.search-box-text
//input.search-box-text[value='Search store']

})

