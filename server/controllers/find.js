const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();

router.get('/image', async (req, res) => {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  const device = puppeteer.devices[req.query.device];
  await page.emulate(device);
  await page.goto(req.query.url, {waitUntil: 'networkidle2'}); // URL is given by the "user" (your client-side application)
  const text = req.query.text.text;
  const textCases = req.query.text.cases;
  const found = await page.evaluate((text, textCases) => window.find(text, textCases === 'g' ? true : false), text, textCases); // Find Text
  const regex = new RegExp(text, textCases);
  const amountFound = (await page.content()).match(regex);
  const screenshotBuffer = await page.screenshot({fullPage: true});

  // Respond with the image
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': screenshotBuffer.length
  });
  res.end(screenshotBuffer);

  await browser.close();
})

router.get('/pdf', async (req, res) => {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  const device = puppeteer.devices[req.query.device];
  await page.emulate(device);
  await page.goto(req.query.url, {waitUntil: 'networkidle2'}); // URL is given by the "user" (your client-side application)
  const text = req.query.text.text;
  const textCases = req.query.text.cases;
  const found = await page.evaluate((text, textCases) => window.find(text, textCases === 'g' ? true : false), text, textCases); // Find Text
  const regex = new RegExp(text, textCases);
  const amountFound = (await page.content()).match(regex);
  const pdfBuffer = await page.pdf({format: 'letter'});

  // Respond with the pdf
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Length': pdfBuffer.length
  });
  res.end(pdfBuffer);

  await browser.close();
})

router.get('/html', async (req, res) => {
  const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  const device = puppeteer.devices[req.query.device];
  await page.emulate(device);
  await page.goto(req.query.url, {waitUntil: 'networkidle2'}); // URL is given by the "user" (your client-side application)
  const text = req.query.text.text;
  const textCases = req.query.text.cases;
  const found = await page.evaluate((text, textCases) => window.find(text, textCases === 'g' ? true : false), text, textCases); // Find Text
  const regex = new RegExp(text, textCases);
  const amountFound = (await page.content()).match(regex);
  const htmlContent = await page.content();
  
  // Respond with the html
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end(htmlContent);

  await browser.close();
})

module.exports = router;