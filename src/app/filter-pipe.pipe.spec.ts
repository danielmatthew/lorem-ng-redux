/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FilterPipePipe } from './filter-pipe.pipe';

describe('Pipe: FilterPipe', () => {
  it('create an instance', () => {
    let pipe = new FilterPipePipe();
    expect(pipe).toBeTruthy();
  });
});
