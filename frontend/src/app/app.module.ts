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
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ElectronService } from './core/services';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { ControlBoardComponent } from './pages/control-board/control-board.component';



PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WarningDetailComponent, 
    LayoutComponent,
    VisualizationComponent,
    ControlBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    CommonModule, 
    PlotlyModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
