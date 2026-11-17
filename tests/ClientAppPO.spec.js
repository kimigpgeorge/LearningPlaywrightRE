const {test,expect}=require('@playwright/test');
const {POManager} = require('../pageobjects/POManager')
const {cart} =require('../pageobjects/cart');
const {OdersReview} =require('../pageobjects/OdersReview');
const {OrdersHistory}=require('../pageobjects/OrdersHistory')
//Converts the JSON string back into a JavaScript object>convert js object in jsonstring
const dataset=JSON.parse(JSON.stringify(require('../Utils.js/placeorderTestData.json')))

for(const data of dataset)
{   
   test.only(`browser context playwright test ${data.productName}`,async ({page})=>
   {
      const pomobj=new POManager(page);
      const products = page.locator(".card-body");

      const loginpage = pomobj.getLoginPage();
      await loginpage.goTo();
      await loginpage.validLogin(data.username,data.password);

      const Dashboardpage = pomobj.getDashboardpage();
      await Dashboardpage.searchProductAddcart(data.productName);
      await Dashboardpage.navigateToCart();

      const cartobj = new cart(page)
      await cartobj.verifycart(data.productName);
      await cartobj.checkout();

      const OdersReviewobj = new OdersReview(page)
      await OdersReviewobj.selectCountry("ind","India");
      //await OdersReviewobj.verifymail(username);
      const orderId = await OdersReviewobj.placeOd();
      console.log(orderId)

      Dashboardpage.navigateToCart()
      const oderhisobj = new OrdersHistory(page)
      //oderhisobj.verfiyoders(orderId)
      //expect(orderId.includes(await oderhisobj.getOrderId())).toBeTruthy();


      
   });
}