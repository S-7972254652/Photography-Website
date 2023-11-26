const form=document.querySelector('form');

const fullName=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");

function sendEmail(){
const bodyMessage=`Full Name:${fullName.value}<br> Email:${email.value}<br> Subject:${subject.value}<br> Message:${message.value}<br> `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sagarswani79@gmail.com",
        Password : "B12F70431688FEFD31744275F076C81AABCA",
        To : 'sagarswani79@gmail.com',
        From : "sagarswani79@gmail.com",
        Subject :subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    sendEmail();
});