import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySourceComponent } from './primary-source.component';

describe('PrimarySourceComponent', () => {
  let component: PrimarySourceComponent;
  let fixture: ComponentFixture<PrimarySourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
