import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Urls } from './url'

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  randomUserUrl = 'https://api.randomuser.me/'
  private urls = Urls
  // getUsers(
  //   pageIndex: number = 1,
  //   pageSize: number = 10,
  //   sortField: string,
  //   sortOrder: string,
  //   genders: string[]
  // ): Observable<{}> {
  //   let params = new HttpParams()
  //     .append('page', `${pageIndex}`)
  //     .append('results', `${pageSize}`)
  //     .append('sortField', sortField)
  //     .append('sortOrder', sortOrder)
  //   genders.forEach(gender => {
  //     params = params.append('gender', gender)
  //   })
  //   return this.http.get('https://api.randomuser.me/', {
  //     params
  //   })
  // }

  getBillList(pageIndex: number = 1, pageSize: number = 3): Observable<{}> {
    let params = new HttpParams()
      .append('pageNum', `${pageIndex}`)
      .append('pageSoze', `${pageSize}`)

    return this.http.post(`${this.urls.getResourceList}`, params)
  }
  getFeedback(pageIndex: number = 1, pageSize: number = 3): Observable<{}> {
    let params = new HttpParams()
      .append('pageNum', `${pageIndex}`)
      .append('pageSize', `${pageSize}`)
    return this.http.get(`${this.urls.getFeedback}`, { params })
  }
  getBill(pageIndex: number = 1, pageSize: number = 3): Observable<{}> {
    console.log(pageIndex, pageSize)
    let params = new HttpParams()
      .append('pageNum', `${pageIndex}`)
      .append('pageSize', `${pageSize}`)
    // return this.http.post(`${this.urls.getResourceList}`, { params })
    return this.http.post(`${this.urls.getResourceList}`, params)
  }

  constructor(private http: HttpClient) {}
}
