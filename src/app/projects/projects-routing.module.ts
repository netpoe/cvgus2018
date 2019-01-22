import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarcomWalmartReportsDashboardComponent } from './starcom-walmart-reports-dashboard/starcom-walmart-reports-dashboard.component';

const routes: Routes = [
  {
    path: 'starcom/walmart-reports-dashboard',
    component: StarcomWalmartReportsDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
