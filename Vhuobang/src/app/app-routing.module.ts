import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PrimarySourceComponent } from './source/primary-source/primary-source.component'
import { SourceComponent } from './source/source.component'
import { SeniorSourceComponent } from './source/senior-source/senior-source.component'

const routes: Routes = [
  {
    path: 'source',
    component: SourceComponent,
    children: [
      {
        path: 'primarySource',
        component: PrimarySourceComponent
      },
      {
        path: 'seniorSource',
        component: SeniorSourceComponent
      },
      {
        path: '**',
        redirectTo: 'primarySource'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
