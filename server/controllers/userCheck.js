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

    const email = true;
    const phone = true;
    const password = true;
    
    // Respond with the result
    res.status(200).send({
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

module.exports = router;