

# HNG Stage 1 Task 🚀

## 📌 Description
This is a simple project built for HNG Stage 1.

--- 

## 🛠️ Project Setup
To install dependencies, run:

```bash
pnpm install
```

---

## 🚀 Running the Project

### Development Mode
```bash
pnpm run start:dev
```

### Production Mode
```bash
pnpm run start:prod
```

---

## 🌐 API Endpoints & Responses

### ✅ Health Check
**Endpoint:**
```http
GET https://hng-stage-1-dbcq.onrender.com

```
**Response:**
```json
{
 "message":"Welcome to the Number Classification API! Use /api/classify-number?number=<your_number> to classify a number.",
}
```

### 👤 Number Information
**Endpoint:**
```http
GET https://hng-stage-1-dbcq.onrender.com/api/classify-number?number=371
```
**Response:**
```json
{
 "number":371,
 "is_prime":false,
 "is_perfect":false,
 "properties":["armstrong","odd"],
 "digit_sum":11,
 "fun_fact":"371 is a boring number."
}
```

---

## 🔗 Hire Developers
Looking for talented developers? Check out these hiring pages:


- 🔥 [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

🎯 **Follow the project on GitHub:** [masterchief-Dave/hng-12-stage-1](https://github.com/masterchief-Dave/hng-stage-next) 🚀

