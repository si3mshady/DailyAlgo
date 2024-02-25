const pd = require("node-pandas")
const GoogleImages = require('google-images');
const fs = require('fs')
const { v4  } = require('uuid');


KEY = "AIzaSyDt0GqHGbYreOhzFv9D9jyVrm_9SXTHE4I"
IMAGE = "image-search"


const cseId = '522ec7ef7f924440d'
const apikey = 'AIzaSyDLmuRviT1sKD0N75RjfY9gkSrHLRKbFDw'
const client = new GoogleImages(cseId, apikey);


const parseCSV =  async () => {


const result = await fs.readFile('top100.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const artist_data = JSON.parse(data)
  const artists = Object.keys(artist_data)
  const songs = Object.values(artist_data)



    songs.forEach((song, i) => {



        client.search(song, {num: 1}).then(images => {

               var element = {

                   song: song,
                   URL: images[0].url,
                   ID: v4()
               }

             })





    });







    //
    // artists.forEach((artist, i) => {
    //
    // songs.forEach((song, i) => {
    //
    //   client.search(artist, {num: 1}).then(images => {
    //
    //          var element = {
    //              artist: artist,
    //              song: song,
    //              URL: images[0].url,
    //              ID: v4()
    //          }
    //
    //
    //          fs.appendFile('MasterSongList.json',JSON.stringify(element) + ',' + '\n', 'utf8',
    //
    //                         function(err) {
    //                             if (err) throw err;
    //
    //                             console.log("Data is appended to file successfully.")
    //                 });
    //
    //
    //






});




}


parseCSV()

//
// var wl = parseCSV()
//
// wl.forEach(key => {
//
//     client.search(key.Name, {num: 1}).then(images => {
//
//         var element = {
//             Name: key.Name,
//             Country: key.Country,
//             Region: key.Region,
//             Rating: key.Rating,
//             Price: key.Price,
//             Year: key.Year,
//             URL: images[0].url,
//             ID: v4()
//         }
//
//         fs.appendFile('MasterWineList.json',JSON.stringify(element) + ',' + '\n', 'utf8',
//
//                 function(err) {
//                     if (err) throw err;
//
//                     console.log("Data is appended to file successfully.")
//         });
//
//         })
//
//
// }
// )




  //
  // artists.forEach((artist, i) => {
  //
  // songs.forEach((song, i) => {
  //
  //   client.search(artist, {num: 1}).then(images => {
  //
  //          var element = {
  //              artist: artist,
  //              song: song,
  //              URL: images[0].url,
  //              ID: v4()
  //          }
  //
  //
  //          fs.appendFile('MasterSongList.json',JSON.stringify(element) + ',' + '\n', 'utf8',
  //
  //                         function(err) {
  //                             if (err) throw err;
  //
  //                             console.log("Data is appended to file successfully.")
  //                 });
  //
  //
  //
  //
  //
  // });
