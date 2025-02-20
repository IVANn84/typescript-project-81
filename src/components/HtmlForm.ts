import Tag from './Tag';
import { Template, Url } from 'src/types/sharedTypes';

export default class HtmlForm {
  constructor(public template: Template, public url: Url) {
    this.template = template;
    this.url = url;
  }

  static haveUrl(url: Url): boolean {
    return Object.keys(url).length === 0 ? false : true;
  }

  formFor(template: Template, url: Url) {
    if (HtmlForm.haveUrl(this.url)) {
      return `<form action="${url.url}" method="post"></form>`;
    }
    return `<form action="#" method="post"></form>`;
  }
}
