import { Component, OnInit } from '@angular/core'
import { LoginService } from 'src/app/services/login/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}
  login() {
    // console.log(this.username, this.password)
    this.loginService
      .LoginService(this.username, this.password)
      .subscribe((data: any) => {
        // console.log(data)
        if (data.code === 200) {
          this.getMenuData()
          localStorage.setItem('username', data.data)
          this.router.navigate(['/main'])
        }
      })
  }
  getMenuData() {
    this.loginService.MenuList().subscribe((data: any) => {
      // console.log(data.data)
      if (data.code === 200) {
        localStorage.setItem('menulist', JSON.stringify(data.data))
      }
    })
  }
}
