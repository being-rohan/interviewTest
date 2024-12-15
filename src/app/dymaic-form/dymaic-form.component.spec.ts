import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DymaicFormComponent } from './dymaic-form.component';

describe('DymaicFormComponent', () => {
  let component: DymaicFormComponent;
  let fixture: ComponentFixture<DymaicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DymaicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DymaicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
