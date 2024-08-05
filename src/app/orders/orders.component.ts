import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { orders } from '../app.component';
import { OneorderComponent } from '../oneorder/oneorder.component';
import { PageService } from '../page.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    OneorderComponent,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orderList: Array<orders> = [];
  isLoading: boolean = true;
  msg = '';

  constructor(public pageService: PageService, private router: Router) {
    this.orderList = this.pageService.orderList;
  }

  ngOnInit() {
    this.loadPages();
  }

  loadPages() {
    this.pageService
      .getAllordersP()
      .then((datee) => {
        this.orderList = datee;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
