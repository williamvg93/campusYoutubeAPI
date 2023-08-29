let urlAva = ""
let userName = ""

export const getVidDet = async(typePet, urlPet, vidId) => {

    console.log(vidId);

    let peticion = ''

    if (typePet != 'json'){
        peticion = await fetch(urlPet, options)   
    } else {
        peticion = await fetch(urlPet)   
    }

    let resp = await peticion.json();
    console.log(resp);
    console.log(peticion);
    console.log(resp.keywords.length);

    urlAva = resp.author.avatar[2].url
    userName = resp.author.title

    /* Agregando el avatar en la navegacion */
    let contNavLogo = document.querySelector('#contNavLogo')
    console.log(contNavLogo)
    contNavLogo.insertAdjacentHTML('beforeend', /* html */ `
        <img src="${urlAva}" alt="" id="user_img">
    `)

    /* Agregando video Principal  */
    let contPlayVid = document.querySelector('#contPlayVid')
    console.log(contPlayVid)
    contPlayVid.insertAdjacentHTML("afterbegin", /* html */ `
        <iframe src="https://www.youtube.com/embed/izvodnnCvt0?si=0LEHxTMcnFagHCYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
    
}


export const getVidList = async(typePet, urlPet, vidId) => {

        console.log(vidId);
        let peticion = ''
        if (typePet != 'json'){
            peticion = await fetch(urlPet, options)   
        } else {
            peticion = await fetch(urlPet)   
        }
    
        let resp = await peticion.json();
        console.log(resp);
        console.log(peticion);
            
        let rightSidebar = document.querySelector('#rightSidebar')

        /* Agregando la lista de videos  */

        rightSidebar.insertAdjacentHTML("beforeend", /* html */ `

            ${resp.contents.map((data) =>  /* html */ `       
            
                    <div class="side-video-list">
                        <a href="pages/playVideo.html?idVid=${data.video.videoId}" class="small-thumbnail"><img src="${data.video.thumbnails[3].url}" alt=""></a>
                        <div class="vid-info" id="vid-info">
                            <a href="#">${data.video.title}</a>
                            <p>${userName}</p>
                            <p>${data.video.stats.views} views &bull; ${data.video.publishedTimeText} </p>
                        </div>
                    </div>

                `).join(" ")
            }        
        `)
    
    }