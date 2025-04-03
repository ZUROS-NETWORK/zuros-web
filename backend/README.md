```
npm install
npm run dev
```

```
npm run deploy
```



## 📌 Endpoints

### 1️⃣ **Create a Cart**
**`POST /api/cart`**  
Creates a new shopping cart with specified products.

#### 🔹 Request Body (JSON)
```json
{
  "items": [
    { "productId": 489848, "quantity": 2 },
    { "productId": 4898485, "quantity": 1 }
  ]
}
```

Status Code	Description
400	Invalid request data.
404	Product not found.
500	Internal server error.

#### ✅ Successful Response (201)
```json
{
  "message": "Cart created",
  "cartId": "d867f8ab-d5ba-4df6-8a3e-99a28e6288a1"
}
```

---

### 2️⃣ **Get Cart Details**
**`GET /api/cart/:cartid`**  
Retrieves the contents of a specific shopping cart.

#### 🔹 URL Parameters
| Name   | Type   | Required | Description |
|--------|--------|----------|-------------|
| `cartid` | String | ✅ | Unique ID of the shopping cart. |

#### ✅ Successful Response (200)
```json
[
  {
    "product_id": 5193118,
    "quantity": 4,
    "name": "Mysterybox gold X4",
    "short_description": null,
    "base_price": 2,
    "total_price": 2,
    "discount": 0,
    "currency": "USD",
    "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/6102d64f0efe9c77f03c14eafeb72696e95b45b0.png"
  },
  {
    "product_id": 5371550,
    "quantity": 2,
    "name": "Mysterybox iron X4",
    "short_description": null,
    "base_price": 1,
    "total_price": 1,
    "discount": 0,
    "currency": "USD",
    "image": "https://dunb17ur4ymx4.cloudfront.net/packages/images/84c16f6ed9a4d29c667a85ac1971204de769daa1.png"
  }
]
```

| Status Code | Description |
|------------|-------------|
| `400` | Invalid request (bad cart ID). |
| `404` | Cart not found. |

---

### 3️⃣ **Update Cart Items**
**`PUT /api/cart`**  
Updates the quantity of multiple products in the shopping cart.

#### 🔹 Request Body (JSON)
```json
{
  "items": [
    { "productId": 5371550, "quantity": 2 },
    { "productId": 5193118, "quantity": 4 }
  ]
}
```

#### ✅ Successful Response (200)
```json
{
  "cartId": "12345",
  "updatedItems": [
    { "productId": 5371550, "quantity": 2 },
    { "productId": 5193118, "quantity": 4 }
  ]
}
```

| Status Code | Description |
|------------|-------------|
| `200` | Items updated successfully. |
| `400` | Invalid request data. |
| `404` | One or more products not found in the cart. |
| `500` | Internal server error. |

---

