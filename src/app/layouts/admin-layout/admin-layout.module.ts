import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
  ]
})

export class AdminLayoutModule {}
