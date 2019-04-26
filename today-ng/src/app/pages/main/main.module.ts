import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainComponent } from './main.component'
import { FormsModule } from '@angular/forms'
import { NgZorroAntdModule } from 'ng-zorro-antd'

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, FormsModule, NgZorroAntdModule]
})
export class MainModule {}
