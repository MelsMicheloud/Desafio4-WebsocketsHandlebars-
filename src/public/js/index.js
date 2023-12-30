const socket = io() //config para poder usar socket del lado cliente

let user =


//modal
Swal.fire({
    title: 'identificate',
    input: 'text',
    text: 'Ingresa usuario para identificarte en el chat',
    inputValidator: value => {
        return !value && 'Necesitas ingresar el nombre de usuario para continuar'
    },
    //agregar una propiedad si se clickea fuera no se cierra el modal
    allowOutsideClick: false
}).then(result => {
    user=result.value
    console.log(user)
})

//capturar los del imput
//traer chatbox con id
const chatbox = document.querySelector('#chatbox')
//agregar evetno
chatbox.addEventListener('keyup', (eve)=>{
    if(eve.key =='Enter'){
        chatbox.value
    }
})