export const createDiv = (className, parentDivId) => {
    // Create the element
    console.log(1,parentDivId);
    const element = document.createElement('div');
    // Add a class to it
    console.log(2,parentDivId);
    for (let i = 0; i < className.length; i++) {
        element.classList.add(className[i]);
    }
    console.log(3,parentDivId);
    // Append the element to a child
    let parentDiv= document.getElementById(parentDivId);
    let parent = parseInt(parentDiv);
    console.log(5, parent)
    parentDiv.appendChild(element);
}

export const createFigure = (className, src, alt, parentDiv) => {
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

export const creatParagraph = (listOfClass, textToAdd, parentDiv) => {
    const paragraph = document.createElement("p")
    for (let i = 0; i < listOfClass.length; i++) {
        paragraph.classList.add(listOfClass[i])
    }
    textNode = document.createTextNode(textToAdd)
    paragraph.appendChild(textNode)
    parentDiv.appendChild(paragraph)
}
console.log('utils loaded');

/********************************

    Refctoring

*******************************/

const createDiv = (className, parentDivId,id) => {
    // Create the element
    console.log('creation element');
    const element = document.createElement('div');
    element.id = id
    // Add a class to it
    ;
    for (let i = 0; i < className.length; i++) {
        console.log('add class');
        element.classList.add(className[i]);
    }
    // Append the element to a child
    document.getElementById(parentDivId).appendChild(element);
    console.log('appendchild alement');
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