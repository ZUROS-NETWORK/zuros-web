import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();
const tebexApiUrl = process.env.TEBEXAPI || 'https://plugin.tebex.io';
const tebexSecret = process.env.TEBEXTOKEN;
const headers = {
    'X-Tebex-Secret': tebexSecret,
    'Content-Type': 'application/json',
};

async function get(routes) {
    try {
        const response = await axios.get(tebexApiUrl + routes, { headers });
        if (response.status === 200) {
            console.log('Respuesta exitosa:');
            return { data: response.data };
        } else {
            console.log(`Error La solicitud falló con el código de estado: ${response.status}`);
            throw new Error(response.data);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
}
const tebex = {
    get,
}
export { tebex }