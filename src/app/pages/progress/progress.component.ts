import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progress =0;

  get getProgress(){
    return `${this.progress}%`
  }

  cambiarValor(valor: number){
    this.progress = this.progress + valor; 
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
