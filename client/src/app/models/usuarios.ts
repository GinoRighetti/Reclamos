export interface Usuario {
    id?: number;
    Nombre: string;
    Apellido: string;
    Email: string;
    Usuario: string;
    Clave: string;
    Imagen: string;
    Alta?: Date;
    Baja?: Date;
    Condicion: number;
}