import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { HeaderComponent } from './header/header.component'
import { SiderComponent } from './sider/sider.component'
import { SourceComponent } from './source/source.component'
import { PrimarySourceComponent } from './source/primary-source/primary-source.component'
import { SeniorSourceComponent } from './source/senior-source/senior-source.component'
import { SourceService } from './services/source/source.service'

registerLocaleData(zh)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderComponent,
    PrimarySourceComponent,
    SeniorSourceComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, SourceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
