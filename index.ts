import fs from 'fs';
import sanitizeHtml from 'sanitize-html';

const allowedTags = [
  'address',
  'article',
  'aside',
  'footer',
  'header',
  'h1',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup',
  'main',
  'nav',
  'section',
  'blockquote',
  'dd',
  'div',
  'dl',
  'dt',
  'figcaption',
  'figure',
  'hr',
  'li',
  'main',
  'ol',
  'p',
  'pre',
  'ul',
  'a',
  'abbr',
  'b',
  'bdi',
  'bdo',
  'code',
  'data',
  'dfn',
  'kbd',
  'mark',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'time',
  'var',
  'wbr',
  'caption',
  'col',
  'colgroup',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'tr',
].sort();

const transformTags = {
  figure: 'h3',
  blockquote: 'bq',
};

fs.readFile(`./dirty/${process.env.INPUT}.html`, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  fs.writeFile(
    `./clean/${process.env.INPUT}.html`,
    sanitizeHtml(data, {
      transformTags,
      allowedTags,
    }),
    () => {}
  );
});
