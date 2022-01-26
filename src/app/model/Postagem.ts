import { Temas } from './Temas';
import { Usuarios } from './Usuarios';

export class Postagens{
    public id: number
    public descricao: string
    public midia: string
    public publicacaoAtiva: boolean
    public data: Date
    public usuario: Usuarios
    public tema: Temas
}