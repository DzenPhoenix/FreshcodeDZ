"use strict";

function createLegendDiv(){
    const divLegendDiv = document.createElement("div");
    divLegendDiv.classList.add("legendDiv");
    
    const legend = document.createElement("legend");
    legend.innerText = "Please validate";
    divLegendDiv.append(legend);

    return divLegendDiv;
}

function createTextFieldDiv(inputId,inputType,innerTextLabel){
    const textFieldDiv = document.createElement("div");
    textFieldDiv.classList.add("textFieldDiv");

    const label = document.createElement("label");
    label.setAttribute("for",inputId);
    label.innerText=innerTextLabel+":";
    textFieldDiv.append(label);

    const input = document.createElement("input");
    input.setAttribute("id",inputId);
    input.setAttribute("type",inputType);
    input.setAttribute("placeholder",`enter ${innerTextLabel}`);
    input.setAttribute("maxlength","20");
    textFieldDiv.append(input);
    return textFieldDiv;
}

function createButtonDiv(){
    const divButtonDiv = document.createElement("div");
    divButtonDiv.classList.add("buttonDiv");

    const button = document.createElement("button");
    button.setAttribute("type","submit");
    button.innerText="Send";
    divButtonDiv.append(button);
    return divButtonDiv;
}

function createForm(){
    const form = document.createElement("form");
    form.action="#";
    form.method = "POST";
    
    form.append(createLegendDiv());
    form.append(createTextFieldDiv("inputUserName","text","username"));
    form.append(createTextFieldDiv("inputPassword","password","password"));
    form.append(createButtonDiv());

    return form;
}

function userNameValidator(event){
    const regularExp = /^[\w]{6,20}$/gi;
    const test = regularExp.test(event.target.value); 
    if(test){
        event.target.style.borderColor="green";
    }
    else{
        event.target.style.borderColor="red";
    }
}

function passwordValidator(event){
    const regularExp = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,20}$/g;
    const test = regularExp.test(event.target.value); 
    if(test){
        event.target.style.borderColor="green";
    }
    else{
        event.target.style.borderColor="red";
    }
}


document.body.append(createForm());
const userName = document.getElementById("inputUserName");
userName.addEventListener("input",userNameValidator);

const password = document.getElementById("inputPassword");
password.addEventListener("input",passwordValidator);
