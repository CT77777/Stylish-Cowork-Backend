# STYLiSH-API-Doc

### Host Name

ctceth.com

### API Version

1.0

### Response Object

- `Product Object`

|    Field    |           Type            | Description                                 |
| :---------: | :-----------------------: | :------------------------------------------ |
|     id      |          Number           | Product id.                                 |
|  category   |          String           | Product category                            |
|    title    |          String           | Product title.                              |
| description |          String           | Product description.                        |
|    price    |          Number           | Product price.                              |
|   texture   |          String           | Product texture.                            |
|    wash     |          String           | The way we can wash the product.            |
|    place    |          String           | Place of production.                        |
|    note     |          String           | The note of product.                        |
|    story    |          String           | Product multiline story.                    |
|   colors    |  Array of `Color Object`  | Possible color choices.                     |
|    sizes    |      Array of String      | Possible size choices.                      |
|  variants   | Array of `Variant Object` | Possible variants, including stock records. |
| main_image  |          String           | Main image.                                 |
|   images    |      Array of String      | Other images.                               |

- `Color Object`

| Field |  Type  | Description       |
| :---: | :----: | :---------------- |
| name  | String | Color's name.     |
| code  | String | Color's hex code. |

- `Variant Object`

|   Field    |  Type  | Description     |
| :--------: | :----: | :-------------- |
| color_code | String | Hex Color Code. |
|    size    | String | Size.           |
|   stock    | Number | Stock.          |

- `Campaign Object`

|   Field    |  Type  | Description      |
| :--------: | :----: | :--------------- |
| product_id | Number | Product ID.      |
|  picture   | String | Picture URL.     |
|   story    | String | Multiline story. |

- `Hots Object`

|  Field   |           Type            | Description                   |
| :------: | :-----------------------: | :---------------------------- |
|  title   |          String           | Title of the hots section.    |
| products | Array of `Product Object` | Products in the hots section. |

- `User Object`

|  Field   |  Type  | Description       |
| :------: | :----: | :---------------- |
|    id    | Number | User's id.        |
| provider | String | Service provider. |
|   name   | String | User's name.      |
|  email   | String | User's email.     |
| picture  | String | User's picture.   |

---

### Marketing Campaigns API

- **End Point:** `/marketing/campaigns`

- **Method:** `GET`

- **Request Example:**

  `https://[HOST_NAME]/api/[API_VERSION]/marketing/campaigns`

- **Success Response: 200**

| Field | Type  | Description                 |
| :---: | :---: | :-------------------------- |
| data  | Array | Array of `Campaign Object`. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Marketing Hots API

- **End Point:** `/marketing/hots`

- **Method:** `GET`

- **Request Example:**

  `https://[HOST_NAME]/api/[API_VERSION]/marketing/hots`

- **Success Response: 200**

| Field | Type  | Description             |
| :---: | :---: | :---------------------- |
| data  | Array | Array of `Hots Object`. |

- **Success Response Example:**

