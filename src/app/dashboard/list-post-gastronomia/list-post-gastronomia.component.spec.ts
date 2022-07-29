import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostGastronomiaComponent } from './list-post-gastronomia.component';

describe('ListPostGastronomiaComponent', () => {
  let component: ListPostGastronomiaComponent;
  let fixture: ComponentFixture<ListPostGastronomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostGastronomiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostGastronomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
