import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public title = 'dashboard';

  constructor(private _testService: TestService) {}

  public ngOnInit(): void {
    this._testService.getTest().subscribe({
      next: (res: any) => {
        this.title = res.message;
      }
    })
  }
}
