export interface Reclamo {
    N_reclamo?: number;
    F_reclamo: Date;
    Contacto: string;
    Metodo_Contacto: string;
    Tj: string;
    Problema: string;
    Observaciones: string;
    Id_u_r: number;
    U_reclamo: string;
    Estado: number;
    N_solucion: number;
    F_solucion: Date;
    Solucion: string;
    Derivacion: number;
    Id_u_s: number;
    U_solucion: string;
}
export interface ReclamoNuevo {
    Id?: number;
    Fecha: Date;
    Contacto: string;
    Metodo_Contacto: string;
    Id_tjs: string;
    Motivo: string;
    Problema: string;
    Observaciones: string;
    Id_Usuario: number;
    Estado: number;
}
export interface Solucion {
    Id?: number;
    Id_reclamo: number;
    Fecha: Date;
    Solucion: string;
    Id_usuario: number;
    Derivacion: number;
}