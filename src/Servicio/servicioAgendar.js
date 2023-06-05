export async function agendarCita(nombre,correo,telefono,hora,dia){
    try {
        const uri="https://pruegaapi20231.vercel.app/reservar"

    const params={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
         // {"_id":"647a19ac8bfa5bb3fee1246e","nombre":"Mayerly ramirez ","correo":"Mayerly@gmail.com","telefono":"2222301","hora":"7:00","dia":"2023-06-21","tipo":2,"__v":0},
        body:JSON.stringify({
            'nombre':nombre,
            'correo':correo,
            'telefono':telefono,
            'hora':hora,
            'dia':dia,
            tipo:3
        })
    }
    let respuesta=await fetch (uri,params)
    respuesta=await respuesta.json()

    return respuesta
        
    } catch (error) {
        console.log(error.message);
        return error
    }
    
}