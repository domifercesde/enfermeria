export async function agendarCita(datos){
    const URI="http://pruegaapi20231.vercel.app/reservar"

    const PETICION={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(datos)
    }
    let respuesta=await fetch (URI,PETICION)
    respuesta=await respuesta.json()

    return respuesta
}