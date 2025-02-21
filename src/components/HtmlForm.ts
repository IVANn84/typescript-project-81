import Tag from './Tag';

export default class HtmlForm {
  constructor(
    public template: Record<string, string>,
    public props: Record<string, string>
  ) {
    this.template = template;
    this.props = props;
  }

  formFor() {
    const res = new Tag('form', {
      action: this.props.url ? this.props.url : '#',
      method: 'post',
    });
    return res.generateHtml();
  }
}
