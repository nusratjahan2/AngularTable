import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DataTableComponent } from './data-table/data-table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [MatTableModule, DataTableComponent, CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

}
