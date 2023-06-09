const customapi = process.env.API_KEY;
window.Config = {

  // 显示标题
  SiteName: 'Public Status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    customapi,
  ],

  // 日志天数
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: false,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://status.feegr.cc/'
    },
  ],
};
