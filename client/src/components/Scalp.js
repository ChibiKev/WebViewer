const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/ChibiKev');
  await page.screenshot({path: '../public/image.png'});
  // while(true){
  //   await page.reload(500);
  //   await page.screenshot({path: './assets/image.png'});
  // }
  
  // await browser.close();
})();