```
{
  "data": [
      {
        "title": "冬季新品搶先看",
        "products": [
          {
            "id": 1234,
            "category": "men",
            "title": "厚實毛呢格子外套",
            "description": "高抗寒素材選用，保暖也時尚有型",
            "price": 2200,
            "texture": "棉、聚脂纖維",
            "wash": "手洗（水溫40度",
            "place": "韓國",
            "note": "實品顏色以單品照為主",
            "story": "你絕對不能錯過的超值商品",
            "colors": [
              {
                "code":"334455",
                "name":"深藍"
              },
              {
                "code":"FFFFFF",
                "name":"白色"
              }
            ],
            "sizes": ["S", "M"],
            "variants":[
              {
                "color_code":"334455",
                "size":"S",
                "stock":5
              },
              {
                "color_code":"334455",
                "size":"M",
                "stock":10
              },
              {
                "color_code":"FFFFFF",
                "size":"S",
                "stock":0
              },
              {
                "color_code":"FFFFFF",
                "size":"M",
                "stock":2
              }
            ],
            "main_image":"https://stylish.com/main.jpg",
            "images": [
              "https://stylish.com/0.jpg",
              "https://stylish.com/1.jpg",
              "https://stylish.com/2.jpg"
            ]
          },
          {
            "id": 5678,
            "category": "men",
            "title": "厚實毛呢格子外套",
            "description": "高抗寒素材選用，保暖也時尚有型",
            "price": 2200,
            "texture": "棉、聚脂纖維",
            "wash": "手洗（水溫40度",
            "place": "韓國",
            "note": "實品顏色以單品照為主",
            "story": "你絕對不能錯過的超值商品",
            "colors": [
              {
                "code":"334455",
                "name":"深藍"
              },
              {
                "code":"FFFFFF",
                "name":"白色"
              }
            ],
            "sizes": ["S", "M"],
            "variants":[
              {
                "color_code":"334455",
                "size":"S",
                "stock":5
              },
              {
                "color_code":"334455",
                "size":"M",
                "stock":10
              },
              {
                "color_code":"FFFFFF",
                "size":"S",
                "stock":0
              },
              {
                "color_code":"FFFFFF",
                "size":"M",
                "stock":2
              }
            ],
            "main_image":"https://stylish.com/main.jpg",
            "images": [
              "https://stylish.com/0.jpg",
              "https://stylish.com/1.jpg",
              "https://stylish.com/2.jpg"
            ]
          }
        ]
      },
      {
        "title": "百搭穿搭必敗品",
        "products": [
          {
            "id": 2345,
            "category": "men",
            "title": "厚實毛呢格子外套",
            "description": "高抗寒素材選用，保暖也時尚有型",
            "price": 2200,
            "texture": "棉、聚脂纖維",
            "wash": "手洗（水溫40度",
            "place": "韓國",
            "note": "實品顏色以單品照為主",
            "story": "你絕對不能錯過的超值商品",
            "colors": [
              {
                "code":"334455",
                "name":"深藍"
              }
            ],
            "sizes": ["S", "M", "L"],
            "variants":[
              {
                "color_code":"334455",
                "size":"S",
                "stock":5
              },
              {
                "color_code":"334455",
                "size":"M",
                "stock":10
              },
              {
                "color_code":"334455",
                "size":"L",
                "stock":0
              }
            ],
            "main_image":"https://stylish.com/main.jpg",
            "images": [
              "https://stylish.com/0.jpg",
              "https://stylish.com/1.jpg",
              "https://stylish.com/2.jpg"
            ]
          },
          {
            "id": 6783,
            "category": "men",
            "title": "厚實毛呢格子外套",
            "description": "高抗寒素材選用，保暖也時尚有型",
            "price": 2200,
            "texture": "棉、聚脂纖維",
            "wash": "手洗（水溫40度",
            "place": "韓國",
            "note": "實品顏色以單品照為主",
            "story": "你絕對不能錯過的超值商品",
            "colors": [
              {
                "code":"334455",
                "name":"深藍"
              }
            ],
            "sizes": ["S", "M", "L"],
            "variants":[
              {
                "color_code":"334455",
                "size":"S",
                "stock":5
              },
              {
                "color_code":"334455",
                "size":"M",
                "stock":10
              },
              {
                "color_code":"334455",
                "size":"L",
                "stock":0
              }
            ],
            "main_image":"https://stylish.com/main.jpg",
            "images": [
              "https://stylish.com/0.jpg",
              "https://stylish.com/1.jpg",
              "https://stylish.com/2.jpg"
            ]
          }
        ]
      }
  ]
}
```

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Product List API

- **End Point:**

  `/products/all` for 全部  
  `/products/women` for 女裝  
  `/products/men` for 男裝  
  `/products/accessories` for 配件

- **Method:** `GET`

- **Query Parameters**

|       Field       |  Type  | Description                   |
| :---------------: | :----: | :---------------------------- |
| paging (Optional) | String | Paging for request next page. |

- **Request Example:**

  `https://[HOST_NAME]/api/[API_VERSION]/products/women`  
  `https://[HOST_NAME]/api/[API_VERSION]/products/men?paging=1`

- **Success Response: 200**

|         Field          |  Type  | Description                                                                              |
| :--------------------: | :----: | :--------------------------------------------------------------------------------------- |
|          data          | Array  | Array of `Product Object`.                                                               |
| next_paging (Optional) | Number | Next page number. If there are no more pages, server won't return next_paging parameter. |

- **Success Response Example:**

