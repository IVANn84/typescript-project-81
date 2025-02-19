import { describe, it, expect } from 'vitest';
import createTag from 'src';

describe('example', () => {
  it('должен проходить успешно', () => {
    expect(createTag('div', { for: 'email' })).toBe('<div for="email"></div>');
  });
});
