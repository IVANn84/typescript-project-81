import { Template, Url } from 'src/types/sharedTypes';
import Tag from './components/Tag';
import HtmlForm from './components/HtmlForm';

export const createTag = (name: string, attributes: Record<string, string>) => {
  const tag = new Tag(name, attributes);
  return tag.generateHtml();
};

export const createForm = (template: Template, url: Url) => {
  const form = new HtmlForm(template, url);
  return form.formFor(template, url);
};
