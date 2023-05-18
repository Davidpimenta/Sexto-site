var data = new Date()
var hora = data.getHours()
var msg = window.document.getElementById('info')
var img = window.document.getElementById('img')
msg.innerText = `Agora são ${hora}`

if(hora>=6 && hora < 12){
    img.src = 'images.jpg'
   body.style.background = 'linear-gradient(to bottom, #038C7F, #7CA621)'
}

if(hora>=12 && hora<18){
    img.src='Era-um-final-de-tarde.jpg'
    body.style.background = 'linear-gradient(to bottom,  #2A6EF3, #F29F05, #F16D1E, #D84345)'
}

if(hora>=18 && hora<=23){
    img.src = 'transferir.jpg'
    body.style.background = 'linear-gradient(to bottom,  #00008C,#052472, #005555)'
}


if(hora>=0 && hora < 6){
    img.src = 'papel-de-parede-do-ceu-noturno-estrelado-combinacao-perfeita-de-ciencia-e-arte_1017-43427.avif'
    body.style.background = 'linear-gradient(to bottom,  #190028, #5F2680, #8100CC, #A200FF, #BE4DFF)'
}