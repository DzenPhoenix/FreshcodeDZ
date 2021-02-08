"use strict";

import {Slide} from "../model/Slide.js";
import {Slider} from "../model/Slider.js";

const slider = new Slider(
    [
        new Slide("/assets/testImg/cat_1.jpg","Cat_1"),
        new Slide("/assets/testImg/cat_2.jpg","Cat_2"),
        new Slide("/assets/testImg/cat_3.jpg","Cat_3"),
        new Slide("/assets/testImg/cat_4.jpg","Cat_4"),
        new Slide("/assets/testImg/cat_5.jpg","Cat_5"),
        new Slide("/assets/testImg/cat_6.jpg","Cat_6"),
        new Slide("/assets/testImg/cat_7.jpg","Cat_7")
    ]
)


function refreshImage(){

    const leftEndSlideImg =  document.querySelector(".leftEndSlide>img");
    leftEndSlideImg.setAttribute("src",slider.slides[slider.getLeftEndIndex].src);

    const prevSlideImg =  document.querySelector(".prevSlide>img");
    prevSlideImg.setAttribute("src",slider.slides[slider.getPrevIndex].src);

    const currentSlideImg =  document.querySelector(".currentSlide>img");
    currentSlideImg.setAttribute("src",slider.slides[slider.getCurrentIndex].src);

    const nextSlideImg =  document.querySelector(".nextSlide>img");
    nextSlideImg.setAttribute("src",slider.slides[slider.getNextIndex].src);

    const rightSlideImg =  document.querySelector(".rightEndSlide>img");
    rightSlideImg.setAttribute("src",slider.slides[slider.getRightEndIndex].src);

}

window.addEventListener("load",function(event){refreshImage();})

const [prevButton,nextButton] = document.querySelectorAll(".buttonContainer>button");

nextButton.addEventListener("click",function(event){
    slider.nextSlide();
    refreshImage();
})

prevButton.addEventListener("click",function(event){
    slider.prevSlide();
    refreshImage();
})