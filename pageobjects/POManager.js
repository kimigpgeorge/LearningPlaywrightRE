const{Loginpage}= require('./Loginpage')
const{Dashboard}= require('./Dashboard')

class POManager
{
    constructor(page)
    {
        this.page=page;
        this.loginpage = new Loginpage(this.page)
        this. Dashboardpage = new Dashboard(this.page)
    }
    getLoginPage()
    {
       return this.loginpage 
    }

    getDashboardpage()
    {
        return this.Dashboardpage
    }



}
module.exports={POManager};