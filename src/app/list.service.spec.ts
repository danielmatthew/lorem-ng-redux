/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ListService } from './list.service';

describe('List Service', () => {
  beforeEachProviders(() => [ListService]);

  it('should ...',
      inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
