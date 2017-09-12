import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PngContextMenuComponent } from './png-context-menu.component';

describe('PngContextMenuComponent', () => {
  let component: PngContextMenuComponent;
  let fixture: ComponentFixture<PngContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PngContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PngContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
