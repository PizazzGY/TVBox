var rule = {
     title: '喵物次元',
     host: 'https://catw.moe',
     模板:'短视2',
     searchUrl: '/index.php/vod/search/wd/**.html',
     url:'index.php/vod/show/id/fyclass/page/fypage.html',
     searchable: 2,//是否启用全局搜索,
     quickSearch: 1,//是否启用快速搜索,
     filterable: 0,//是否启用分类筛选,
     headers: {
       'User-Agent': 'MOBILE_UA'
     },
     play_parse: true,
     lazy: '',
     limit: 6,
     tab_rename:{'喵物次元':'LR',},
     class_name:'TV动画&剧场版&特摄剧',
     class_url:'1&2&20',
     double: false, // 推荐内容是否双层定位
     推荐: '*',
     一级: '.public-list-exp;a&&title;img&&data-src;.ft2&&Text;a&&href',
     搜索: '.public-list-box;.thumb-txt&&Text;.public-list-exp&&img&&data-src;.public-list-prb&&Text;a&&href'
    }
