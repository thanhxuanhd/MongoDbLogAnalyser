import { TestBed } from '@angular/core/testing';

import { MongoDbLogToQueriesService } from './mongo-db-log-to-queries.service';

describe('MongoDbLogToQueriesService', () => {
  let service: MongoDbLogToQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoDbLogToQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
