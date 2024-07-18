export default class CL_articulo{
    constructor(codi,c,p){
        this.codigo=codi;
        this.costo=c;
        this.precio=p;
    }
    setcodigo (codi){
        this.codigo = codi; }
    getcodigo (){
        return this.codigo;
        }
    setcosto (c){
        this.costo = c; }
    getcosto (){
        return this.costo;
            }
    setprecio (p){
        this.precio = p; }
    getprecio (){
        return this.precio;
                }
}