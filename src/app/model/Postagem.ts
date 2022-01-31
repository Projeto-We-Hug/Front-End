import { Tema, } from './Tema';
import { Usuario } from './Usuario';

export class Postagem{
    public id: number
    public descricao: string
    public midia: string
    public publicacaoAtiva: boolean
    public data: Date
    public usuario: Usuario
    public tema: Tema
}