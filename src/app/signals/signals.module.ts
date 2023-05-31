import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalRoutingModule } from './signals-routing.module';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule
  ]
})
export class SignalsModule { }
