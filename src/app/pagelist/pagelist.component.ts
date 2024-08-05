import { Component } from '@angular/core';
import { goods } from '../app.component';
import { PageService } from '../page.service';
import { Router } from '@angular/router';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-pagelist',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './pagelist.component.html',
  styleUrl: './pagelist.component.scss',
})
export class PagelistComponent {
  pageList: Array<goods> = [];
  isLoading: boolean = true;
  msg = '';

  constructor(public pageService: PageService, private router: Router) {
    this.pageList = this.pageService.getpageList();
  }

  ngOnInit() {
    this.loadPages();
  }

  loadPages() {
    this.pageService
      .getAllpagesP()
      .then((data) => {
        this.pageList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
