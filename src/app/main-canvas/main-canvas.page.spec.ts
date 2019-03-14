import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCanvasPage } from './main-canvas.page';

describe('MainCanvasPage', () => {
  let component: MainCanvasPage;
  let fixture: ComponentFixture<MainCanvasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCanvasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
