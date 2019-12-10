import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyfishDetailComponent } from './jellyfish-detail.component';

describe('JellyfishDetailComponent', () => {
  let component: JellyfishDetailComponent;
  let fixture: ComponentFixture<JellyfishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JellyfishDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JellyfishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
