const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();

router.get('/image', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(req.query.url); // URL is given by the "user" (your client-side application)
  const screenshotBuffer = await page.screenshot();

  // Respond with the image
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': screenshotBuffer.length
  });
  res.end(screenshotBuffer);

  await browser.close();
})

router.get('/pdf', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(req.query.url); // URL is given by the "user" (your client-side application)
  const pdfBuffer = await page.pdf();

  // Respond with the pdf
  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Length': pdfBuffer.length
  });
  res.end(pdfBuffer);

  await browser.close();
})

module.exports = router;