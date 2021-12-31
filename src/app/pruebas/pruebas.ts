import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class pruebas {

    espoliedro=undefined;
    v=undefined;
    e=undefined;
    f=undefined;
  
    verificar(v,e,f){  

    
      
    let resultado = v - e + f;
    if(resultado === 2 ){
      return this.espoliedro="Si es un poliedro";
    }else{
      return this.espoliedro="No es un poliedro";
    }
    
  
  }
}
