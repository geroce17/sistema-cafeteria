export class Usuario {
    constructor(
        public nombre: string,
        public username: string,
        public password?: string,
        public role?: string,
        public uid?: string
    ){}
}