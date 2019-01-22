import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { StarcomWalmartReportsDashboardComponent } from './starcom-walmart-reports-dashboard/starcom-walmart-reports-dashboard.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [StarcomWalmartReportsDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
