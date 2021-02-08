"use strict";

function createHeader(innerText){
    const header = document.createElement("h1");
    header.innerText=innerText;
    return header;
}

function createDiv(classNames){
    const div = document.createElement("div");
    const names = classNames.split(" ");
    names.forEach(elem=>div.classList.add(elem));
    return div;
}

function createImg(src,alt){
    const img = document.createElement("img");
    img.setAttribute("src",src);
    img.setAttribute("alt",alt)
    return img;
}

function createButton(innerText){
    const button = document.createElement("button");
    button.innerText = innerText;
    return button;
}

function fillBody(){
    const header = createHeader("slider");
    document.body.append(header);

    const divSlider = createDiv("slider");
        const divSlideContainer = createDiv("slideContainer");
            let img = createImg("#","Most left slide");
            let divSlide = createDiv("slide leftEndSlide");
            divSlide.append(img);
        divSlideContainer.append(divSlide);
            
            img = createImg("#","Previus slide");
            divSlide = createDiv("slide prevSlide");
            divSlide.append(img);
        divSlideContainer.append(divSlide);
            
            img = createImg("#","Current slide");
            divSlide = createDiv("slide currentSlide");
            divSlide.append(img);
        divSlideContainer.append(divSlide);
            
            img = createImg("#","Next slide");
            divSlide = createDiv("slide nextSlide");
            divSlide.append(img);
        divSlideContainer.append(divSlide);
            
            img = createImg("#","Most right slide");
            divSlide = createDiv("slide rightEndSlide");
            divSlide.append(img);
        divSlideContainer.append(divSlide);
    divSlider.append(divSlideContainer);

        const divButtonContainer = createDiv("buttonContainer");
            divButtonContainer.append(createButton("PREV"));
            divButtonContainer.append(createButton("NEXT"));
        divSlider.append(divButtonContainer);

    document.body.append(divSlider);
}

fillBody();