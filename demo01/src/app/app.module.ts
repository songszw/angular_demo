// 这个文件是angular根模块，告诉angular如何组装应用

// 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// angular的核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

// @NgModule装饰器，@NgModule接受一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [ // 配置当前项目运行的组件
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent, SearchComponent, TodolistComponent
  ],
  imports: [ // 配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // 配置项目所需要的服务
  bootstrap: [AppComponent] // 指定应用的主视图（根组件），通过引导根app module来启动应用，一般是根组件
})

// 根模块不需要导出人格东西，因为其他组件不需要导入根模块
export class AppModule { }
