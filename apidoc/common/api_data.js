define({ "api": [
  {
    "type": "post",
    "url": "/common/upload/singlePic",
    "title": "上传单张图片",
    "name": "上传单张图片",
    "group": "上传",
    "header": {
      "examples": [
        {
          "title": "Request: {",
          "content": "Request: {\n    \"Content-type\": \"multipart/form-data;\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>1.上传文件字段名必须按照指定数据传输格式设置。 2.上传文件字段名必须按照指定key进行定义</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singlePic",
            "description": "<p>上传的文件字段名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "data.imgUrl",
            "description": "<p>上传的当前图片的图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n          code: \"200\",\n          msg: \"上传成功！\",\n          data: {\n              imgUrl: imgUrl\n          }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/common_routers/upload/index.js",
    "groupTitle": "上传"
  },
  {
    "type": "post",
    "url": "/common/upload/detailsPic",
    "title": "上传多张图片(最多12张)",
    "name": "上传多张图片(<12)",
    "group": "上传",
    "header": {
      "examples": [
        {
          "title": "Request: {",
          "content": "Request: {\n    \"Content-type\": \"multipart/form-data;\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>1.上传文件字段名必须按照指定数据传输格式设置。 2.上传文件字段名必须按照指定key进行定义</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detailsPic",
            "description": "<p>上传的文件字段名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "data.imgUrls",
            "description": "<p>上传的当前图片的图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n          code: \"200\",\n          msg: \"上传成功！\",\n          data: {\n             imgUrls: [\n                 \"/public/images/1593596701076.jpg\",\n                 \"/public/images/1593596703887.jpg\",\n                 \"/public/images/1593596706313.jpg\"\n             ]\n          }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/common_routers/upload/index.js",
    "groupTitle": "上传"
  },
  {
    "type": "post",
    "url": "/common/upload/showPic",
    "title": "上传多张图片(最多4张)",
    "name": "上传多张图片(<4)",
    "group": "上传",
    "header": {
      "examples": [
        {
          "title": "Request: {",
          "content": "Request: {\n    \"Content-type\": \"multipart/form-data;\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>1.上传文件字段名必须按照指定数据传输格式设置。 2.上传文件字段名必须按照指定key进行定义</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "showPic",
            "description": "<p>上传的文件字段名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "data.imgUrls",
            "description": "<p>上传的当前图片的图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n          code: \"200\",\n          msg: \"上传成功！\",\n          data: {\n             imgUrls: [\n                 \"/public/images/1593596701076.jpg\",\n                 \"/public/images/1593596703887.jpg\",\n                 \"/public/images/1593596706313.jpg\"\n             ]\n          }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/common_routers/upload/index.js",
    "groupTitle": "上传"
  },
  {
    "type": "get",
    "url": "/common/email/getCode",
    "title": "获取邮箱验证码",
    "name": "获取邮箱验证码",
    "group": "邮箱",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     code: 200,\n     msg: '验证码发送成功'\n}",
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
            "description": "<p>缺少邮箱.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "402",
            "description": "<p>邮箱地址不正确.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>邮件发送失败(地址不正确|网络波动等)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        code: 401,\n        msg: '缺少邮箱'\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 402,\n        \"msg\": \"邮箱格式错误\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"code\": 405,\n        \"msg\": \"发送失败！原因：Error: No recipients defined\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/common_routers/email/index.js",
    "groupTitle": "邮箱"
  }
] });
