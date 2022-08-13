const addProductContainer = document.querySelector('.add-product-container');
const closeContainer = document.querySelectorAll('.close-container');
const addProduct = document.querySelector('#add-product-nav');
const addAcc = document.getElementById('add-accessory');

addAcc.addEventListener('click', ()=>{
    document.querySelector('.add-other-container').style.display = 'block';
})

addProduct.addEventListener('click', ()=>{
    console.log(document.getElementById('image-input'))
    addProductContainer.style.display = 'block';
});

closeContainer.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
          e.currentTarget.parentElement.style.display = 'none';
    })
})

//Inbox
const inboxBtn = document.getElementById('inbox-btn');
const inbox = document.querySelector('.inbox');
inboxBtn.addEventListener('click',()=>{
    if(inbox.style.display === 'block'){
        inbox.style.display = 'none';
    }
    else{
        inbox.style.display = 'block'
    }
})

//displaying full message in inbox
const notif = document.querySelector('.notif');

notif.addEventListener('click', displayMessage);
function displayMessage(event){

    notif.nextElementSibling.style.transition = 'all 40ms ease-out';
    
    if(event.currentTarget.nextElementSibling.style.transform === 'scaleY(1)'){
        event.currentTarget.nextElementSibling.style.transform = 'scaleY(0)';
        event.currentTarget.nextElementSibling.style.height = '0';
    }
    else{
        event.currentTarget.nextElementSibling.style.transform = 'scaleY(1)';
        event.currentTarget.nextElementSibling.style.height = 'max-content';
    }
}

//fetching messages to inbox
const messages = document.querySelector(".message");
async function fetchMessages(){
    const response = await fetch('/getcontact');
    response.json().then((data)=>{
        for(let i = 0; i<data.length; i++){
            const div = document.createElement('div');
            div.innerHTML = `<div class="notif" onClick='displayMessage(event)'>
            <div class="user-image"><i class="fa-solid fa-user"></i></div>
            <div class="user-name">${data[i].name}</div>
            <div class="subject-text">Subject: ${data[i].subject}</div>
        </div>

        <div class="full-message">
            <div class="u-name"><span>Name: </span>${data[i].name}</div>
            <div class="u-email"><span>Email: </span>${data[i].email}</div>
            <div class="subject"><span>Subject: </span> ${data[i].subject}</div>
            <div class="message-text"><span>Message: </span> ${data[i].message}</div>
        </div>`;
        messages.appendChild(div);
        }
    })
}
fetchMessages()

//getting customer orders and displaying
async function customerOrders(){

    const response = await fetch('/getorders');
    const data = await response.json();

    for(let i = 0; i<data.length; i++){
        const orders = document.querySelector('.order-cards');
        const card = document.createElement('div');
        card.setAttribute('class','card');
        // card.setAttribute('onClick','printCard(event)');

        card.innerHTML = `<h2 class="card-title"><span>Order No.</span><span class='order-id'>${data[i].id}</span></h2>
    <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar"></div>
    </div>
    <div class="details" onClick="printCard(event)">
        <div class="p-name">
            <span class="name">Product: </span><span >${data[i].product_name}</span>
        </div>
        <div class="person-name">
            <span class="name">Person name: </span><span>${data[i].person_name}</span>
        </div>
        <div class="phone">
            <span class="name">Phone: </span><span>${data[i].phone}</span>
        </div>
        <div class="email">
            <span class="name">Email: </span><span>${data[i].email}</span>
        </div>
        <div class="address">
            <span class="name">Address: </span><span>${data[i].address}</span>
        </div>
        <div class="quantity">
            <span class="name">Quantity: </span><span>${data[i].quantity}</span>
        </div>
        <div class="bill">
            <span class="name">Total Bill: </span><span>${parseInt(data[i].price.match(/(\d+)/))*Number(data[i].quantity)} &#8377</span>
        </div>
    </div>
    <div onClick="deleteOrder(event)" class="delete"><i class="fa-solid fa-trash-can"></i></div>`;
    orders.appendChild(card);
    };

}
customerOrders();

async function deleteOrder(e){
    let id = e.currentTarget.parentElement.querySelector('.card-title').querySelector('.order-id').innerText;
    e.currentTarget.parentElement.remove();
    const formData = {id: id}
    console.log(id)

       
    const fetchh = await fetch('/deleteorder', {
        method: 'Post', // Method itself
        mode: 'cors',
        headers: {
         'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify(formData)
       });

}
//Printing order Card
function printCard(e){
    if(e.currentTarget.className !== 'delete'){
        let prtContent = e.currentTarget;
        let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }
}
