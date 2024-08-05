import { Routes } from '@angular/router';
import { PagelistComponent } from './pagelist/pagelist.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: 'page',
    component: PagelistComponent,
  },
  //   {
  //     path: 'page/:id',
  //     component: DetailsComponent,
  //   },
];
