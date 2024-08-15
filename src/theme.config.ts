export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "懒 狗",
  /** your name */
  author: "Lan gou",
  /** website description */
  desc: "爱财爱己，搞钱要紧",
  /** your deployed domain */
  website: "https://blog.555997.xyz",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/langou233",
    },
    {
      name: "rss",
      href: "/atom.xml",
    }
    // {
    //   name: "twitter",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // },
    // {
    //   name: "mastodon",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // }
  ],
  /** your header info */
  header: {
    // twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    // { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    // disqus: {
    //   // please change this to your disqus shortname
    //   shortname: "langou",
    // },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    twikoo: {
      envId: "https://langou233-twikoo.hf.space",
    }
  }
}

