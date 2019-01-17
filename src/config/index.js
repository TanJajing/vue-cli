export const MENU_PERMISSIONS = [
  {
    'menuId': 1,
    'url': '/home',
    'name': '首页',
    'isShow': false
  },
  {
    'menuId': 2,
    'url': '/home1',
    'name': '数据分析',
    'isShow': false,
    'children': [
      {
        'menuId': 3,
        'parentId': 2,
        'name': '活跃度分析'
      },
      {
        'menuId': 4,
        'parentId': 2,
        'name': '留存流失分析'
      }
    ]
  },
  {
    'menuId': 5,
    'name': '任务管理',
    'isShow': false,
    'url': '/home2',
    'children': [
      {
        'menuId': 6,
        'parentId': 5,
        'name': '任务查询'
      },
      {
        'menuId': 7,
        'parentId': 5,
        'name': '我的申请'
      },
      {
        'menuId': 8,
        'parentId': 5,
        'name': '我的待办'
      }
    ]
  },
  {
    'menuId': 9,
    'name': '系统配置',
    'isShow': false,
    'url': '/home3',
    'children': [
      {
        'menuId': 10,
        'parentId': 9,
        'name': '角色管理'
      },
      {
        'menuId': 11,
        'parentId': 9,
        'name': '用户管理'
      }
    ]
  }
];
