import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostEducacionComponent } from './list-post-educacion.component';

describe('ListPostEducacionComponent', () => {
  let component: ListPostEducacionComponent;
  let fixture: ComponentFixture<ListPostEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
