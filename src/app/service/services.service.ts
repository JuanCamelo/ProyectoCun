import { Injectable } from '@angular/core';
import{ HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { user } from "../common/interfaces"

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http : HttpClient
  ) { }
  getlist(): Observable<user[]>{
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/todos/')
  }
}
