import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy, OnInit {
  titlePage: string;
  titlePage$: Subscription;
  constructor(private route: Router) {
    this.titlePage$ = this.getArgumentosRuta()
      .subscribe(({ titulo }) => {
        this.titlePage = titulo;
        document.title = `Admin-Agro ${{ titulo }}`
      });
  } 


  ngOnDestroy(): void {
    this.titlePage$.unsubscribe();
  }
  ;

  getArgumentosRuta() {
    return this.route.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
