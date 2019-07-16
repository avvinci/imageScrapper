const rp = require("request-promise");
const cheerio = require("cheerio");
const download = require("image-downloader");

let options = {
  url: "https://wallpaperplay.com/walls/full/f/8/3/82586.jpg",
  dest: "./images" // Save to /path/to/dest/image.jpg
};

let NumImages = 31;
let urlList = [];
const url = "https://wallpaperplay.com/board/motivational-desktop-wallpapers";

async function getUrls() {
 await rp(url)
    .then(function(html) {
      const $ = cheerio.load(html);
      console.log($("a img").attr("data-src"));

      // $("a img").each(function(i, data) {
      //   // let content = $(data ,'a').attr('href');
      //   console.log(data);
      // });
      const ImageStart = 82596;
      console.log("---not done");
      for (let i = 0; i < NumImages; i++) {
        let id = ImageStart + i;
        let url = $(`#${id} a img`).attr("data-src");
        console.log(url);
        urlList.push(url);
      }
      console.log("---done");
    })
    .catch(function(err) {
      console.log(err);
    });
}

async function downloadIMG() {
  try {
    const { filename, image } = await download.image(options);
    console.log(filename); // => /path/to/dest/image.jpg
  } catch (e) {
    console.error(e);
  }
}

async function scrapeImages() {
  await getUrls();
  for (let i = 0; i < NumImages; i++) {
    options.url = `https://wallpaperplay.com/${urlList[i]}`;
    console.log('downloading..', options.url);
    await downloadIMG();
  }
}

scrapeImages();
