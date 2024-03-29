define({ "api": [
  {
    "type": "get",
    "url": "/backstage/product/delete",
    "title": "删除商品",
    "name": "删除商品",
    "group": "商品模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>商品id  【必填】</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/product_router/index.js",
    "groupTitle": "商品模块"
  },
  {
    "type": "get",
    "url": "/backstage/product/checkName",
    "title": "商品重名校验",
    "name": "商品重名校验",
    "group": "商品模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称  【必填】</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/product_router/index.js",
    "groupTitle": "商品模块"
  },
  {
    "type": "post",
    "url": "/backstage/product/add",
    "title": "添加商品",
    "name": "添加商品",
    "group": "商品模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fid",
            "description": "<p>一级商品分类编号  【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fistTypeName",
            "description": "<p>一级商品分类名称  【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sid",
            "description": "<p>二级商品分类编号  【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secondTypeName",
            "description": "<p>二级商品分类名称  【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称          【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>商品副标题        【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>商品描述          【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>商品价格          【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specification",
            "description": "<p>商品规格          【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stock",
            "description": "<p>商品库存          【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "label",
            "description": "<p>商品标签          【不必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "smallPic",
            "description": "<p>商品缩略图        【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "proImgUrl",
            "description": "<p>商品展示图        【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isOnline",
            "description": "<p>是否上架          【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "proDetilsImg",
            "description": "<p>商品详情图        【必填】</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    fid: \"100\",\n    fistTypeName: \"服装配饰\",\n    sid: \"101\",\n    secondTypeName: \"男装\",\n    name: \"大话西游2长袖卫衣 - 几率 - 03\"\n    subtitle: \"很好很好！ 非常好\"\n    description: \"大话玩家专属文化222222222\"\n    price: \"169.00\"\n    specification: '[\"M\"]'\n    stock: \"100\"\n    smallPic: '[\"https://g.fp.ps.netease.com/gift/file/5a1ba75a7f9d2a0cbdb62fc9iPBKVFqK\"]'\n    proImgUrl: '[\"https://g.fp.ps.netease.com/gift/file/5a1ba75a7f9d2a0cbdb62fc9iPBKVFqK\", \"https://g.fp.ps.netease.com/gift/file/5a1ba75c8b74276eebe5c43ajEA2LJsu\", \"https://g.fp.ps.netease.com/gift/file/5a1ba7615e6027abdf29687eFqM1oXap\", \"https://g.fp.ps.netease.com/gift/file/5a1ba764143cfa4ec4b7f1c2tZabfF0r\"]'\n    isOnline: 0\n    proDetilsImg: '[\"https://g.fp.ps.netease.com/gift/file/5a1ba774a7f25264ec3918c4iir0O12C\"]'\n}",
          "type": "json"
        }
      ]
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     code: \"200\",\n     msg: \"商品添加成功！\"\n }",
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
            "description": "<p>缺少参数.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p>参数值错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>后台服务内部错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "406",
            "description": "<p>数据参数对照错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "407",
            "description": "<p>商品重名.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"401\",\n     \"msg\": \"缺少参数：一级商品分类编号\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"402\",\n     \"msg\": \"值错误：库存最小为1，最大为999\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"405\",\n     \"msg\": \"内部错误！原因：Error: ER_NO_SUCH_TABLE: Table 'dahuamall.productdetail' doesn't exist\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"406\",\n     \"msg\": \"数据异常：当前一级分类不存在！原因：一级分类id或一级分类名称错误！\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"407\",\n     \"msg\": \"当前商品名称已存在！\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/product_router/index.js",
    "groupTitle": "商品模块"
  },
  {
    "type": "get",
    "url": "/backstage/product/getFirstClass",
    "title": "获取商品一级分类",
    "name": "获取商品一级分类",
    "group": "商品模块",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>请求状态码200</p>"
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
            "description": "<p>响应数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.list",
            "description": "<p>一级分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": \"200\",\n      \"msg\": \"查询成功\",\n      \"data\": {\n          \"list\": [{\n                  \"fid\": 100,\n                  \"typeName\": \"服装配饰\",\n                  \"label\": null\n              },\n              {\n                  \"fid\": 200,\n                  \"typeName\": \"家居用品\",\n                  \"label\": null\n              },\n              {\n                  \"fid\": 300,\n                  \"typeName\": \"珠宝首饰\",\n                  \"label\": null\n              },\n              {\n                  \"fid\": 400,\n                  \"typeName\": \"户外出行\",\n                  \"label\": null\n              },\n              {\n                  \"fid\": 500,\n                  \"typeName\": \"数码外设\",\n                  \"label\": null\n              },\n              {\n                  \"fid\": 600,\n                  \"typeName\": \"玩具礼品\",\n                  \"label\": null\n              }\n          ]\n      }\n  }",
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
            "field": "405",
            "description": "<p>后台服务内部错误.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"405\",\n     \"msg\": \"内部错误！原因：Error: ER_NO_SUCH_TABLE: Table 'dahuamall.productdetail' doesn't exist\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/product_router/index.js",
    "groupTitle": "商品模块"
  },
  {
    "type": "get",
    "url": "/backstage/product/getSecondClass",
    "title": "获取商品二级分类",
    "name": "获取商品二级分类",
    "group": "商品模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fid",
            "description": "<p>一级分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "typeName",
            "description": "<p>一级分类名称</p>"
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
            "description": "<p>请求状态码200</p>"
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
            "description": "<p>响应数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.list",
            "description": "<p>二级分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": \"200\",\n      \"msg\": \"查询成功\",\n      \"data\": {\n          \"list\": [{\n                  \"sid\": 101,\n                  \"fid\": 100,\n                  \"fistTypeName\": \"服装配饰\",\n                  \"typeName\": \"男装\",\n                  \"label\": null\n              },\n              {\n                  \"sid\": 102,\n                  \"fid\": 100,\n                  \"fistTypeName\": \"服装配饰\",\n                  \"typeName\": \"女装\",\n                  \"label\": null\n              },\n              {\n                  \"sid\": 103,\n                  \"fid\": 100,\n                  \"fistTypeName\": \"服装配饰\",\n                  \"typeName\": \"童装\",\n                  \"label\": null\n              },\n              {\n                  \"sid\": 104,\n                  \"fid\": 100,\n                  \"fistTypeName\": \"服装配饰\",\n                  \"typeName\": \"内衣配饰\",\n                  \"label\": null\n             }\n          ]\n      }\n  }",
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
            "field": "405",
            "description": "<p>后台服务内部错误.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"405\",\n     \"msg\": \"内部错误！原因：Error: ER_NO_SUCH_TABLE: Table 'dahuamall.productdetail' doesn't exist\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/product_router/index.js",
    "groupTitle": "商品模块"
  },
  {
    "type": "get",
    "url": "/backstage/product/getList",
    "title": "获取商品列表",
    "name": "获取商品列表",
    "group": "商品模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "pid",
            "description": "<p>商品id(根据ip筛选数据，不支持模糊查询)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tableState",
            "description": "<p>页码相关数据(不传则返回数据不带页码)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tableState.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tableState.pageSize",
            "description": "<p>当前页显示条数</p>"
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
            "description": "<p>响应数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.currentPage",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.pageSize",
            "description": "<p>当前页显示数量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.total",
            "description": "<p>数据总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": 200,\n     \"msg\": \"查询成功\",\n     \"data\": {\n         \"currentPage\": \"1\",\n         \"pageSize\": \"10\",\n         \"size\": 8,\n         \"list\": [{\n             \"pid\": \"5c8f5fa1-c085-4e9c-99c4-c4fbaffd2dd9\",\n             \"fid\": 100,\n             \"fistTypeName\": \"服装配饰\",\n             \"sid\": 101,\n             \"secondTypeName\": \"男装\",\n             \"name\": \"大话西游2长袖卫衣-几率-03\",\n             \"subtitle\": \"很好很好！非常好\",\n             \"description\": \"大话玩家专属文化222222222\",\n             \"price\": \"169.00\",\n             \"specification\": \"[\\\"M\\\"]\",\n             \"stock\": 100,\n             \"label\": \"\",\n             \"smallPic\": \"[\\\"https://g.fp.ps.netease.com/gift/file/5a1ba75a7f9d2a0cbdb62fc9iPBKVFqK\\\"]\",\n             \"proImgUrl\": \"[\\\"https://g.fp.ps.netease.com/gift/file/5a1ba75a7f9d2a0cbdb62fc9iPBKVFqK\\\",\\\"https://g.fp.ps.netease.c\",\n             \"isOnline\": 0,\n             \"proDetilsImg\": \"[\\\"https://g.fp.ps.netease.com/gift/file/5a1ba774a7f25264ec3918c4iir0O12C\\\"]\",\n             \"creatTime\": \"1593396777431\",\n             \"updateTime\": null\n         }]\n     }\n }",
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
            "field": "405",
            "description": "<p>后台服务内部错误.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"code\": \"405\",\n     \"msg\": \"登陆失败！原因：Error: ER_NO_SUCH_TABLE: Table 'dahuamall.productdetail' doesn't exist\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/backstage_routers/product_router/index.js",
    "groupTitle": "商品模块"
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
