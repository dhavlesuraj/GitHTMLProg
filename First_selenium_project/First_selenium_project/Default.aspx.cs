using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using Maersk.RPA.WebAutomation;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace First_selenium_project
{
    public partial class Default : System.Web.UI.Page
    {
        public object IwebDriver { get; private set; }

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            IWebDriver driver=new ChromeDriver();
            AutomationHelper objHelper=new AutomationHelper();


            driver.Navigate().GoToUrl("https://www.saucedemo.com/");
            AutomationHelper.WaitUntilElementIsVisible();
            var input1=driver.FindElement(By.Name("user-name"));
       
            var input2=driver.FindElement(By.Name("password"));
          
            driver.Quit();
        }
    }
}