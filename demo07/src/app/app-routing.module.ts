import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { ListComponent } from './user/list/list.component'
import { VipComponent } from './user/vip/vip.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'vip',
        component: VipComponent
      },
      {
        path: '**',
        redirectTo: '/user/list'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
