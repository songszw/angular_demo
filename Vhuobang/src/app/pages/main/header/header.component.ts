import { Component, OnInit } from '@angular/core'
import { LoginService } from 'src/app/services/login/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  constructor(private Logout: LoginService, private router: Router) {}

  ngOnInit() {}
  logout() {
    console.log('aaa')
    this.Logout.LogOutService().subscribe((data: any) => {
      console.log(data)
      if (data.code === 200) {
        this.router.navigate(['/login'])
      }
    })
  }
}
