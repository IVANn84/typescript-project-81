import Tag from './components/Tag';
import HtmlForm from './components/HtmlForm';

export const createTag = (name: string, attributes: Record<string, string>) => {
  const tag = new Tag(name, attributes);
  return tag.generateHtml();
};

export const createForm = (
  template: Record<string, string>,
  props: Record<string, string>
) => {
  const form = new HtmlForm(template, props);
  return form.formFor();
};
