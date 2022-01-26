import { Postagens } from "./Postagem"

export class Temas{
    public id: number
    public topicoPrincipal: string
    public subTopico: string
    public descricao: string
    public postagem: Postagens[]
}