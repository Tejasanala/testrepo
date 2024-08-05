import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneorderComponent } from './oneorder.component';

describe('OneorderComponent', () => {
  let component: OneorderComponent;
  let fixture: ComponentFixture<OneorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
