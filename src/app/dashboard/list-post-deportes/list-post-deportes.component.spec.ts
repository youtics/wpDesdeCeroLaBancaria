import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostDeportesComponent } from './list-post-deportes.component';

describe('ListPostDeportesComponent', () => {
  let component: ListPostDeportesComponent;
  let fixture: ComponentFixture<ListPostDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostDeportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
