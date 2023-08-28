const urlData = window.location.search
console.log(urlData);
const urlParam = new URLSearchParams(urlData)
console.log(urlParam);
urlVid = urlParam.get('idVid')
console.log(urlVid);

const urlChanel = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const urlVidLis = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '988cd5333amsh5514483de96ce71p152625jsnab419d6b67d8',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const peticion = async(urlPet, optiPet) => {

    let peticion = await fetch(urlPet, options)
    let resp = await peticion.json();
    let urlAva = ""
    let userName = ""
    console.log(peticion);
    console.log(resp);

    if (optiPet == "chanel"){
        urlAva = resp.avatar[2].url
        userName = resp.title
        console.log(resp.avatar[2].url);
        /* Agregando el avatar en la navegacion */
        let contLogoNav = document.querySelector('#contNavLogo')
        console.log(contLogoNav)
        contLogoNav.insertAdjacentHTML('beforeend', /* html */ `
            <img src="${resp.avatar[2].url}" alt="" id="user_img">
        `)
    
        /* Agregando el avatar en la navegacion */
        let contBanner = document.querySelector('#contBanner')
        console.log(contBanner)
        contBanner.insertAdjacentHTML('beforeend', /* html */ `
            <img src="${resp.banner.desktop[5].url}" alt="">
        `)
    
       
        return resp
    }

    if (optiPet == "vidList") {
        let vidListCont = document.querySelector('#vidListCont')
        console.log(vidListCont)
        vidListCont.insertAdjacentHTML("beforeend", /* html */ `

            ${resp.contents.map((data) =>  /* html */ `         
                    <div class="vid-list">
                        <a href="pages/playVideo.html?idVid=${data.video.videoId}"><img src="${data.video.thumbnails[3].url}" alt="" class="thumbnail"></a>
                        <div class="flex-div">
                            <img src="${urlAva}" alt="">
                            <div class="vid-info">
                                <a href="pages/playVideo.html"> ${data.video.title} </a>
                                <p> ${userName} </p>
                                <p>${data.video.stats.views} &bull; ${data.video.publishedTimeText}</p>
                            </div>
                        </div>
                    </div>
                `).join(" ")
            }        
        `)
        
        resp.contents.map((data) => {
            console.log(data.video)
        })
    }

     /* Chanel ID: "UC8fkwsjcI_MhralEX1g4OBw" UC8fkwsjcI_MhralEX1g4OBw */
}