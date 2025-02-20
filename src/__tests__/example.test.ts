import { describe, it, expect } from 'vitest';
import { createTag, createForm } from 'src';
import {
  formEmptyHTMLFixture,
  formHTMLFixture_2,
  simpleHTMLFixture,
  simpleHTMLFixture_2,
} from './__fixtures__/htmlFixtures';

describe('createTag', () => {
  it('simpleHTMLFixture', () => {
    expect(createTag('div', { for: 'email' })).toContain(simpleHTMLFixture);
  });
  it('simpleHTMLFixture_2', () => {
    expect(createTag('img', { src: 'path/to/image' })).toContain(
      simpleHTMLFixture_2
    );
  });
});

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

describe('createHtmlForm', () => {
  it('simpleHTMLFixture', () => {
    expect(createForm(template, {})).toContain(formEmptyHTMLFixture);
  });
  it('simpleHTMLFixture_2', () => {
    expect(createForm(template, { url: '/users' })).toContain(
      formHTMLFixture_2
    );
  });
});
