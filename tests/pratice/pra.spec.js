const{test,expect} = require('@playwright/test')

test("pratice",async({browser})=>
{
    const conetxt=await browser.newContext();
    const page=await conetxt.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('#username').fill("rahulshettyacademy")
    await expect(page.locator('#username')).toHaveValue("rahulshettyacademy")
    await page.locator('#password').fill("Learning@830$3mK2")
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await page.locator("select.form-control").selectOption('consult')
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.getByRole("button",{name:'Sign In'}).click();

    const docklink = page.getByRole
    ("link",{name:'Free Access to InterviewQues/ResumeAssistance/Material'})

    //await expect(docklink).toHaveAttribute("class","blinkingText");

    const [newpage] = await Promise.all([
    conetxt.waitForEvent('page'),docklink.click()])

     const text = await newpage.locator('.red').textContent();
    console.log(text)
    
  await expect(newpage.locator('.red')).toBeVisible();
  await expect(newpage.locator('.red')).toHaveText(/\S+/);


})

