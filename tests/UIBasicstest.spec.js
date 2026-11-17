const {test,expect}=require('@playwright/test');

test('browser context playwright test',async ({browser})=>
{
    
    const context = await browser.newContext()
    const page = await context.newPage();
    const userName=page.locator('#username');
    const SignIN=page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await userName.fill("rahulshettyacadem");
    await page.locator('[type="password"]').fill("Learning@830$3mK2");
    await SignIN.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await SignIN.click();

    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

    

});

test('UIcontrols',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator("#username");
    const signIn = page.locator("#password");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");
    await dropdown.selectOption("consult");
    
   
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect (page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(await page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class","blinkingText");
    
});

test.only('child window handling',async({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*='documents-request']");

    const[newPage]=await Promise.all(
    [
    context.waitForEvent('page'),
    documentLink.click()])

    const text = await  newPage.locator(".red").textContent();
    const arraytext = text.split("@")
    const domain = arraytext[1].split(" ")[0]
    console.log(arraytext);
    console.log(domain);

    await page.locator("#username").fill(domain);
    await page.pause();
    console.log(await page.locator("#username").textContent());


} );