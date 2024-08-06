import { Routes } from '@angular/router';
import { PagelistComponent } from './pagelist/pagelist.component';
import { DetailsComponent } from './details/details.component';
import { OneorderComponent } from './oneorder/oneorder.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'page',
    component: PagelistComponent,
  },
  {
    path: 'page/:id',
    component: DetailsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'page/cart',
    component: CartComponent,
  },
];
