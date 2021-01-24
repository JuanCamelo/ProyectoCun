import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.component.css' ]
})
export class NopagefoundComponent {
  date = new Date();
  optionDate = {year :'numeric', month: "long",day:"numeric"};

  dateNow = this.date.toLocaleDateString("es-ES",this.optionDate)

}
