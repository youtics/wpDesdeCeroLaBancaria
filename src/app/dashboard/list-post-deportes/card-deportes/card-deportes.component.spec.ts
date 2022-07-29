import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeportesComponent } from './card-deportes.component';

describe('CardDeportesComponent', () => {
  let component: CardDeportesComponent;
  let fixture: ComponentFixture<CardDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
