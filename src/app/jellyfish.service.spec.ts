import { TestBed } from '@angular/core/testing';

import { JellyfishService } from './jellyfish.service';

describe('JellyfishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JellyfishService = TestBed.get(JellyfishService);
    expect(service).toBeTruthy();
  });
});
