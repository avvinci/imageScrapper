const rp = require("request-promise");
const url = "https://wallpaperplay.com/board/motivational-desktop-wallpapers";
const cheerio= require("cheerio");
const download = require("image-downloader");

rp(url)
  .then(function(html) {
    const $ = cheerio.load(html);
    let data = ($('#82656').html());
    console.log(data);
    let temp = {"data": data};
    // var obj  = JSON.parse(temp); 
    console.log(obj) ;

  })
  .catch(function(err) {
    console.log(err);
  });

const ImageStart = 82586;
let options = {
  url: "https://wallpaperplay.com/walls/full/f/8/3/82586.jpg",
  dest: "./images" // Save to /path/to/dest/image.jpg
};

// async function downloadIMG() {
//   try {
//     const { filename, image } = await download.image(options);
//     console.log(filename); // => /path/to/dest/image.jpg
//   } catch (e) {
//     console.error(e);
//   }
// }

// async function scrapeImages() {
//   for (let i = 0; i < 10; i++) {
//     let currentImage = ImageStart + i;
//     options.url = `https://wallpaperplay.com/walls/full/f/8/3/${currentImage}.jpg`;
//     await downloadIMG();
//   }
// }

// scrapeImages();
