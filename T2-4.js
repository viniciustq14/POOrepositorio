var Livro = /** @class */ (function () {
    function Livro(nome, cat, dispo) {
        this.nome = nome;
        this.catLivro = cat;
        this.disponibilidade = dispo;
        this.setValor();
    }
    Livro.prototype.setValor = function () {
        switch (this.catLivro) {
            case Categoria.EPUB: {
                this.valor = 20;
                break;
            }
            case Categoria.PDF: {
                this.valor = 40;
                break;
            }
            case Categoria.FISICO: {
                this.valor = 80;
                break;
            }
            default: {
                console.log("Invalido");
                break;
            }
        }
    };
    Livro.prototype.getValor = function () {
        return this.valor;
    };
    Livro.prototype.getCatLivro = function () {
        switch (this.catLivro) {
            case Categoria.EPUB: {
                return "EPUB";
                // break;
            }
            case Categoria.PDF: {
                return "PDF";
                // break;
            }
            case Categoria.FISICO: {
                return "FISICO";
                // break;
            }
            default: {
                console.log("Invalido");
                break;
            }
        }
    };
    Livro.prototype.getNome = function () {
        return this.nome;
    };
    Livro.prototype.getDispo = function () {
        if (this.disponibilidade) {
            return "Disponivel";
        }
        else {
            return "Ocupado";
        }
    };
    return Livro;
}());
var Categoria;
(function (Categoria) {
    Categoria[Categoria["EPUB"] = 0] = "EPUB";
    Categoria[Categoria["PDF"] = 1] = "PDF";
    Categoria[Categoria["FISICO"] = 2] = "FISICO";
})(Categoria || (Categoria = {}));
;
//var c:Categoria=Categoria.FISICO;
var l = new Livro("m", Categoria.PDF, false);
console.log(l.getValor());
console.log(l.getCatLivro());
console.log(l.getDispo());
