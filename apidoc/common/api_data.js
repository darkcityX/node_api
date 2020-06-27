define({ "api": [
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
