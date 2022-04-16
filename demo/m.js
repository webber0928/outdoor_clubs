const puppeteer = require('puppeteer');
const gm = require('gm')
const axios = require('axios')
const fs = require('fs');
const tesseract = require("node-tesseract-ocr")
// const img = fs.readFileSync("4.png");
// const img2 = fs.readFileSync("2.png");
const config = {
  lang: "eng",
  oem: 3,
  psm: 3,
}


// let newPath
let gmtest = function(img) {
  return new Promise(async (resolve, reject) => {
    await gm(img).threshold(34, true).resize(200, 100).write('test.png', (err) => {
      if (err) {
        console.log(err)
        return reject(err);
      }
      resolve(newPath);
    });
  }).then(() => {
    const test = fs.readFileSync("test.png");

    console.log('L21')
    tesseract
    .recognize(test, {
      load_system_dawg: 0,
      tessedit_char_whitelist: "0123456789",
    })
    .then((text) => {
      console.log("Result:", text)
    })
    .catch((error) => {
      console.log(error.message)
    })
  })
}

async function work() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://npm.cpami.gov.tw/apply_2_1.aspx');
    // await page.screenshot({ path: 'example.png' });
    const dob = await page.$$eval("#ContentPlaceHolder1_imgcode", el => el.map(x => x.getAttribute("src")));
    let verificationCodeImg = `https://npm.cpami.gov.tw/${dob[0]}`

    await page.select('#ContentPlaceHolder1_apply_nation', '中華民國')
    await page.$eval('#ContentPlaceHolder1_apply_sid', el => el.value = '');
    await page.$eval('#ContentPlaceHolder1_apply_email', el => el.value = '');
    await page.$eval('#ContentPlaceHolder1_vcode', el => el.value = '123456');
    
    await page.click('#ContentPlaceHolder1_btnappok');

    // 下載圖片
    await axios({
      url: `https://npm.cpami.gov.tw/${dob[0]}`,
      responseType: 'arraybuffer',
      headers: {
        Referer: 'https://npm.cpami.gov.tw',
      }
    }).then(
      async ({data}) => {
        let binaryImg = require('fs').writeFileSync('./t.jpg', data, 'binary')
        console.log('binaryImg', binaryImg)

        let b = await gmtest(binaryImg)
        console.log(b)
      }
    )

    // console.log(verificationCodeImg)
    // console.log(await gmtest(verificationCodeImg))
    
    // await browser.close();
  } catch (error) {
    console.log(error)
  }
}

work();


// let newPath
// let gmtest = function(img) {
//   return new Promise(async (resolve, reject) => {
//     await gm(img).threshold(34, true).resize(200, 100).write('test.png', (err) => {
//           if (err) return reject(err);
//           resolve(newPath);
//       });
//   }).then(() => {
//     const test = fs.readFileSync("test.png");

//     console.log('L21')
//     tesseract
//     .recognize(test, {
//       load_system_dawg: 0,
//       tessedit_char_whitelist: "0123456789",
//     })
//     .then((text) => {
//       console.log("Result:", text)
//     })
//     .catch((error) => {
//       console.log(error.message)
//     })
//   })
// }
// gmtest(img)