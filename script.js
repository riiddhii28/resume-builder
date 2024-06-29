function addNewWEField() {
    
//    console.log("Adding");


    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewSKField() {
    
    
        let newNode=document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("skField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows", 3);
        newNode.setAttribute("placeholder", "Enter here");
    
    
        let skOb = document.getElementById("sk");
        let skAddButtonOb = document.getElementById("skAddButton");
    
        skOb.insertBefore(newNode, skAddButtonOb);

}

function generateCV() {

    let selectedTemplate = document.getElementById('templateSelect').value;

    //retrieving values
    let nameField = document.getElementById('nameField').value;
    let contactField = document.getElementById('contactField').value;
    let addressField = document.getElementById('addressField').value;
    let linkedField = document.getElementById('linkedField').value;
    let gitField = document.getElementById('gitField').value;
    let blogField = document.getElementById('blogField').value;
    let objectiveField = document.getElementById('objectiveField').value;


    //name
    document.querySelector(`#${selectedTemplate} #nameT1`).innerHTML = nameField;
    document.querySelector(`#${selectedTemplate} #nameT2`).innerHTML = nameField;


    //contact n address
    document.querySelector(`#${selectedTemplate} #contactT`).innerHTML = contactField;
    document.querySelector(`#${selectedTemplate} #addressT`).innerHTML = addressField;


    //links
    document.querySelector(`#${selectedTemplate} #linkedT`).href = linkedField;
    document.querySelector(`#${selectedTemplate} #gitT`).href = gitField;
    document.querySelector(`#${selectedTemplate} #blogT`).href = blogField;



    //right side obj
    document.querySelector(`#${selectedTemplate} #objectiveT`).innerHTML = objectiveField;


    //work exp
    let wes=document.getElementsByClassName('weField');
    
    let str=" ";

    for(let e of wes)
        {
            str =str + `<li> ${e.value} </li>`;
        }

        
    document.querySelector(`#${selectedTemplate} #weT`).innerHTML = str;
    


       
    //skills
    let sks=document.getElementsByClassName('skField');
    
    let str1=" ";

    for(let e of sks)
        {
            str1 =str1 + `<li> ${e.value} </li>`;
        }

    document.querySelector(`#${selectedTemplate} #skT`).innerHTML = str1;


    
    //image
    let fileInput = document.getElementById('imgField');
    let file = fileInput.files[0]; 
    
    //console.log(file);
    
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            document.querySelector(`#${selectedTemplate} .myimg`).src = reader.result;
        };
    }

    
    document.getElementById('cv-form').style.display='none';

    
    document.getElementById('template1').style.display='none';
    document.getElementById('template2').style.display='none'; 

    document.getElementById(selectedTemplate).style.display = 'block';



}

function printCV(){
    window.print();
}



