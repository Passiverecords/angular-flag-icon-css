import { TestBed, inject } from '@angular/core/testing';

import { NgxFlagIconCssService } from './ngx-flag-icon-css.service';

describe('NgxFlagIconCssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFlagIconCssService]
    });
  });

  it('should be created', inject([NgxFlagIconCssService], (service: NgxFlagIconCssService) => {
    expect(service).toBeTruthy();
  }));
});
