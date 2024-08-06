import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { PageService } from '../page.service';
import { goods } from '../app.component';
import { Route, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  pageList: Array<goods> = [];
  isLoading = true;
  msg = '';
  trustedUrl: any;
  goods!: goods;
  constructor(public pageService: PageService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.pageService
      .getpageByIdP(id)
      .then((data) => {
        this.goods = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }

  // ngOnInit() {
  //   let id = this.route.snapshot.paramMap.get('id') as string;
  //   console.log(id);
  //   this.pageList = this.pageService.getpageList();
  //   console.log(this.pageList);
  // }
}
