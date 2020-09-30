import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModelErrorComponent } from './show-model-error.component';

describe('ShowModelErrorComponent', () => {
  let component: ShowModelErrorComponent;
  let fixture: ComponentFixture<ShowModelErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowModelErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModelErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
