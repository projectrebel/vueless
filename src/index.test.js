import * as Vueless from './index.js';

it('should expose the correct components', () => {
  expect(Object.keys(Vueless)).toEqual([
    'install',
    'PasswordComplexity',
  ]);
});