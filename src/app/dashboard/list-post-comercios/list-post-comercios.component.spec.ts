import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostComerciosComponent } from './list-post-comercios.component';

describe('ListPostComerciosComponent', () => {
  let component: ListPostComerciosComponent;
  let fixture: ComponentFixture<ListPostComerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostComerciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
