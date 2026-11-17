const{test,expect,request}=require('@playwright/test');

const loginpayLoad={userEmail: "kimigpgeorge@gmail.com", userPassword: "Jewel@1993"}
const orderpayLoad={orders: [{country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3"}]}
let token;
let orderId;

test.beforeAll( async ()=>
{

    const apicontext = await request.newContext();
    const loginResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginpayLoad
    })    

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson=await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);

    const orderResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
   {

      data:orderpayLoad,
      headers:{
                  'Authorization':token,
                  'Content-Type':'application/json'
               }

    })
      const orderResponseJson=await orderResponse.json();
      console.log(orderResponseJson);
      orderId = orderResponseJson.orders[0];


});


test.beforeEach(()=>
{


})

test('browser context playwright test',async ({page})=>
{

    await page.addInitScript(value=>{
      window.localStorage.setItem('token',value);
    },token);

    await page.goto("https://rahulshettyacademy.com/client");
    //await page.locator("#userEmail").fill(email)
    //await page.locator("#userPassword").fill("Jewel@1993")
    //await page.locator("[value='Login']").click();

    //await page.waitForLoadState('networkidle');
  

   
   

    await page.locator("button[routerlink*='myorders']").click();

   await page.locator("tbody").waitFor();

   const rows = await page.locator("tbody tr");

   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) 
         
      {
         await rows.nth(i).locator("button").first().click();
         break;
      }


   }

   const orderIdDetails = await page.locator(".col-text").textContent();
   await page.pause();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();


   
});

