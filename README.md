# Number Classification API

## Project Description

This API classifies a given number based on its mathematical properties and provides a fun fact about it. The API returns whether a number is:

- **Prime**
- **Perfect**
- **Armstrong**
- **Odd or Even**
- **Digit Sum**
- **A fun fact** about the number (fetched from [Numbers API](http://numbersapi.com))

## Technology Stack

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **Yarn** (Package manager)
- **CORS** (Middleware to handle cross-origin requests)
- **Axios** (For fetching fun facts)

## API Endpoint

### **GET /api/classify-number**

This endpoint classifies a number and returns its mathematical properties.

**Example Request:**

```curl
GET /api/classify-number?number=371
```

### **Response Format**

#### ✅ **200 OK**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### ❌ **400 Bad Request**

```json
{
  "number": "<number>",
  "error": true
}
```

### **Error Handling**

- **Invalid Inputs (`hello`, `32abc`, etc.)** → Returns `{ "number": "<input>", "error": true }`
- **Missing `number` query (`/api/classify-number`)** → Returns `{ "error": true }`
- **Empty Parameter (`?number=`)** → Returns `{ "number": "", "error": true }`

---

## Setup Instructions

### **1. Clone the Repository**

```sh
git clone https://github.com/AdeGneus/number-classification-api.git
cd number-classification-api
```

### **2. Install Dependencies**

```sh
yarn install
```

### **3. Run the API Locally**

#### **Development Mode (with Auto-restart)**

```sh
yarn dev
```

This runs the API using **Node.js built-in watch mode** (`node --watch index.js`), which automatically restarts on file changes.

#### **Production Mode**

```sh
yarn start
```

## Deployment

This API is deployed and accessible at:

```sh
https://number-classification-api-nine.vercel.app/
```

## License

This project is licensed under the ISC License.
