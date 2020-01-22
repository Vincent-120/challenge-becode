// ! DRY !!!!!! Don't Repeat Your Code!


//!appel github
//document.getElementById("run").addEventListener('click',gitHub)
    const  gitHub = async () => {
        const url = "https://api.github.com/users/Vincent-120/repos";
        const reponse = await fetch (url);
        const result = await reponse.json();
        console.log('result general', result);
        console.log(result[1].avatar_url)
        console.log(result[1].name)
        console.log(result[1].created_at)
        console.log(result[1].html_url)
        console.log(result[1].repos_url)
    //!*Block card
    function add(){
        //!block image 
        //crée element et de ca class
        let divTag = document.createElement("div");
            divTag.classList.add('card-image')
    
        //recuperation du lieux ou l'on integre
        let dTag = document.getElementById("card") 
    
        //intégration
        dTag.appendChild(divTag)
    
        //!figure
        let fTag = document.createElement("figure");
            fTag.classList.add('image')
            fTag.classList.add('is-4by3')
        divTag.appendChild(fTag)
    
        //!introdution de l'image
        let iTag=document.createElement('img');
            iTag.setAttribute("src","assets/img/minijeux.png")
            iTag.setAttribute("alt", "Petit representation du travaille")
            fTag.appendChild(iTag)
    
        //!card content
        let conTag=document.createElement("div")
            conTag.classList.add("card-content")
            
        dTag.appendChild(conTag);
    
        //!add media
        let mTag = document.createElement("div")
            mTag.classList.add("media")
           
        conTag.appendChild(mTag)
    
        //! media position
        let mpTag = document.createElement("div")
            mpTag.classList.add("media-left")
            
        mTag.appendChild(mpTag)
    
        //!add figur into media
        let fgTag=document.createElement("figure")
            fgTag.classList.add("image")
            fgTag.classList.add("is-48x48")
            
            mpTag.appendChild(fgTag)
    
        //!add little pic 
        let imTag =document.createElement("img")
            imTag.setAttribute("src","assets/img/Profil_img.jpg")
            imTag.setAttribute("alt","Profil picture")
    
            fgTag.appendChild(imTag)
    
        //!add media-content
        let mcTag = document.createElement("div")
            mcTag.classList.add("media-content")
    
        mTag.appendChild(mcTag)
    
        //!add title int media-content
        let tTag = document.createElement("p")
            tTag.classList.add("title")
            tTag.classList.add("is-4")
        let text = document.createTextNode("Le juste prix")
            tTag.appendChild(text)
        mcTag.appendChild(tTag)
        
        //!add subtitle
        let stTag = document.createElement("p")
            stTag.classList.add("subtitle")
            stTag.classList.add("is-6")
        let txt = document.createTextNode("@Vincent-120")
        stTag.appendChild(txt)
    
        mcTag.appendChild(stTag)
    
        //!add description
        let dsTag = document.createElement("p")
        let texte = document.createTextNode("Réalisation personnel d'un jeux très connu, dans le cadre d'un apprentissage a manipuler JavaScript")
        dsTag.appendChild(texte)
        mcTag.appendChild(dsTag)
    
    }
    add();
}

//!function de creation des card repos

gitHub();
