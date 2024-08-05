import { Routes } from '@angular/router';
import { PagelistComponent } from './pagelist/pagelist.component';
import { DetailsComponent } from './details/details.component';
import { OneorderComponent } from './oneorder/oneorder.component';

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
    component: OneorderComponent,
  },
];
