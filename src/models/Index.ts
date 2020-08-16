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

export interface ResponseApi<T> {
	sucesso:  boolean;
    mensagem: string;	
	erros:    null;
    dados:    T;

}

export interface ResponseBase {
    sucesso:  boolean;
    mensagem: string;
	loading: boolean;
	erro:    any;
    
}