```
{
  "data": [
    {
      "id": 1234,
      "category": "men",
      "title": "厚實毛呢格子外套",
      "description": "高抗寒素材選用，保暖也時尚有型",
      "price": 2200,
      "texture": "棉、聚脂纖維",
      "wash": "手洗（水溫40度",
      "place": "韓國",
      "note": "實品顏色以單品照為主",
      "story": "你絕對不能錯過的超值商品",
      "colors": [
        {
          "code":"334455",
          "name":"深藍"
        },
        {
          "code":"FFFFFF",
          "name":"白色"
        }
      ],
      "sizes": ["S", "M"],
      "variants":[
        {
          "color_code":"334455",
          "size":"S",
          "stock":5
        },
        {
          "color_code":"334455",
          "size":"M",
          "stock":10
        },
        {
          "color_code":"FFFFFF",
          "size":"S",
          "stock":0
        },
        {
          "color_code":"FFFFFF",
          "size":"M",
          "stock":2
        }
      ],
      "main_image":"https://stylish.com/main.jpg",
      "images": [
        "https://stylish.com/0.jpg",
        "https://stylish.com/1.jpg",
        "https://stylish.com/2.jpg"
      ]
    },
    {
      "id": 5678,
      "category": "men",
      "title": "厚實毛呢格子外套",
      "description": "高抗寒素材選用，保暖也時尚有型",
      "price": 2200,
      "texture": "棉、聚脂纖維",
      "wash": "手洗（水溫40度",
      "place": "韓國",
      "note": "實品顏色以單品照為主",
      "story": "你絕對不能錯過的超值商品",
      "colors": [
        {
          "code":"334455",
          "name":"深藍"
        }
      ],
      "sizes": ["S", "M", "L"],
      "variants":[
        {
          "color_code":"334455",
          "size":"S",
          "stock":5
        },
        {
          "color_code":"334455",
          "size":"M",
          "stock":10
        },
        {
          "color_code":"334455",
          "size":"L",
          "stock":0
        }
      ],
      "main_image":"https://stylish.com/main.jpg",
      "images": [
        "https://stylish.com/0.jpg",
        "https://stylish.com/1.jpg",
        "https://stylish.com/2.jpg"
      ]
    }
  ],
  "next_paging":1
}
```

- **Client Error Response: 400**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Product Search API

- **End Point:** `/products/search`

- **Method:** `GET`

- **Query Parameters**

|       Field       |  Type  | Description                   |
| :---------------: | :----: | :---------------------------- |
|      keyword      | String | Required                      |
| paging (Optional) | String | Paging for request next page. |

- **Request Example:**

  `https://[HOST_NAME]/api/[API_VERSION]/products/search?keyword=洋裝`
  `https://[HOST_NAME]/api/[API_VERSION]/products/search?keyword=洋裝&paging=1`

- **Success Response: 200**

|         Field          |  Type  | Description                                                                              |
| :--------------------: | :----: | :--------------------------------------------------------------------------------------- |
|          data          | Array  | Array of `Product Object`.                                                               |
| next_paging (Optional) | Number | Next page number. If there are no more pages, server won't return next_paging parameter. |

- **Success Response Example:**

