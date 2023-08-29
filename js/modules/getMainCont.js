export const peticionIndex = async(typePet, urlPet, optiPet, options) => {

    let peticion = ''

    if (typePet != 'json'){
        peticion = await fetch(urlPet, options)   
    } else {
        peticion = await fetch(urlPet)   
    }

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
    
        /* Agregando el Banner */
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

        /* Agregando la lista de videos  */

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
    }
}