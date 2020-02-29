namespace empresa{
    export class Filial{
        private cidade:string;
        private codFilial:number;
        private empresa:Empresa;

        constructor(empresa:Empresa){
            this.empresa = empresa;
        }

        getEmpresa():Empresa{
            return this.empresa;
        }

        getCidade():string{
            return this.cidade;
        }
        
        setCidade(cidade:string):void{
            this.cidade = cidade;
        }

        getcodFilial():number{
            return this.codFilial;
        }

        setCodFilial(cod:number):void{
            this.codFilial = cod;
        }

    }
}