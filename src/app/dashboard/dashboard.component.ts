import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public title = 'dashboard';

  public products = [
    { milk: 5.99, bread: 2.99 }
  ]

  public cols = [
    { header: 'milk', field: 'milk' },
    { header: 'bread', field: 'bread' },
  ];

  constructor(private _testService: TestService) {}

  public ngOnInit(): void {
    this._testService.getTest().subscribe({
      next: (res: any) => {
        this.title = res.message;
      }
    })
  }
}
