import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSourceComponent } from './senior-source.component';

describe('SeniorSourceComponent', () => {
  let component: SeniorSourceComponent;
  let fixture: ComponentFixture<SeniorSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
