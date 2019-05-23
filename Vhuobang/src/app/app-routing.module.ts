import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PrimarySourceComponent } from './pages/main/source/primary-source/primary-source.component'
import { SourceComponent } from './pages/main/source/source.component'
import { SeniorSourceComponent } from './pages/main/source/senior-source/senior-source.component'
import { LoginComponent } from './pages/login/login.component'
import { MainComponent } from './pages/main/main.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'source',
        component: SourceComponent,
        children: [
          {
            path: 'lowsource',
            component: PrimarySourceComponent
          },
          {
            path: 'heightSource',
            component: SeniorSourceComponent
          },
          {
            path: '**',
            redirectTo: 'lowsource'
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/main'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
