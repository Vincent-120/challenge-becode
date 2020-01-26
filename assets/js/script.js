//? constructeur des card repos
const createDiv = (className, parentDivId,id) => {
    // Create the element
    const element = document.createElement('div');
    element.id = id
    // Add a class to it
    ;
    for (let i = 0; i < className.length; i++) {
        element.classList.add(className[i]);
    }
    // Append the element to a child
    document.getElementById(parentDivId).appendChild(element);
}

const createFigure = (className, src, alt, parentDiv) => {
    // Create the figure
    const figure = document.createElement('figure')
    // Add a class to it
    for (let i = 0; i < className.length; i++) {
        figure.classList.add(className[i])
    }
    // Create the image
    const image = document.createElement('img')
    // Add an attribute to the image
    image.setAttribute('src', src)
    image.setAttribute('alt', alt)
    // Append the image to the figure
    figure.appendChild(image)
    // Append the figure to the parent
    const figureParentDiv = document.getElementById(parentDiv)
    figureParentDiv.appendChild(figure)
}

const creatParagraph = (listOfClass, textToAdd, parentDiv) => {
    const paragraph = document.createElement("p")
    for (let i = 0; i < listOfClass.length; i++) {
        paragraph.classList.add(listOfClass[i])
    }
    textNode = document.createTextNode(textToAdd)
    paragraph.appendChild(textNode)
    document.getElementById(parentDivId).appendChild(paragraph);
}
const creatLink = (href, listOfClass, textToAdd, parentDiv) => {
    const link = document.createElement('a');
    link.setAttribute('href',href);
    
    for (let i = 0; i < listOfClass.length; i++) {
        link.classList.add(className[i])
    }
    textNode = document.createTextNode(textToAdd)
    link.appendChild(textNode)
    document.getElementById(parentDivId).appendChild(link);
}

//? appel apigithub

