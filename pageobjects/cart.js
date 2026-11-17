class cart
{
    constructor(page)
    {
        this.page=page;
        this.check=page.locator("text=Checkout")
        this.cartProducts = page.locator("div li").first();
        
    }

    async verifycart(productName)
    {
        await this.cartProducts.waitFor();
        //const bool =await this.getProductLocator(productName).isVisible();
        //await expect(bool).toBeTruthy();
    }

    getProductLocator(productName)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}

    

    async checkout()
    {
        await this.check.click();
    
    }    
    



}
module.exports = {cart};