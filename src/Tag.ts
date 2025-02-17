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

// console.log(new Tag('img', { src: 'path/to/image' }));
// const res = new Tag('img', { src: 'path/to/image' });
// console.log(res.generateHtml());

const imgTag = new Tag('img', { src: 'image.jpg' });
console.log(imgTag.generateHtml()); // <img src="image.jpg" alt="My Image" />
