const{test,expect}=require('@playwright/test')

test('pratice',async({page,context})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

const docklink = page.getByRole
    ("link",{name:'Free Access to InterviewQues/ResumeAssistance/Material'})

    //await expect(docklink).toHaveAttribute("class","blinkingText");

    const [newpage] = await Promise.all([
    context.waitForEvent('page'),docklink.click()])

     const text = await newpage.locator('.red').textContent();
    console.log(text)
    

})