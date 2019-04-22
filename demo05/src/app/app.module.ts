import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'

import { AppComponent } from './app.component'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'

// modules
import { AppRoutingModule } from './app-routing.module'
import { SetupModule } from './pages/setup/setup.module'
import { MainModule } from './pages/main/main.module'
// import { MainRoutingModule } from './pages/main/main-routing.module'

// services
import { LocalStorageService } from './services/localStorage/local-storage.service'
import { ListService } from './services/list/list.service'
import { TodoService } from './services/todo/todo.service'

registerLocaleData(zh)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    // MainRoutingModule,
    MainModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    LocalStorageService,
    ListService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
