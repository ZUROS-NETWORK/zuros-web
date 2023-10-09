import { tebex } from "../../../services/tebex";
async function products() {
    const responseData = await tebex.get('/packages');
    return responseData
}
async function product(id) {
    const responseData = await tebex.get(`/package/${id}`);
    return responseData
}


export { products, product };