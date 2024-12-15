import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacompnentComponent } from './datacompnent.component';

describe('DatacompnentComponent', () => {
  let component: DatacompnentComponent;
  let fixture: ComponentFixture<DatacompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacompnentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatacompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
