import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiderComponent } from './asider.component';

describe('AsiderComponent', () => {
  let component: AsiderComponent;
  let fixture: ComponentFixture<AsiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
