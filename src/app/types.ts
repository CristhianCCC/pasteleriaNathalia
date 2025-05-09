export interface Product {
    id: number;
    nombre: string;
    descripcion:string;
    precio:number;
    imageUrl:string;
    ingredientes: string;
    cantidad: number;
    ProductoTamanos: string;
}

export type Testimonios = {
    id: number;
    nombre: string;
    image: string;
    texto: string
}