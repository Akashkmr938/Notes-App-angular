import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  userData = null;
  constructor() {}

  public get loginData(): any {
    return this.userData;
  }

  public set loginData(loginData: any) {
    this.userData = loginData;
  }
}
