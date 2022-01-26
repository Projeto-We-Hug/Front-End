import { Postagens } from "./Postagem"

export class Usuarios{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public postagem: Postagens[]
}