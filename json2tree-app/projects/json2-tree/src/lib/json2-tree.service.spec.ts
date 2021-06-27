import { TestBed } from '@angular/core/testing';

import { Json2TreeService } from './json2-tree.service';

describe('Json2TreeService', () => {
  let service: Json2TreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Json2TreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
