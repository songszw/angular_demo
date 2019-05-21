import { Injectable } from '@angular/core'
import { Urls } from '../url'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AreaDataService {
  private urls = Urls
  provinces = [
    {
      value: 'zhejiang',
      label: 'Zhejiang'
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu'
    }
  ]

  cities: {
    [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }>
  } = {
    zhejiang: [
      {
        value: 'hangzhou',
        label: 'Hangzhou'
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ],
    jiangsu: [
      {
        value: 'nanjing',
        label: 'Nanjing'
      }
    ]
  }

  scenicspots: {
    [key: string]: Array<{ value: string; label: string; isLeaf?: boolean }>
  } = {
    hangzhou: [
      {
        value: 'xihu',
        label: 'West Lake',
        isLeaf: true
      }
    ],
    nanjing: [
      {
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
        isLeaf: true
      }
    ]
  }

  getProviceData(): Observable<{}> {
    let params = new HttpParams()
    console.log(params)
    return this.http.post(`${this.urls.getProvice}`, params)
  }

  constructor(private http: HttpClient) {}
}
