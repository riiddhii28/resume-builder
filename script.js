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

    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    //links
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

    document.getElementById('gitT').innerHTML=document.getElementById('gitField').value;

    document.getElementById('blogT').innerHTML=document.getElementById('blogField').value;

    //objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    //work exp
    let wes=document.getElementsByClassName('weField');
    
    let str=" ";

    for(let e of wes)
        {
            str =str + `<li> ${e.value} </li>`;
        }

        document.getElementById('weT').innerHTML=str; 



       
    //skills
    let sks=document.getElementsByClassName('skField');
    
    let str1=" ";

    for(let e of sks)
        {
            str1 =str1 + `<li> ${e.value} </li>`;
        }

    document.getElementById('skT').innerHTML=str1; 

    
    //image
    let file=document.getElementById('imgField').files[0];
    
    //console.log(file);
    
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            document.getElementById('imgTemplate').src = reader.result;
        };
    }


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';


}

function printCV(){
    window.print();
}



