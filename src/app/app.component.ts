import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PagelistComponent } from './pagelist/pagelist.component';
export interface goods {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent, PagelistComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Testapp';
}
