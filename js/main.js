import { peticionIndex } from "./modules/getMainCont.js";


let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')

console.log(sidebar);

menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}


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
/* let resPetChanel = peticionIndex("api", urlChanel, "chanel", options) */
/* let resPetVidList = peticionIndex("api", urlVidLis, "vidList", options) */


let resPetChanel = peticionIndex("json", urlChaJson, "chanel", '')
let resPetVidList = peticionIndex("json",urlVidLisJson, "vidList", '')