```
{
  "data": [
    {
      "id": 201807201824,
      "category": "women",
      "title": "前開衩扭結洋裝",
      "description": "厚薄：薄\r\n彈性：無",
      "price": 799,
      "texture": "棉 100%",
      "wash": "手洗，溫水",
      "place": "中國",
      "note": "實品顏色依單品照為主",
      "story": "O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.",
      "main_image": "https://api.appworks-school.tw/assets/201807201824/main.jpg",
      "images": [
        "https://api.appworks-school.tw/assets/201807201824/0.jpg",
        "https://api.appworks-school.tw/assets/201807201824/1.jpg",
        "https://api.appworks-school.tw/assets/201807201824/0.jpg",
        "https://api.appworks-school.tw/assets/201807201824/1.jpg"
      ],
      "variants": [
        {
          "color_code": "FFFFFF",
          "size": "S",
          "stock": 2
        },
        {
          "color_code": "FFFFFF",
          "size": "M",
          "stock": 1
        },
        {
          "color_code": "FFFFFF",
          "size": "L",
          "stock": 2
        }
      ],
      "colors": [
        {
          "code": "FFFFFF",
          "name": "白色"
        }
      ],
      "sizes": [
        "S",
        "M",
        "L"
      ]
    },
    {
      "id": 201902191210,
      "category": "women",
      "title": "精緻扭結洋裝",
      "description": "厚薄：薄\r\n彈性：無",
      "price": 999,
      "texture": "棉 100%",
      "wash": "手洗",
      "place": "越南",
      "note": "實品顏色依單品照為主",
      "story": "O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.",
      "main_image": "https://api.appworks-school.tw/assets/201902191210/main.jpg",
      "images": [
        "https://api.appworks-school.tw/assets/201902191210/0.jpg",
        "https://api.appworks-school.tw/assets/201902191210/1.jpg",
        "https://api.appworks-school.tw/assets/201902191210/0.jpg",
        "https://api.appworks-school.tw/assets/201902191210/1.jpg"
      ],
      "variants": [
        {
          "color_code": "FFFFFF",
          "size": "S",
          "stock": 0
        },
        {
          "color_code": "FFDDDD",
          "size": "M",
          "stock": 1
        }
      ],
      "colors": [
        {
          "code": "FFFFFF",
          "name": "白色"
        },
        {
          "code": "FFDDDD",
          "name": "粉紅"
        }
      ],
      "sizes": [
        "S",
        "M"
      ]
    }
  ]
}
```

- **Client Error Response: 400**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Product Details API

- **End Point:** `/products/details`

- **Method:** `GET`

- **Query Parameters**

| Field |  Type  | Description          |
| :---: | :----: | :------------------- |
|  id   | Number | Product Id. Required |

- **Request Example:**

  `https://[HOST_NAME]/api/[API_VERSION]/products/details?id=2`

- **Success Response: 200**

| Field |       Type       | Description                 |
| :---: | :--------------: | :-------------------------- |
| data  | `Product Object` | Single Product Information. |

- **Success Response Example:**

```
{
  "data": {
    "id": 1234,
    "category": "men",
    "title": "厚實毛呢格子外套",
    "description": "高抗寒素材選用，保暖也時尚有型",
    "price": 2200,
    "texture": "棉、聚脂纖維",
    "wash": "手洗（水溫40度",
    "place": "韓國",
    "note": "實品顏色以單品照為主",
    "story": "你絕對不能錯過的超值商品",
    "colors": [
      {
        "code":"334455",
        "name":"深藍"
      }
    ],
    "sizes": ["S", "M", "L"],
    "variants":[
      {
        "color_code":"334455",
        "size":"S",
        "stock":5
      },
      {
        "color_code":"334455",
        "size":"M",
        "stock":10
      },
      {
        "color_code":"334455",
        "size":"L",
        "stock":0
      }
    ],
    "main_image":"https://stylish.com/main.jpg",
    "images": [
      "https://stylish.com/0.jpg",
      "https://stylish.com/1.jpg",
      "https://stylish.com/2.jpg"
    ]
  }
}
```

- **Client Error Response: 400**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### User Sign Up API

- **End Point:** `/user/signup`

- **Method:** `POST`

- **Request Headers:**

|    Field     |  Type  |           Description           |
| :----------: | :----: | :-----------------------------: |
| Content-Type | String | Only accept `application/json`. |

- **Request Body**

|  Field   |  Type  | Description |
| :------: | :----: | :---------: |
|   name   | String |  Required   |
|  email   | String |  Required   |
| password | String |  Required   |

- **Request Body Example:**

```
{
  "name":"test",
  "email":"test@test.com",
  "password":"test"
}
```

- **Success Response: 200**

|     Field      |     Type      | Description                           |
| :------------: | :-----------: | :------------------------------------ |
|  access_token  |    String     | Access token from server.             |
| access_expired |    Number     | Access token expired time in seconds. |
|      user      | `User Object` | User information                      |

- **Success Response Example:**

```
{
  "data": {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6joiYXJ0aHVIjoxNjEzNTY3MzA0fQ.6EPCOfBGynidAfpVqlvbHGWHCJ5LZLtKvPaQ",
    "access_expired": 3600,
    "user": {
      "id": 11245642,
      "provider": "facebook",
      "name": "Pei",
      "email": "pei@appworks.tw",
      "picture": "https://schoolvoyage.ga/images/123498.png"
    }
  }
}
```

