const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "",
        pass: ""
    }
})

class Correo {
    constructor(nombre, destinatario, asunto, texto){
        this.nombre = nombre;
        this.destinatario = destinatario;
        this.asunto = asunto;
        this.texto = texto;
    }

    async enviarCorreo(){
        const info = await transporter.sendMail( {
            from: `${this.nombre} <martinezitamar777@gmail.com>`,
            to: this.destinatario,
            subject: this.asunto,
            text: `${this.texto}`,
        }
    )}
}

let nombre = "Itamar Medrano"
let destinatario = "j.william03@hotmail.com"
let asunto = "Pude Ing."
let texto = "Ya tengo mi tarea lista para subir, y Quiero mi 10 Inge"

let correo1 = new Correo(nombre, destinatario, asunto, texto)

correo1.enviarCorreo()

if(correo1.enviarCorreo()){
    console.log('correo enviado exitosamente')
}else {
    console.log(`El correo no se ha enviado`)
}