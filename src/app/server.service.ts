import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) { }

  getServerData(listPath){
      // return this._http.get('http://dummy.restapiexample.com/api/v1/employees');
      return this._http.get(listPath);
     
  }
}
