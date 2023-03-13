import { TestBed } from '@angular/core/testing';

import { SignInHttpRepositoryService } from './sign-in-http-repository.service';

describe('SignInService', () => {
  let service: SignInHttpRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInHttpRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
