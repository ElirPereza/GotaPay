# Gota App

**Gota App** is a web application for managing informal loans. It allows users to create, update, fetch, and delete client records using a RESTful API built with Next.js, Prisma, and Supabase.

## **Getting Started**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Bun](https://bun.sh/) (for running the project)
- [Supabase](https://supabase.com/) (for the PostgreSQL database)

### **Installation**

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd gota-app
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

    ```plaintext
    DATABASE_URL="your_database_url"
    DIRECT_URL="your_direct_url"
    ```

4. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:
    ```bash
    bun dev
    ```

### **API Endpoints**

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| GET    | `/api/client`          | Fetch all clients                   |
| GET    | `/api/client/[id]`     | Fetch a client by ID                |
| POST   | `/api/client`          | Create a new client                 |
| PUT    | `/api/client/[id]`     | Update a client by ID               |
| DELETE | `/api/client/[id]`     | Delete a client by ID               |
| GET    | `/api/loan`            | Fetch all loans                     |
| GET    | `/api/loan/[id]`       | Fetch a loan by ID                  |
| POST   | `/api/loan`            | Create a new loan                   |
| PUT    | `/api/loan/[id]`       | Update a loan by ID                 |
| DELETE | `/api/loan/[id]`       | Delete a loan by ID                 |
| GET    | `/api/payment`         | Fetch all payments                  |
| GET    | `/api/payment/[id]`    | Fetch a payment by ID               |
| POST   | `/api/payment`         | Create a new payment                |
| PUT    | `/api/payment/[id]`    | Update a payment by ID              |
| DELETE | `/api/payment/[id]`    | Delete a payment by ID              |
| GET    | `/api/subscription`    | Fetch all subscriptions             |
| GET    | `/api/subscription/[id]` | Fetch a subscription by ID         |
| POST   | `/api/subscription`    | Create a new subscription           |
| PUT    | `/api/subscription/[id]` | Update a subscription by ID        |
| DELETE | `/api/subscription/[id]` | Delete a subscription by ID         |

### **Project Structure**

- **`src/app/api/client`**: Contains routes for managing clients.
  - **`route.ts`**: Handles `GET` (fetch all clients) and `POST` (create client) requests.
  - **`[id]/route.ts`**: Handles `GET` (fetch by ID), `PUT` (update by ID), and `DELETE` (delete by ID) requests.
  
- **`src/app/api/loan`**: Contains routes for managing loans.
  - **`route.ts`**: Handles `GET` (fetch all loans) and `POST` (create loan) requests.
  - **`[id]/route.ts`**: Handles `GET` (fetch by ID), `PUT` (update by ID), and `DELETE` (delete by ID) requests.

- **`src/app/api/payment`**: Contains routes for managing payments.
  - **`route.ts`**: Handles `GET` (fetch all payments) and `POST` (create payment) requests.
  - **`[id]/route.ts`**: Handles `GET` (fetch by ID), `PUT` (update by ID), and `DELETE` (delete by ID) requests.

- **`src/app/api/subscription`**: Contains routes for managing subscriptions.
  - **`route.ts`**: Handles `GET` (fetch all subscriptions) and `POST` (create subscription) requests.
  - **`[id]/route.ts`**: Handles `GET` (fetch by ID), `PUT` (update by ID), and `DELETE` (delete by ID) requests.

### **Contributing**

Please follow the commit message guidelines:

- `feat`: Adding new features
- `bug`: Fixing bugs
- `ref`: Refactoring code

### **License**

This project is licensed under the MIT License.
