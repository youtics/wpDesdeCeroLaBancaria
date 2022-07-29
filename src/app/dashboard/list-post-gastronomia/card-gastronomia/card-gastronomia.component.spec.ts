import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGastronomiaComponent } from './card-gastronomia.component';

describe('CardGastronomiaComponent', () => {
  let component: CardGastronomiaComponent;
  let fixture: ComponentFixture<CardGastronomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGastronomiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
