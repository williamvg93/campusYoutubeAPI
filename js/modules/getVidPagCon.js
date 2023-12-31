let urlAva = ""
let userName = ""

export const getVidDet = async(typePet, urlPet, vidId, vidViews, options) => {

    console.log(vidId);
    console.log(vidViews);

    let peticion = ''

    if (typePet != 'json'){
        peticion = await fetch(urlPet, options)   
    } else {
        peticion = await fetch(urlPet)   
    }

    let resp = await peticion.json();
    console.log(resp);
    console.log(peticion);
    

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
    <iframe src="https://www.youtube.com/embed/${vidId}?si=0LEHxTMcnFagHCYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
    
     /* Agregando Tags del video  */
    console.log(resp.keywords.length);
    let mainVidTags = document.querySelector('#mainVidTags')
    if (resp.keywords.length < 1 ){
        contPlayVid.insertAdjacentHTML("beforeend", ``)
    } else {
        contPlayVid.insertAdjacentHTML("beforeend", /* html */ `
            ${resp.keywords.map((vidTag) => /* html */ `
                <a href="#"> ${vidTag} </a>
            `)}
        `)
    }
    
    /* Agregando titulo del video principal  */
    let titMaiVid = document.querySelector('#titMaiVid')
    console.log(titMaiVid)
    titMaiVid.insertAdjacentText('beforeend', /* html */ `
        ${resp.title}
    `)

    /* Agregando views del video principal  */
    let statsMainVid = document.querySelector('#statsMainVid')
    console.log(statsMainVid)
    statsMainVid.insertAdjacentHTML('beforeend', /* html */ `
        ${resp.stats.views} views &bull; published ${vidViews}
    `)

    /* Agregando Likes del video principal  */
    let likeMainVid = document.querySelector('#likeMainVid')
    console.log(likeMainVid)
    likeMainVid.insertAdjacentHTML('afterbegin', /* html */ `
        <a href="#">
            <img src="../img/like.png" alt="">${resp.stats.likes}</img>
        </a>
        <!--                         <a href="#">
            <img src="../img/dislike.png" alt="">2</img>
        </a> -->
    `)

    /* Agregando el avatar del video principal  */
    let publisher = document.querySelector('#publisher')
    let mainVidUserSus = document.querySelector('#mainVidUserSus')
    let mainVidDes = document.querySelector('#mainVidDes')

    publisher.insertAdjacentHTML('afterbegin', /* html */ `
        <img src="${resp.author.avatar[2].url}" alt="">
    `)
    mainVidUserSus.insertAdjacentHTML('beforeend', /* html */ `
        <p>${userName}</p>
        <span>${resp.author.stats.subscribersText}</span>
    `)

    /* Agregando descripcion del video principal  */
    if(resp.description == null){
        mainVidDes.insertAdjacentText('beforeend', `
        no video description !!
    `)     
    } else {
        mainVidDes.insertAdjacentText('beforeend', `
            ${resp.description}
        `)
    }

    /* Agregando cantidad comentarios del video principal  */

    console.log(resp.stats.comments);
    if (resp.stats.comments == null) {
        mainVidDes.insertAdjacentHTML('beforeend', /* html */`
            <hr>
            <div class="contComVid">
                <h4 class="">Comments are off</h4>
            </div>
        `)
    } else {

        ( async(typePetCom) => {
            const optionsCom = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '96acef6a1fmsh75e923d7049e34dp155a15jsn2090a0bbcb43',
                    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
                }
            };
            const urlVidDet = `https://youtube138.p.rapidapi.com/video/comments/?id=${vidId}&hl=en&gl=US`;

            let peticionCom = ''

            if (typePetCom != 'json'){
                peticionCom = await fetch(urlPet, optionsCom)   
            } else {
                peticionCom = await fetch(urlPet)   
            }
            let respCom = await peticionCom.json();

            mainVidDes.insertAdjacentHTML('beforeend', /* html */`
            <hr>
            <h4>${resp.stats.comments}</h4>
            <div class="add-comment">
                <img src="../img/Jack.png" alt="">
                <input type="text" name="" id="" placeholder="Write comments....">
            </div>

            ${respCom.comments.map((vidCom) => /* html */`
                        <div class="old-comment">
                            <img src="../img/Jack.png" alt="">
                            <div>
                                <h3>${vidCom.author.title} <span>${vidCom.publishedTimeText}</span></h3>
                                <p>${vidCom.content}</p>
                                <div class="comment-act">
                                    <img src="../img/like.png" alt="">
                                    <span>${vidCom.stats.votes}</span>
                                    <img src="../img/dislike.png" alt="">
                                    <span>0</span>
                                    <span>${vidCom.stats.replies}</span>
                                    <a href="#">All replies</a>
                                </div>
                            </div>
                        </div>
                    `).join(" ")            
                }   
            `)

        } ) ()

    }
    
}

export const getVidList = async(typePet, urlPet, vidId, options) => {

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
                        <a href="./playVideo.html?idVid=${data.video.videoId}" class="small-thumbnail"><img src="${data.video.thumbnails[3].url}" alt=""></a>
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

