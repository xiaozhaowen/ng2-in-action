import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDemoComponent } from './btn-demo.component';

describe('BtnDemoComponent', () => {
  let component: BtnDemoComponent;
  let fixture: ComponentFixture<BtnDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
