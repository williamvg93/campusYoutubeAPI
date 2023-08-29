import { getVidDet, getVidList } from "./modules/getVidPagCon.js";

const urlData = window.location.search
console.log(urlData);
const urlParam = new URLSearchParams(urlData)
console.log(urlParam);
let vidId = urlParam.get('idVid')
console.log(vidId);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '988cd5333amsh5514483de96ce71p152625jsnab419d6b67d8',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const urlChanel = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const urlVidLis = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const urlVidDet = `https://youtube138.p.rapidapi.com/video/details/?id=${vidId}&hl=en&gl=US`;


const urlChaJson = '../../source/chanelDetails.json'
const urlVidLisJson = '../../source/chanelVideos.json'
const urlVidDetJson = '../../source/videoDetails.json'

/* let resPetChanel = peticion("api", urlChanel, "chanel", options) */
/* let resPetVidDet = getVidDet("api", urlVidDet, "vidDet", options) */
/* let resPetVidList = getVidList("api", urlVidLis, "vidList", options) */

/* let resPetChanel = peticion("json", urlChaJson) */
let resPetVidDet = getVidDet("json",urlVidDetJson, vidId)
let resPetVidList = getVidList("json",urlVidLisJson, vidId)