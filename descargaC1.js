function downloadCSV() {
      const channelID = '2291469'; // 👈 Reemplaza por el ID de tu canal
      const apiKey = 'GRXEVY8EJR76BG9T'; // 👈 Si el canal es privado, agrega tu API Key aquí. Si es público, déjalo vacío.
      const results = 5040;

      const url = `https://api.thingspeak.com/channels/${channelID}/feeds.csv?results=${results}${apiKey ? '&api_key=' + apiKey : ''}`;

      // Crear enlace para descarga
      const link = document.createElement("a");
      link.href = url;
      link.download = "datos_thingspeak.csv"; // nombre del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}