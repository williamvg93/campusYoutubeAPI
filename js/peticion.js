import { peticionIndex } from "./modules/getMainCont.js";

const urlChanel = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const urlVidLis = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const urlHost = window.location.hostname
let urlChaJson = '/campusYoutubeAPI/source/chanelDetails.json'
let urlVidLisJson = '/campusYoutubeAPI/source/chanelVideos.json'

if (urlHost == '127.0.0.1') {
	console.log(urlHost);
	urlChaJson = '/source/chanelDetails.json'
	urlVidLisJson = '/source/chanelVideos.json'
}


/* Chanel ID: "UC8fkwsjcI_MhralEX1g4OBw" UC8fkwsjcI_MhralEX1g4OBw */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '96acef6a1fmsh75e923d7049e34dp155a15jsn2090a0bbcb43',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

/* Código Consumiendo la API Youtube: */
/* let resPetChanel = peticion("api", urlChanel, "chanel", options) */
/* let resPetVidList = peticion("api", urlVidLis, "vidList", options) */


let resPetChanel = peticionIndex("json", urlChaJson, "chanel", '')
let resPetVidList = peticionIndex("json",urlVidLisJson, "vidList", '')

