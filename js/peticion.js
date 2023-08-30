import { peticionIndex } from "./modules/getMainCont.js";

const urlChanel = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const urlVidLis = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

/* const urlChaJson = '../source/chanelDetails.json' */
const urlChaJson = './campusYoutubeAPI/source/chanelDetails.json'
const urlVidLisJson = './campusYoutubeAPI/source/chanelVideos.json'
console.log();

/* Chanel ID: "UC8fkwsjcI_MhralEX1g4OBw" UC8fkwsjcI_MhralEX1g4OBw */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '988cd5333amsh5514483de96ce71p152625jsnab419d6b67d8',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

/* Código Consumiendo la API Youtube: */
/* let resPetChanel = peticion("api", urlChanel, "chanel", options) */
/* let resPetVidList = peticion("api", urlVidLis, "vidList", options) */


let resPetChanel = peticionIndex("json", urlChaJson, "chanel", '')
let resPetVidList = peticionIndex("json",urlVidLisJson, "vidList", '')

