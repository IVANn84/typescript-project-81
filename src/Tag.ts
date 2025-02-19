export default class Tag {
  constructor(
    private tagName: string,
    private attributes: Record<string, string> = {},
    private content: string = ''
  ) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.content = content;
  }

  static isSelfClosingTag(tagName: string): boolean {
    const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
    return selfClosingTags.includes(tagName);
  }

  generateHtml(): string {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');

    if (Tag.isSelfClosingTag(this.tagName)) {
      return `<${this.tagName}${attrs ? ` ${attrs}` : ''} />`;
    }
    return `<${this.tagName}${attrs ? ` ${attrs}` : ''}>${this.content}</${
      this.tagName
    }>`;
  }
}

// const res = new Tag('img');
// eslint-disable-next-line no-console
// console.log(res.generateHtml());
