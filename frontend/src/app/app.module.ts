import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialExampleModule} from '../material.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './toolComponents/header/header.component';
import { FooterComponent } from './toolComponents/footer/footer.component';
import { SidebarComponent } from './toolComponents/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { PiechartComponent } from './graph/pie-chart/pie-chart.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgChartsModule } from 'ng2-charts';

import { ElectronService } from './core/services';
import { WarninglistService } from './services/warnings/warninglist.service';
import { NewWarningsService } from './services/new-warnings/new-warnings.service';


import { ControlBoardComponent } from './pages/control-board/control-board.component';
import { WarningsComponent } from './pages/modules/warnings/warnings.component';
import {HttpClientModule} from '@angular/common/http';
import { BarChartProductionComponent } from './graph/bar-chart-production/bar-chart-production.component';
import { BarChartConsumptionComponent } from './graph/bar-chart-consumption/bar-chart-consumption.component';
import { BarChartWarningsComponent } from './graph/bar-chart-warnings/bar-chart-warnings.component';
import { LineChartConsumptionComponent } from './graph/line-chart-consumption/line-chart-consumption.component';
import { LineChartProductionComponent } from './graph/line-chart-production/line-chart-production.component';
import { WarningDetailsComponent } from './pages/modules/warning-details/warning-details.component';




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
    PiechartComponent,
    BarChartProductionComponent,
    BarChartConsumptionComponent,
    BarChartWarningsComponent,
    LineChartConsumptionComponent,
    LineChartProductionComponent,
    WarningDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    CommonModule, 
    HttpClientModule,
    NgxPaginationModule,
    NgChartsModule
  ],
  providers: [WarninglistService,NewWarningsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
