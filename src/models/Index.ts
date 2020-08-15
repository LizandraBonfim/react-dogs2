export interface Comentario {
	id: string;
	nomeDeUsuario: string;
	dataHora: Date;
	texto: string;
}
export interface Foto {
	id: string;
	nome: string;
	idade: number;
	peso: number;
	src: string;
	comentarios: Comentario[];
}

export interface Usuario {
    id: string;
    nome: null;
    nomeDeUsuario: string;
    fotos: Foto[];
}