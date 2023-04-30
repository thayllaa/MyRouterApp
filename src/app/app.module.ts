import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { MultTableDetailsComponent } from './mult-table-details/mult-table-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ThayllaComponent } from './thaylla/thaylla.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'thaylla', component: ThayllaComponent },
      { path: 'mult-table', component: MultTableComponent },
      { path: 'mult-table/:n', component: MultTableDetailsComponent },
    ]),
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    HomeComponent,
    ThayllaComponent,
    MultTableComponent,
    MultTableDetailsComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
