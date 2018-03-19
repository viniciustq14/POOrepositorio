class Livro{
    private nome:string;
    private valor:number;
    private disponibilidade:boolean;
    catLivro:Categoria;
    
    
    constructor(nome:string,cat:Categoria,dispo:boolean){
        this.nome=nome;
        this.catLivro=cat;
        this.disponibilidade=dispo;
        this.setValor();
    

    }

    setValor():void{
        switch(this.catLivro){
            case Categoria.EPUB:{
                this.valor=20;
            break;
            }

            case Categoria.PDF:{
                this.valor=40;
            break;
            }

            case Categoria.FISICO:{
                this.valor=80;
            break;
            }
            default:{
                console.log("Invalido");
            break;    
            }
        }
    
    }


    getValor():number{
        return this.valor;
    }
    getCatLivro ():string{
        
        switch(this.catLivro){
            case Categoria.EPUB:{
                return "EPUB";
           // break;
            }

            case Categoria.PDF:{
                return "PDF";
           // break;
            }

            case Categoria.FISICO:{
                return "FISICO"
           // break;
            }
            default:{
                console.log("Invalido");
            break;    
            }
        }


    }
    getNome():string{
         return this.nome;
    }
    getDispo():string{
        if(this.disponibilidade){
            return "Disponivel";
        }
        else{
              return "Ocupado";
        }
    }
}
enum Categoria{EPUB,PDF,FISICO};


//var c:Categoria=Categoria.FISICO;
var l=new Livro("m",Categoria.PDF,false);
console.log(l.getValor());

console.log(l.getCatLivro());
console.log(l.getDispo());

