import Tag from './Tag';

const createTag = (name: string, data: Record<string, string>) => {
  const tag = new Tag('div', data);
  return tag.generateHtml();
};

// eslint-disable-next-line no-console
console.log(createTag('input', { type: 'submit', value: 'Save' }));

export default createTag;
