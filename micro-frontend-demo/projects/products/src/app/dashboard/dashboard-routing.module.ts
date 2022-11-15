import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStatComponent } from './dashboard-stat/dashboard-stat.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: DashboardTableComponent
  },
  {
    path: 'stat',
    component: DashboardStatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
