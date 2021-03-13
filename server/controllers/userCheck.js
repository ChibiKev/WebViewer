const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();

router.get('/properties', async (req, res) => {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  try{
    const page = await browser.newPage();
    await page.goto(req.query.url, {waitUntil: 'networkidle2'}); // URL is given by the "user" (your client-side application)
    const pageInputs = await page.evaluate(() => Array.from(document.querySelectorAll('input'), element => element.outerHTML));
    var username = false;
    var email = false;
    var phone = false;
    var password = false;

    for(const input of pageInputs){
      let input_lower = input.toLowerCase();
      if(input_lower.includes("user")){
        username = true;
      }
      if(input_lower.includes("email")){
        email = true;
      }
      if(input_lower.includes("phone") || input_lower.includes("mobile")){
        phone = true;
      }
      if(input_lower.includes("pass")){
        password = true;
      }
    }

    // Respond with the result
    res.status(200).send({
      username: username,
      email: email,
      phone: phone,
      password: password
    })
  }
  catch(error){
    console.log(error);
  }
  await browser.close();
})

router.get('/login', async (req, res) => {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  try{
    const page = await browser.newPage();
    await page.goto(req.query.url, {waitUntil: 'networkidle2'}); // URL is given by the "user" (your client-side application)
    var user = req.query.user;
    var pass = req.query.pass;
    await page.type('[type=text]', user);
    await page.type('[type=password]', pass);
    const screenshotBuffer = await page.screenshot({fullPage: true});
  
    // Respond with the image
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': screenshotBuffer.length
    });
    res.end(screenshotBuffer);
  }
  catch(error){
    console.log(error);
  }
  await browser.close();
})

module.exports = router;