import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { NewsComponent } from './components/news/news.component'
import { UserModule } from './module/user/user.module'
import { ProductModule } from './module/product/product.module'

@NgModule({
  declarations: [AppComponent, HomeComponent, NewsComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
