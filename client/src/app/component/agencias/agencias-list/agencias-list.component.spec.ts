import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasListComponent } from './agencias-list.component';

describe('AgenciasListComponent', () => {
  let component: AgenciasListComponent;
  let fixture: ComponentFixture<AgenciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
