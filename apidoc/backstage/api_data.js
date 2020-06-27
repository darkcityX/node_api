define({ "api": [
  {
    "type": "get",
    "url": "/backstage/user/ceshi",
    "title": "后台测试接口",
    "name": "测试api",
    "group": "测试",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>请求状态码200|400</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"msg\": \"后台接口：----用户模块测试 ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/user_router/index.js",
    "groupTitle": "测试"
  },
  {
    "type": "post",
    "url": "/backstage/user/login",
    "title": "登陆",
    "name": "登陆接口",
    "group": "用户模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登陆密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>请求状态码200|400</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.aid",
            "description": "<p>唯一编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": "<p>账号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nickName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Avatar",
            "description": "<p>头像url地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>email地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.cTime",
            "description": "<p>用户创建时间【毫秒级时间戳】</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.uTime",
            "description": "<p>用户信息更新时间【毫秒级时间戳】</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": 200,\n     \"msg\": \"登陆成功!\",\n     \"data\": {\n         \"aid\": 1,\n         \"username\": \"admin\",\n         \"nickName\": \"yumi\",\n         \"sex\": 0,\n         \"Avatar\": \"http://img4.imgtn.bdimg.com/it/u=2573110154,1217222222&fm=26&gp=0.jpg\",\n         \"email\": \"838667990@qq.com\",\n         \"phone\": \"1569335687\",\n         \"cTime\": \"1593229848074\",\n         \"uTime\": \"null\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>缺少用户名.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p>缺少密码.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>用户名或密码错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>后台服务内部错误.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     code: 401,\n     msg: '缺少用户名'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     code: 402,\n     msg: '缺少密码'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     code: 403,\n     msg: '用户名或密码错误'\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     code: 405,\n     msg: '后台服务内部错误'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/user_router/index.js",
    "groupTitle": "用户模块"
  }
] });
