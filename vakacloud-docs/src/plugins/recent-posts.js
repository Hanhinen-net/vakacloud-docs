const fs = require('fs');
const path = require('path');

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    return {};
  }
  const data = {};
  let key = null;
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^\s*-\s+(.+)$/);
    if (item && key) {
      const list = Array.isArray(data[key]) ? data[key] : [];
      list.push(item[1].trim().replace(/^["']|["']$/g, ''));
      data[key] = list;
      continue;
    }
    const field = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!field) {
      continue;
    }
    key = field[1];
    const value = field[2].trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((part) => part.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else if (value === '') {
      data[key] = [];
    } else {
      data[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return data;
}

function postTime(value) {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(value || '');
  if (!match) {
    return 0;
  }
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function recentPostsPlugin(context) {
  return {
    name: 'recent-posts',
    async loadContent() {
      const {siteDir, i18n} = context;
      const sourceDir = path.join(siteDir, 'blog');
      const translationDir = path.join(
        siteDir,
        'i18n',
        i18n.currentLocale,
        'docusaurus-plugin-content-blog',
      );
      if (!fs.existsSync(sourceDir)) {
        return [];
      }
      const posts = fs
        .readdirSync(sourceDir)
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const translated = path.join(translationDir, file);
          const raw = fs.readFileSync(
            i18n.currentLocale !== i18n.defaultLocale && fs.existsSync(translated)
              ? translated
              : path.join(sourceDir, file),
            'utf8',
          );
          const meta = parseFrontMatter(raw);
          if (!meta.title || meta.draft === 'true' || meta.unlisted === 'true') {
            return null;
          }
          return {
            title: meta.title,
            date: typeof meta.date === 'string' ? meta.date : '',
            tag: Array.isArray(meta.tags) ? meta.tags[0] || '' : '',
            permalink: `/blog/${file.replace(/\.md$/, '')}`,
          };
        })
        .filter(Boolean)
        .sort((a, b) => postTime(b.date) - postTime(a.date));
      return posts.slice(0, 6);
    },
    async contentLoaded({content, actions}) {
      actions.setGlobalData({posts: content});
    },
  };
}

module.exports = recentPostsPlugin;
