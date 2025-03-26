import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface User{
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit{
displayedColumns: string[] = ['id', 'name', 'email'];
dataSource: User[] = [];

constructor(private http: HttpClient){}

ngOnInit() {
  this.fetchUsers();
}

fetchUsers() {
  this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe((data) => {
      this.dataSource = data;
    });
}

}
