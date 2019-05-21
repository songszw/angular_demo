import { Injectable } from '@angular/core'
import { Urls } from '../url'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urls = Urls
  //登录
  LoginService(username: string = '', password: string = ''): Observable<{}> {
    let params = new HttpParams()
      .append('loginUserName', `${username}`)
      .append('loginUserPassword', `${password}`)
    return this.http.post(`${this.urls.login}`, params)
  }
  LogOutService() {
    let params = new HttpParams()
    return this.http.post(`${this.urls.logout}`, params)
  }
  constructor(private http: HttpClient) {}
}
