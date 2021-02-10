import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  titulo : string;

  roomsService= [
    {identificacion:1234567,color:'green', cama:'CAMA 106', name:'Luis',id:2},{identificacion:87654,cama:'CAMA 104',color:'yellow', name:'David',id:2},
    {identificacion:1234567,color:'yellow', cama:'CAMA 302', name:'Miguel',id:2},{identificacion:87654,cama:'CAMA 100',color:'red', name:'Diego',id:2},
    {identificacion:1234567,color:'red', cama:'CAMA 301', name:'Jhon',id:2},{identificacion:87654,cama:'CAMA 101',color:'blue', name:'Manuel',id:2},
    {identificacion:1234567,color:'blue', cama:'CAMA 201', name:'Alejandro',id:2},{identificacion:87654,cama:'CAMA 105',color:'blue', name:'Jhon',id:2},
    {identificacion:1234567,color:'Purple', cama:'CAMA 203', name:'Manuel',id:2},{identificacion:87654,cama:'CAMA 500',color:'purple', name:'Andres',id:2},
    {identificacion:1234567,color:'#2bade0', cama:'CAMA 204', name:'Maria',id:2},{identificacion:87654,cama:'CAMA 501',color:'#2bade0', name:'Juan',id:2},
    {identificacion:1234567,color:'red', cama:'CAMA 205', name:'Viviana',id:2},{identificacion:87654,cama:'CAMA 307',color:'red', name:'Camilo',id:2},
    {identificacion:1234567,color:'green', cama:'CAMA 208', name:'Luis',id:2},{identificacion:87654,cama:'CAMA 206',color:'#2bade0', name:'Sofia',id:2},
    {identificacion:1234567,color:'green', cama:'CAMA 106', name:'Luis',id:2},{identificacion:87654,cama:'CAMA 104',color:'yellow', name:'David',id:2},
    {identificacion:1234567,color:'yellow', cama:'CAMA 302', name:'Miguel',id:2},{identificacion:87654,cama:'CAMA 100',color:'red', name:'Diego',id:2},
    {identificacion:1234567,color:'red', cama:'CAMA 301', name:'Jhon',id:2},{identificacion:87654,cama:'CAMA 101',color:'blue', name:'Manuel',id:2},
    {identificacion:1234567,color:'blue', cama:'CAMA 201', name:'Alejandro',id:2},{identificacion:87654,cama:'CAMA 105',color:'blue', name:'Jhon',id:2},
    {identificacion:1234567,color:'Purple', cama:'CAMA 203', name:'Manuel',id:2},{identificacion:87654,cama:'CAMA 500',color:'purple', name:'Andres',id:2},
    {identificacion:1234567,color:'#2bade0', cama:'CAMA 204', name:'Maria',id:2},{identificacion:87654,cama:'CAMA 501',color:'#2bade0', name:'Juan',id:2},
    {identificacion:1234567,color:'red', cama:'CAMA 205', name:'Viviana',id:2},{identificacion:87654,cama:'CAMA 307',color:'red', name:'Camilo',id:2},
    {identificacion:1234567,color:'green', cama:'CAMA 208', name:'Luis',id:2},{identificacion:87654,cama:'CAMA 206',color:'#2bade0', name:'Sofia',id:2}
  
  ]

  constructor(
     private route: Router    
     ) {
      this.route.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd ),
        filter((evento : ActivationEnd )=> evento.snapshot.firstChild === null ),
        map((evento: ActivationEnd) => evento.snapshot.data)      
      )
      
      .subscribe(({titulo}) =>{
        this.titulo = titulo;
        
      });
   }

  ngOnInit() {   
  }

}
