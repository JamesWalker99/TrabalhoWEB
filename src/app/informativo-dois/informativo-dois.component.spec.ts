import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativoDoisComponent } from './informativo-dois.component';

describe('InformativoDoisComponent', () => {
  let component: InformativoDoisComponent;
  let fixture: ComponentFixture<InformativoDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativoDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
