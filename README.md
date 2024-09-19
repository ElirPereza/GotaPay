# Gota App

**Gota App** is a web application for managing informal loans. It allows users to create, update, fetch, and delete client records using a RESTful API built with Next.js, Prisma, and Supabase.

![Texto alternativo](images/panel.initial.png)


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

### **Project Structure**

- **`src/app/api/client`**: Contains routes for managing clients.
  - **`route.ts`**: Handles `GET` (fetch all clients) and `POST` (create client) requests.
  - **`[id]/route.ts`**: Handles `GET` (fetch by ID), `PUT` (update by ID), and `DELETE` (delete by ID) requests.

### **Contributing**

Please follow the commit message guidelines:

- `feat`: Adding new features
- `bug`: Fixing bugs
- `ref`: Refactoring code

### **License**

This project is licensed under the MIT License.
