import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyfishesComponent } from './jellyfishes.component';

describe('JellyfishesComponent', () => {
  let component: JellyfishesComponent;
  let fixture: ComponentFixture<JellyfishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JellyfishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JellyfishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
