// fill in javascript code here

let MF = document.querySelector('form');
let drName = document.getElementById('name');
let drid = document.getElementById('docID');
let spez = document.getElementById('dept');
let Exp = document.getElementById('exp');
let email = document.getElementById('email');
let mob = document.getElementById('mbl')
let tbody = document.querySelector('tbody');


let MD = [];
MF.addEventListener('submit',function(e)
{
    e.preventDefault()

    let d ={};
    d.name = drName.value;
    d.docID = drid.value;
    d.spz = spez.value;
    d.exp = Exp.value;
    d.mail = email.value;
    d.mb = mob.value;
    d.tb = tbody.value;
    MD.push(d)
    console.log(MD)


    tbody.innerHTML = null;


    MD.map((ele) =>
    {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let role = document.createElement("td")

        if(ele.exp > 5){
            role.innerText = "Senior"
            // role.style.backgroundColor = "red"
        }else if(ele.exp > 2 && ele.exp <=5){
            role.innerText = "Junior"
        }else if (ele.exp <= 1){
            role.innerText="Fresher"
        }



        td1.innerText = ele.name;
        td2.innerText = ele.docID;
        td3.innerText = ele.spz;
        td4.innerText = ele.exp;
        td5.innerText = ele.mail;
        td6.innerText = ele.mb;
        row.append(td1, td2, td3, td4, td5, td6,role)
        tbody.append(row)
    })



})