import { peticionIndex, getVidList } from "./modules/getMainCont.js";


let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')
let searchInput = document.querySelector('#searchInput')

console.log(searchInput);

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


searchInput.addEventListener("change", () => {

    /* console.log('function activate !!!'); */
    console.log(searchInput.value.toLowerCase().trim());
	let inputVal = searchInput.value.toLowerCase().trim()
    let listaEleme = document.querySelector('.resuSearList')
	listaEleme.innerHTML = ''
    listaEleme.style.visibility = "visible"

	let videoList = getVidList("json",urlVidLisJson, '')
		.then((videoList) => {
			let contLi = 1
			/* console.log(videoList); */
			videoList.map((videoInfo) => {
				if (videoInfo.name.toLowerCase().includes(inputVal) && contLi <= 10 ){
					console.log(videoInfo.name.toLowerCase());
					listaEleme.insertAdjacentHTML('beforeend', /* html */`
						<li><a href="pages/playVideo.html?idVid=${videoInfo.id}&vidView=${videoInfo.fechaPu}">${videoInfo.name}</a></li>
					`)
					contLi++
				}				
			})
			
		})

})

