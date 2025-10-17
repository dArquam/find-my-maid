## to create entities or DB connection
npm install --save @nestjs/typeorm typeorm

## to create validation
npm install --save class-validator class-transformer

## to set dynamically configuration file
npm i --save @nestjs/config  

## to connect mongoDB
npm install mongodb

## cross-env lets you set environment variables in your package.json scripts in a cross-platform way
npm install --save-dev cross-env

{
  "scripts": {
    "start:dev": "cross-env NODE_ENV=development nest start --watch",
    "start:prod": "cross-env NODE_ENV=production nest start",
    "start:test": "cross-env NODE_ENV=test nest start"
  }
}

#####
Flow of Nest
Request
Middlewares (Cookie Session Middleware)
Guards
Interceptor --- working on request
RequestHandler
Interceptor --- working on response
Response

| Order | Component                 | Description                              |
| ----- | ------------------------- | ---------------------------------------- |
| 1     | **Middleware**            | Pre-route global logic                   |
| 2     | **Guards**                | Authorization & access control           |
| 3     | **Interceptors (Before)** | Request transformation or logging        |
| 4     | **Pipes**                 | Validation & data transformation         |
| 5     | **Controller / Service**  | Business logic                           |
| 6     | **Interceptors (After)**  | Response transformation                  |
| 7     | **Exception Filters**     | Handle thrown errors gracefully          |
| ⚙️    | **Decorators**            | Define metadata, not executed at runtime |

┌──────────────────────────────────────────────┐
│                Decorators                    │
│ (Run at application startup, register meta)  │
└──────────────────────────────────────────────┘
                           │
                           ▼
Incoming Request
  │
  ├─► 1. Middleware
  ├─► 2. Guards
  ├─► 3. Interceptors (before)
  ├─► 4. Pipes
  ├─► 5. Controller / Service
  ├─► 6. Interceptors (after)
  └─► 7. Exception Filters (if error)
Response Sent


#### JWT
🧠 JWT = JSON Web Token
JWT is used for stateless authentication — no session stored on the server.
When a user logs in:
You verify credentials (email + password)
You sign a JWT with user data (userId, role, etc.)
The client stores it (usually in localStorage or cookies)
For every request, the client sends the token in the Authorization header
The server verifies it with a secret key and extracts user info.




