import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { OneorderComponent } from './oneorder/oneorder.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
export interface goods {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}
export interface orders {
  date: string;
  price: number;
  image: string;
  id: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PageComponent,
    PagelistComponent,
    RouterLink,
    OneorderComponent,
    OrdersComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Testapp';
}