const gitHub = async () => {
    /*
    Fonction pour créer toutes les divs et les images ont on a besoin.

    params:
        - param1: description du param.
        */

    const url = "https://api.github.com/users/Vincent-120/repos";
    const reponse = await fetch(url);
    const result = await reponse.json();
    console.log('fetch reussi')
    result.forEach(index => {
        if(index==result[1]){
            const descriptionText =  index.description;
            const subtitle = index.created_at;
            const title = index.name
            const uril = index.html_url;
            //!block image 
            createDiv(
                className = ['card-image'],
                parentDivId = 'card',
                id='card-image'
                    )
            // //!figure
            createFigure(
                className = ['image', 'is-4by3'],
                src = 'assets/img/ajax.png',
                alt = 'Petit representation du travaille',
                parentDiv = 'card-image'
            )
        
            createDiv(
                className = ['card-content'],
                parentDivId = 'card',
                id= 'card-content'
                )
        
            // //!add media
            createDiv(
                className = ['media'],
                parentDivId = 'card-content',
                id='media'
            )
        
            // //! media position
            createDiv(
                className = ['media-left'],
                parentDivId = 'media',
                id= 'mediaLeft'
            )
        
            // //!add figure into media
            createFigure(
                className = ['image', 'is-48x48'],
                src = 'assets/img/Profil_img.jpg',
                alt = 'Profil picture',
                parentDiv = 'mediaLeft'
            )
        
            // //!add media-content
            createDiv(
                className = ['media-content'],
                parentDivId = 'media',
                id= 'mediaContent'
            )
        
            // //!add title in media-content
            createDiv(
                className = ['media-left'],
                parentDivId = 'mediaContent'
            )
        
            creatParagraph(
                listOfClass = ['title', 'is-4'],
                textToAdd = title,
                parentDiv = 'mediaContent'
            )
        
        
            // //!add subtitle
            creatParagraph(
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = subtitle,
                parentDiv = 'mediaContent'
            )
        
            // //!add description
            creatParagraph(
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = descriptionText,
                parentDiv = 'mediaContent'
            )
            creatLink(
                href = uril,
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = uril,
                parentDiv = uril
            )
        }
        else if (index == result[14]){
            const descriptionText =  index.description;
            const subtitle = index.created_at;
            const title = index.name
            const uril = index.html_url;
            createDiv(
                className = ['card-image'],
                parentDivId = 'card1',
                id='card-image1'
                    )
            // //!figure
            createFigure(
                className = ['image', 'is-4by3'],
                src = 'assets/img/minijeux.png',
                alt = 'Petit representation du travaille',
                parentDiv = 'card-image1'
            )
        
            createDiv(
                className = ['card-content'],
                parentDivId = 'card1',
                id= 'card-content1'
                )
        
            // //!add media
            createDiv(
                className = ['media'],
                parentDivId = 'card-content1',
                id='media1'
            )
        
            // //! media position
            createDiv(
                className = ['media-left'],
                parentDivId = 'media1',
                id= 'mediaLeft1'
            )
        
            // //!add figure into media
            createFigure(
                className = ['image', 'is-48x48'],
                src = 'assets/img/Profil_img.jpg',
                alt = 'Profil picture',
                parentDiv = 'mediaLeft1'
            )
        
            // //!add media-content
            createDiv(
                className = ['media-content'],
                parentDivId = 'media1',
                id= 'mediaContent1'
            )
        
            // //!add title in media-content
            createDiv(
                className = ['media-left'],
                parentDivId = 'mediaContent1'
            )
                
            creatParagraph(
                listOfClass = ['title', 'is-4'],
                textToAdd = title,
                parentDiv = 'mediaContent1'
            )
        
        
            // //!add subtitle
            
            creatParagraph(
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = subtitle,
                parentDiv = 'mediaContent1'
            )
        
            // //!add description
            creatParagraph(
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = descriptionText,
                parentDiv = 'mediaContent2'
            )
            
            creatLink(
                href= uril,
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = uril
            )
        }
        else if (index == result[19]){
            const descriptionText =  index.description;
            const subtitle = index.created_at;
            const title = index.name;
            const uril = index.html_url;
            createDiv(
                className = ['card-image'],
                parentDivId = 'card2',
                id='card-image2'
                    )
            // //!figure
            createFigure(
                className = ['image', 'is-4by3'],
                src = 'assets/img/projetFormulaire.png',
                alt = 'Petit representation du travaille',
                parentDiv = 'card-image2'
            )
        
            createDiv(
                className = ['card-content'],
                parentDivId = 'card2',
                id= 'card-content2'
                )
        
            // //!add media
            createDiv(
                className = ['media'],
                parentDivId = 'card-content2',
                id='media2'
            )
        
            // //! media position
            createDiv(
                className = ['media-left'],
                parentDivId = 'media2',
                id= 'mediaLeft2'
            )
        
            // //!add figure into media
            createFigure(
                className = ['image', 'is-48x48'],
                src = 'assets/img/Profil_img.jpg',
                alt = 'Profil picture',
                parentDiv = 'mediaLeft2'
            )
        
            // //!add media-content
            createDiv(
                className = ['media-content'],
                parentDivId = 'media2',
                id= 'mediaContent2'
            )
        
            // //!add title in media-content
            createDiv(
                className = ['media-left'],
                parentDivId = 'mediaContent2'
            )
        
            creatParagraph(
                listOfClass = ['title', 'is-4'],
                textToAdd = title,
                parentDiv = 'mediaContent2'
            )
        
        
            // //!add subtitle
            creatParagraph(
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = subtitle,
                parentDiv = 'mediaContent2'
            )
        
            // //!add description
            creatParagraph(
                listOfClass = ['subtitle', 'is-6'],
                textToAdd = descriptionText,
                parentDiv = 'mediaContent2'
            )
            creatLink(
                href = uril,
                listOfClass = ['subtitle', 'is-8'],
                textToAdd = uril,
                parentDiv = uril
            )
        }
    });
}
gitHub();

//? Annimation Gsap
document.getElementById('about').addEventListener('mouseover',()=>{
    TwennMAx
})