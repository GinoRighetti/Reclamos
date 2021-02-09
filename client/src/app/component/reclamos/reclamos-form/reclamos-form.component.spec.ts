import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosFormComponent } from './reclamos-form.component';

describe('ReclamosFormComponent', () => {
  let component: ReclamosFormComponent;
  let fixture: ComponentFixture<ReclamosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
