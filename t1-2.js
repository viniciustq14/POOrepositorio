var Complexo = /** @class */ (function () {
    function Complexo(a, b) {
        this.a = a;
        this.b = b;
    }
    Complexo.prototype.soma = function (c, d) {
        console.log("A soma de   " + c + "+" + d + "i com " + this.a + "+" + this.b + "i e :" + (this.a + c) + "+" + (this.b + d) + "i");
        // alert("A soma e : "+(this.a + c)+"+"+(this.b+d)+"i");
    };
    Complexo.prototype.multiplica = function (c, d) {
        console.log("A multiplicacao de  " + c + "+" + d + "i com " + this.a + "+" + this.b + "i e :" + ((this.a * c) - (this.b * d)) + "+" + ((this.a * d) + (this.b * c)) + "i");
        // alert("A multiplicacao e : " + ((this.a * c) - (this.b * d)) + "+" + ((this.a * d) + (this.b * c)) + "i");
    };
    Complexo.prototype.mostrar = function () {
        console.log(this.a + "+" + this.b + "i");
        //  alert(this.a+"+"+this.b+"i");
    };
    Complexo.prototype.modulo = function () {
        return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
    };
    Complexo.prototype.argumentoPrincipal = function () {
        return Math.pow(Math.tan(this.a), -1) * (this.a / this.b);
    };
    return Complexo;
}());
var c = new Complexo(1, 2);
//c.a = 1;
//c.b = 2;
c.soma(5, 2);
c.multiplica(1, 1);
c.mostrar();
console.log("O modulo e : " + c.modulo());
console.log("O argumento : " + c.argumentoPrincipal());
