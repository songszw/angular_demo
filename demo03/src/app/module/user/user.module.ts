import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service'
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [AddressComponent, ProfileComponent, OrderComponent, UserComponent],
  exports:[ UserComponent, OrderComponent],
  providers:[CommonService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
