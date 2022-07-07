import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { CommonModule } from '@angular/common';
import { ControlBoardComponent } from './pages/control-board/control-board.component';


const routes: Routes = [{
  path: '',
  
  component: LayoutComponent,
  children: [
    {
      path: 'vis',
      component:VisualizationComponent
    },
    {
      path:'',
      component:ControlBoardComponent
    }
    
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