- **Email Already Exists: 403**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Client Error Response: 400**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### User Sign In API

- **End Point:** `/user/signin`

- **Method:** `POST`

- **Request Headers:**

|    Field     |  Type  |           Description           |
| :----------: | :----: | :-----------------------------: |
| Content-Type | String | Only accept `application/json`. |

- **Request Body**

|    Field     |  Type  |                            Description                             |
| :----------: | :----: | :----------------------------------------------------------------: |
|   provider   | String |                 Only accept `native` or `facebook`                 |
|    email     | String |                Required if provider set to `native`                |
|   password   | String |                Required if provider set to `native`                |
| access_token | String | Access token from facebook. Required if provider set to `facebook` |

- **Request Body Example:**

```
{
  "provider":"native",
  "email":"test@test.com",
  "password":"test"
}
```

or

```
{
  "provider":"facebook",
  "access_token": "EAACEdEose0cBAHc6hv9kK8bMNs4XTrT0kVC1RgDZCVBptXW12AI"
}
```

- **Success Response: 200**

|     Field      |     Type      | Description                           |
| :------------: | :-----------: | :------------------------------------ |
|  access_token  |    String     | Access token from server.             |
| access_expired |    Number     | Access token expired time in seconds. |
|      user      | `User Object` | User information                      |

- **Success Response Example:**

```
{
  "data": {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6joiYXJ0aHVIjoxNjEzNTY3MzA0fQ.6EPCOfBGynidAfpVqlvbHGWHCJ5LZLtKvPaQ",
    "access_expired": 3600,
    "user": {
      "id": 11245642,
      "provider": "facebook",
      "name": "Pei",
      "email": "pei@appworks.tw",
      "picture": "https://schoolvoyage.ga/images/123498.png"
    }
  }
}
```

- **Sign In Failed: 403**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Client Error Response: 400**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### User Profile API

> Authorization

- **End Point:** `/user/profile`

- **Method:** `GET`

- **Request Headers:**

|     Field     |  Type  |                                   Description                                    |
| :-----------: | :----: | :------------------------------------------------------------------------------: |
| Authorization | String | Access token preceding `Bearer `. For example: `Bearer x48aDD534da8ADSD1XC4SD5S` |

- **Success Response: 200**

| Field |     Type      | Description |
| :---: | :-----------: | :---------- |
| data  | `User Object` | User info.  |

- **Success Response Example:**

```
{
  "data": {
    "provider": "facebook",
    "name": "Pei",
    "email": "pei@appworks.tw",
    "picture": "https://schoolvoyage.ga/images/123498.png"
  }
}
```

- **Client Error (No token) Response: 401**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Client Error (Wrong token) Response: 403**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Order Check Out API

- **End Point:** `/order/checkout`

- **Method:** `POST`

- **Request Headers:**

|     Field     |  Type  |                                    Description                                    |
| :-----------: | :----: | :-------------------------------------------------------------------------------: |
| Content-Type  | String |                          Only accept `application/json`.                          |
| Authorization | String | Access token preceding `Bearer `. For example: `Bearer x48aDD534da8ADSD1XC4SD5S`. |

- **Request Body**

  Check Out Details.

- **Request Body Example:**

**Definition**

```
{
  "prime": [Prime Key from TapPay],
  "order": {
    "shipping": "delivery",
    "payment": "credit_card",
    "subtotal": [Price excluded Freight Fee],
    "freight": [Freight Fee],
    "total": [Final Price],
    "recipient": {
      "name": [Name],
      "phone": [Phone],
      "email": [Email],
      "address": [Post Address],
      "time": "morning"|"afternoon"|"anytime"
    },
    "list": [
      {
        "id": [Product ID],
        "name": [Product Name],
        "price": [Product Unit Price],
        "color": {
          "name": [Product Variant Color Name],
          "code": [Product Variant Color HexCode]
        },
        "size": [Product Variant Size],
        "qty": [Quantity]
      },
      ...
    ]
  }
}
```

**Example**

