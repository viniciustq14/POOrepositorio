class Complexo{
 a:number;
 b:number;
constructor(a:number,b:number){
    this.a=a;
    this.b=b;
}
 soma(c:number,d:number):void{
    console.log("A soma de   "+c+"+"+d+"i com "+this.a+"+"+this.b+"i e :"+(this.a + c)+"+"+(this.b+d)+"i");
     // alert("A soma e : "+(this.a + c)+"+"+(this.b+d)+"i");
     }
 
     multiplica(c:number,d:number): void{
         console.log("A multiplicacao de  " +c+"+"+d+"i com "+this.a+"+"+this.b+"i e :"+ ((this.a * c) - (this.b * d)) + "+" + ((this.a * d) + (this.b * c)) + "i");
        // alert("A multiplicacao e : " + ((this.a * c) - (this.b * d)) + "+" + ((this.a * d) + (this.b * c)) + "i");
     }
     mostrar(): void{
         console.log(this.a+"+"+this.b+"i");
       //  alert(this.a+"+"+this.b+"i");
         
     }
     modulo(): number{
        
         return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
     }
     argumentoPrincipal(): number{
        return Math.pow(Math.tan(this.a), -1) * (this.a / this.b);
    }
   
}


var c = new Complexo(1,2);

//c.a = 1;
//c.b = 2;
c.soma(5, 2);
c.multiplica(1, 1);
c.mostrar();
console.log("O modulo e : "+c.modulo());
console.log("O argumento : "+c.argumentoPrincipal());