import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-type-script',
  templateUrl: './f-type-script.component.html',
  styleUrls: ['./f-type-script.component.css']
})
export class FTypeScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.variables();
  }

  variables(){
    //TypeScript sus tipos primitivos son : number, boolean, string
    let x:number =5;
    let y = 1;
    let z; //Ni tipo , ni un valor -> any
    z=5;
    z="Cinco";
    z=true;
    console.log("Valor de x ->" + x);
    console.log("Valor de y -> "+ y);
    console.log("valor de z " + z)

    //Tipos boolean
    let bandera : boolean = true;
    let si =true; // lo infiere como boolean
    let no = false;
    console.log("valor de bandera -> " + bandera);
    console.log("valor de si -> " + si);
    console.log("valor de no -> " + no);




  }

}
