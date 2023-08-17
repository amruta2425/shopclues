import axios from 'axios';

export async function productsData(){
    const products = await axios.get(
        // "https://api.storerestapi.com/products"
        "https://fakestoreapiserver.reactbd.com/products"
        //"https://fakestoreapiserver.reactbd.com/nextamazon"
        //"https://fakestoreapiserver.reactbd.com/walmart"
        //"https://fakestoreapi.com/products"
    );
    return products;
}