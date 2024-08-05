import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oneorder',
  standalone: true,
  imports: [],
  templateUrl: './oneorder.component.html',
  styleUrl: './oneorder.component.scss',
})
export class OneorderComponent {
  @Input() order = {
    date: '2024-08-01T14:30:00Z',
    price: 499.99,
    image:
      'https://www.shutterstock.com/image-photo/office-chair-black-leather-isolated-260nw-235250581.jpg',
    id: 'order001',
    quantity: 1,
  };
}
