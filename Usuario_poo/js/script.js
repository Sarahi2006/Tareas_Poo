// class Sesion {
//     constructor(usuario, pass, bdusuario, bdpwd){
//         this.usuario=usuario
//         this.pass= pass
//         this.bdusuario=bdusuario
//         this.bdpwd=bdpwd
//     }

//     validar (){
//         if(this.usuario== this.bdusuario && this.pass == this.bdpwd){
//             alertify.success('Inicio de sesión exitoso');
//             window.location.href = 'registro.html';
//         }else {
//           //  alert('Las credenciales no son correctas.')
//             alertify.error('Las credenciales no son correctas');
//         } 
//     }
// }


// class usuario extends Sesion{
//     constructor(usuario, pass, bdusuario, bdpwd){
//         super(usuario, pass, bdusuario, bdpwd)
//     }
// }

// function login (){
//     let user = document.getElementById('user').value
//     let pwd = document.getElementById('pwd').value

//     Consulta = new usuario(user,pwd,'Sarahi','morado26')
//     Consulta.validar()

// }

class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd){
        this.usuario=usuario
        this.pass= pass
        this.bdusuario=bdusuario
        this.bdpwd=bdpwd
    }

    validar (){
        // if(this.usuario=='William' && this.pass=='123'){
        //     window.location.href = 'registro.html';
        //     // alert('Inicio de sesión exitoso,')
        //     alertify.success('Inicio de sesión exitoso');
        // }if (this.usuario != 'William' && this.pass == '123') {
        //     alertify.success('usuario incorrecto');
        // } else if(this.usuario == 'William' && this.pass != '123') {
        //     alertify.success('contraseña incorrecta');
        // }else if(this.usuario != 'William' && this.pass != '123'){
        //     alertify.success('usuario y contraseña incorrecta');
        if(this.usuario=='Sarahi' && this.pass=='morado26'){
            window.location.href = 'registro.html';
            // alert('Inicio de sesión exitoso,')
            alertify.success('Inicio de sesión exitoso');
        }if (this.usuario != 'Sarahi' && this.pass == 'morado26') {
            alertify.success('usuario incorrecto');
        } else if(this.usuario == 'Sarahi' && this.pass != 'morado26') {
            alertify.success('contraseña incorrecta');
        }else if(this.usuario != 'Sarahi' && this.pass != 'morado26'){
            alertify.success('usuario y contraseña incorrecta');
        }

    }
        }

    }

}


class usuario extends Sesion{
    constructor(usuario, pass, bdusuario, bdpwd){
        super(usuario, pass, bdusuario, bdpwd)
    }

}

function login (){
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    Consulta = new usuario(user,pwd,)
    Consulta.validar()

}