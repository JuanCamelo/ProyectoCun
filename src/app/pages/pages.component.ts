import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
   date = new Date();
   optionDate ={ year: 'numeric', month: 'long', day: 'numeric' }
   dateNow = this.date.toLocaleDateString("es-Es", this.optionDate);

  constructor() { }

  ngOnInit(): void {
  }

}