```
{
  "prime": "ccc1491581661f700bcc1cafec673c741f0665ca77550fe828ef38ee1437a2b8",
  "order": {
    "shipping": "delivery",
    "payment": "credit_card",
    "subtotal": 1234,
    "freight": 14,
    "total": 1300,
    "recipient": {
      "name": "Luke",
      "phone": "0987654321",
      "email": "luke@gmail.com",
      "address": "市政府站",
      "time": "morning"
    },
    "list": [
      {
        "id": "201807202157",
        "name": "活力花紋長筒牛仔褲",
        "price": 1299,
        "color": {
        	"code": "DDF0FF",
            "name": "淺藍"
        },
        "size": "M",
        "qty": 1
      }
    ]
  }
}
```

- **Success Response: 200**

| Field |      Type      | Description   |
| :---: | :------------: | :------------ |
| data  | `Order Object` | Order number. |

- **Success Response Example:**

```
{
  "data": {
    "number":"4465123465"
  }
}
```

- **Client Error (No token) Response: 401**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Client Error (Wrong token) Response: 403**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Chat Room Histories API

- **End Point:** `/chatroom/history`

- **Method:** `GET`

- **Request Headers:**

|     Field     |  Type  |                                    Description                                    |
| :-----------: | :----: | :-------------------------------------------------------------------------------: |
| Content-Type  | String |                          Only accept `application/json`.                          |
| Authorization | String | Access token preceding `Bearer `. For example: `Bearer x48aDD534da8ADSD1XC4SD5S`. |

- **Request Body**

  |  Field  | Type |                          Description                           |
  | :-----: | :--: | :------------------------------------------------------------: |
  | user_id | Int  | If Header token belongs to admin, requires an user_id in body. |

- **Request Example:**
  `https://[HOST_NAME]/api/[API_VERSION]/chatroom/history`

- **Success Response: 200**

| Field |             Type             | Description                     |
| :---: | :--------------------------: | :------------------------------ |
| data  | `Chat Room Histories Object` | Chat Room Histories Information |

- **Success Response Example:**

```
 [
    {
      "message": "想問褲子什麼時候會有貨",
      "sender_id": 30,
      "time_stamp": 20230604012231,
      "name": "Dan",
      "picture": "https://publicdomainvectors.org/photos/abstract-user-flat-1.png"
    },
    {
      "message": "下個月會進貨",
      "sender_id": 24,
      "time_stamp": 20230604012610,
      "name": "admin",
      "picture": "https://publicdomainvectors.org/photos/abstract-user-flat-1.png"
    },
    {
      "message": "What can I help you?",
      "sender_id": 0,
      "time_stamp": "2023-05-31 22:10:31",
      "chat_room_id": 13
      "name": "Beth",
      "picture": "https://publicdomainvectors.org/photos/abstract-user-flat-1.png"
    }
  ]
```

- **Client Error (No token) Response: 401**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Client Error (Wrong token) Response: 403**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

---

### Admin Chat Rooms API

- **End Point:** `/admin/chat_rooms`

- **Method:** `GET`

- **Request Headers:**

|     Field     |  Type  |                                    Description                                    |
| :-----------: | :----: | :-------------------------------------------------------------------------------: |
| Content-Type  | String |                          Only accept `application/json`.                          |
| Authorization | String | Access token preceding `Bearer `. For example: `Bearer x48aDD534da8ADSD1XC4SD5S`. |

- **Request Example:**
  `https://[HOST_NAME]/api/[API_VERSION]/admin/chat_rooms`

- **Success Response: 200**

| Field |        Type         | Description       |
| :---: | :-----------------: | :---------------- |
| data  | `Chat Rooms Object` | Latest Chat Rooms |

- **Success Response Example:**

```
 [
    {
      "message": "Hi 我是Ken",
      "time_stamp": 20230605143559,
      "sender_id": 36,
      "chat_room_id": 36,
      "picture": "https://publicdomainvectors.org/photos/abstract-user-flat-1.png",
      "name": "Ken"
    },
    {
      "message": "下個月會進貨",
      "time_stamp": 20230604012610,
      "sender_id": 24,
      "chat_room_id": 30,
      "picture": "https://publicdomainvectors.org/photos/abstract-user-flat-1.png",
      "name": "admin"
    }
]
```

- **Client Error (No token) Response: 401**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Client Error (Wrong token) Response: 403**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |

- **Server Error Response: 500**

| Field |  Type  | Description    |
| :---: | :----: | :------------- |
| error | String | Error message. |
