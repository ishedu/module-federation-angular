import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeOrderComponentComponent } from './mfe-order-component.component';

describe('MfeOrderComponentComponent', () => {
  let component: MfeOrderComponentComponent;
  let fixture: ComponentFixture<MfeOrderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeOrderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
