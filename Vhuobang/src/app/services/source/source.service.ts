import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Urls } from '../url'

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private urls = Urls
  // 获取初级货源信息
  getPrimaryData(
    companyName: string = '',
    startingAddressName: string = '',
    endAddressName: string = ''
  ): Observable<{}> {
    let params = new HttpParams()
      .append('companyName', `${companyName}`)
      .append('startingAddressName', `${startingAddressName}`)
      .append('endAddressName', `${endAddressName}`)

    return this.http.post(`${this.urls.getPrimarySource}`, params)
  }
  // 获取高级货源信息
  getSeniorData(
    material: string = '',
    startTime: string = '',
    endTime: string = '',
    goodsState: string = '',
    pageNum: number = 1,
    pageSize: number = 10
  ): Observable<{}> {
    let params = new HttpParams()
      .append('material', `${material}`)
      .append('startTime', `${startTime}`)
      .append('endTime', `${endTime}`)
      .append('goodsState', `${goodsState}`)
      .append('pageNum', `${pageNum}`)
      .append('pageSize', `${pageSize}`)
    return this.http.post(`${this.urls.getSeniorSource}`, params)
  }
  constructor(private http: HttpClient) {}
}
