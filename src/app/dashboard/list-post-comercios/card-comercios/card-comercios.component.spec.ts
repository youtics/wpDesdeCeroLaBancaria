import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComerciosComponent } from './card-comercios.component';

describe('CardComerciosComponent', () => {
  let component: CardComerciosComponent;
  let fixture: ComponentFixture<CardComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComerciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
