/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */

let counter = 1;

const selector = {
    class(attribute, className){
        return `${attribute}[class='${className}']`
    },
    type(attribute, value){
        return `${attribute}[type='${value}']`
    },
    id(value){
        return `#${value}`
    }
}

async function doLogin(page) {
    const loginUrl = 'http://localhost/index.php?route=account/login'
    await page.waitForTimeout(2000)
    await page.goto(loginUrl);
    await page.type(selector.id('input-email'), 'me1@mail.md');
    await page.type(selector.id('input-password'), 'Test1234');
    console.log(`Entered user credentials`)
    await page.click(selector.type('input', 'submit'));
    console.log(`Login is successful`)
}

async function setup(browser, context) {
    // launch browser for LHCI
    const page = await browser.newPage();
    await page.setCacheEnabled(true)

    if(counter===1){
        await doLogin(page)
    }
    else{
        await page.goto(context.url);
    }
    // close session for next run
    await page.close();
    counter++
}

module.exports = setup
