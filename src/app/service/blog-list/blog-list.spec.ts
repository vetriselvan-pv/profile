import { TestBed } from '@angular/core/testing';

import { BlogList } from './blog-list';

describe('BlogList', () => {
  let service: BlogList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
