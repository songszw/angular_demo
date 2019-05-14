import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
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

  getBillList(pageIndex: number = 1): Observable<{}> {
    let params = new HttpParams().append('pageNum', `${pageIndex}`)

    return this.http.post(`${this.urls.getResourceList}`, {
      params
    })
  }

  constructor(private http: HttpClient) {}
}
