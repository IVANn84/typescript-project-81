import { JsxFlags } from 'typescript';

class Tag {
  constructor(
    private tagName: string,
    private attributes: Record<string, string> = {},
    private content: string = ''
  ) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.content = content;
  }

  private isSelfClosingTag(tagName: string): boolean {
    const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
    return selfClosingTags.includes(tagName);
  }

  generateHtml(): string {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');

    if (this.isSelfClosingTag(this.tagName)) {
      return `<${this.tagName}${attrs ? ' ' + attrs : ''} />`;
    }
    return `<${this.tagName}${attrs ? ' ' + attrs : ''}>${this.content}</${
      this.tagName
    }>`;
  }
}

const res = new Tag('br');
console.log(res.generateHtml());
