import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public topicoPrincipal: string
    public subTopicos: string
    public descricao: string
    public postagem: Postagem[]
}