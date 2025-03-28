const channelID = '2749850'; 
const apiKey = 'KVO3EVHKEKJ9D78D'; 
const url = `https://api.thingspeak.com/channels/2749850/feeds/last.json?api_key=AKK112A0LNPRRW22`;


// Función para obtener el último dato
async function obtenerUltimoDato() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    const data = await response.json();

    // Mostrar los datos obtenidos

    document.getElementById("HE").textContent = Math.trunc(data.field2) +' : '+ Math.trunc(data.field3) || 'No data';
    document.getElementById("HA").textContent = Math.trunc(data.field4) +' : '+ Math.trunc(data.field5) || 'No data';

  } catch (error) {
    console.error("Error al obtener el dato:", error);
  }
}

function sendData() {
    var humedad = 0;
    var apiKey = document.getElementById('apiKey').value;
    var horaEncendido = document.getElementById('horaEncendido').value;
    var minutoEncendido = document.getElementById('minutoEncendido').value;
    var horaApagado = document.getElementById('horaApagado').value;
    var minutoApagado = document.getElementById('minutoApagado').value;
    var url = 'https://api.thingspeak.com/update?api_key=' + apiKey +       
              '&field1=' + humedad +
              '&field2=' + horaEncendido +
              '&field3=' + minutoEncendido +
              '&field4=' + horaApagado +
              '&field5=' + minutoApagado;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //alert('Datos enviados exitosamente');
            obtenerUltimoDato();
        }
    };
}

// Llama a la función
obtenerUltimoDato();