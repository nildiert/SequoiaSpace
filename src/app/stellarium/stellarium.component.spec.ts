import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellariumComponent } from './stellarium.component';

describe('StellariumComponent', () => {
  let component: StellariumComponent;
  let fixture: ComponentFixture<StellariumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellariumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
