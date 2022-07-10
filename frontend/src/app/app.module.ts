import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialExampleModule} from '../material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './toolComponents/header/header.component';
import { FooterComponent } from './toolComponents/footer/footer.component';
import { SidebarComponent } from './toolComponents/sidebar/sidebar.component';
import { WarningDetailComponent } from './toolComponents/warning-detail/warning-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { PiechartComponent } from './graph/pie-chart/pie-chart.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ElectronService } from './core/services';
import { WarninglistService } from './services/warnings/warninglist.service';


import { ControlBoardComponent } from './pages/control-board/control-board.component';
import { WarningsComponent } from './pages/modules/warnings/warnings.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    VisualizationComponent,
    ControlBoardComponent,
    WarningsComponent,
    WarningDetailComponent,  
    PiechartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    CommonModule, 
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [WarninglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
