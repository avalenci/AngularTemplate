import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _httpClient: HttpClient) {}

  public getTest() {
    return this._httpClient.get('http://localhost:4000/api/test');
  }
}
