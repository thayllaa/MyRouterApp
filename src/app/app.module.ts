import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'thaylla', component: ThayllaComponent },
      { path: 'tabuada', component: TabuadaComponent },
      { path: 'timer', component: TimerComponent },
    ]),
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    HomeComponent,
    ThayllaComponent,
    TabuadaComponent,
    TimerComponent
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
