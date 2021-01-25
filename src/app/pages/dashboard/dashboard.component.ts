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

  constructor( private route: Router) {
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

  ngOnInit(): void {
  }

}
