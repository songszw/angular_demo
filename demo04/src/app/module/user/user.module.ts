import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './user.component'
import { ProfileComponent } from './components/profile/profile.component'
import { AddressComponent } from './components/address/address.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [UserComponent, ProfileComponent, AddressComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgZorroAntdModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class UserModule {}
