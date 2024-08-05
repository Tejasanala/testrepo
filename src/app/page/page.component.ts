import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    CartComponent,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() goods = {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDFoZmzJqeMbajI6LSONBTI6x5dnT7qPCcA&s',
    quantity: 3,
    description: 'Bad',
  };
}
