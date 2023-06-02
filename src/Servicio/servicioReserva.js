export async function consultarReserva(){
    const URL="http://pruegaapi20231.vercel.app/buscarReservas"

    const PETICION={
        method:"GET"
    }
    let respuestaDelServidor=await fetch(URL,PETICION)
    let datosConsultados=await respuestaDelServidor.json()
    return datosConsultados
}