export default class CL_tienda{
    constructor(){
        this.contMayor65=0;
        this.acumPre=0;
        this.contAr=0;
    }
    procesar(a){
        this.contAr++;
        this.acumPre+=a.precio;
        if(a.precio>65)
            this.contMayor65++;
        
    }
    promedio(){
        return this.acumPre/this.contAr;
    }

}