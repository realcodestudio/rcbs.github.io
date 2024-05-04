import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "叶桃防灾",
  description: "一个非盈利性质的民间防灾减灾爱好者以及自然观测爱好者共同组成的团队。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'./media/lpdp_logo.png',
    siteTitle: false,


    nav: [
      { text: '主页面', link: '/' },
      { text: '软件介绍', link: '/apps' },
      { text: 'API文档', link: '/apis' },
      { text: '声明与须知', link: '/statements' },
      { text: '鸣谢名单', link: '/cosponsors' },
      { text: '助力我们', link: '/donate' },
    ],

    sidebar: [
      {
        text: '叶桃防灾文档',
        items: [
          { text: '软件介绍', link: '/apps' },
          { text: 'API文档', link: '/apis' },
          { text: '声明与须知', link: '/statements' },
          { text: '鸣谢名单', link: '/cosponsors' },
          { text: '助力我们', link: '/donate' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Leafpeach-Disaster-Prevention' },

      {
        icon: {
            svg:'<svg t="1714715675008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4263" width="200" height="200"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 1 1 60.373333 60.373333l-78.037333 77.952L789.333333 256A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.813334L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="4264" fill="#515151"></path></svg>'
        },
        link: 'https://space.bilibili.com/1297775055' },
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">蒙ICP备2023003358号</a>',
      copyright: 'Copyright © 2024 叶桃防灾',
      }

  }
})
