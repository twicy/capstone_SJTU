import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { CommonModule } from '@angular/common';
import { ControlBoardComponent } from './pages/control-board/control-board.component';
import { WarningsComponent } from './pages/modules/warnings/warnings.component';


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
      redirectTo:'Machine',
      pathMatch: 'full',
    },
    {
      path:'Machine',
      component:ControlBoardComponent,
      children:[
        {
          path:'',
          component:WarningsComponent,
          pathMatch:'full'
        },
        
        {
          path: ':id',
          component:WarningsComponent,
        }, 
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
