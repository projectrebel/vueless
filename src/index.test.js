import * as Vueless from './index.js';

it('should expose the correct items', () => {
  expect(Object.keys(Vueless)).toEqual([
    'TagInput',
    'PasswordComplexity',
    'useBooleanState',
    'default', // This is the plugin installer
  ]);
});