import { NextResponse } from "next/server";

const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Loan Management API",
    version: "1.0.0",
    description: "API for managing informal loans and clients",
  },
  paths: {
    // Rutas para los clientes
    "/api/client": {
      get: {
        summary: "Get all clients",
        description: "Retrieve a list of all clients",
        responses: {
          "200": {
            description: "A list of clients",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Client" },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new client",
        description: "Add a new client to the system",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Client" },
            },
          },
        },
        responses: {
          "201": {
            description: "Client created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Client" },
              },
            },
          },
        },
      },
    },
    "/api/client/{id}": {
      get: {
        summary: "Get a client by ID",
        description: "Retrieve a single client by their ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the client",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "A single client",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Client" },
              },
            },
          },
          "404": {
            description: "Client not found",
          },
        },
      },
      put: {
        summary: "Update a client by ID",
        description: "Update the details of an existing client",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the client to update",
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Client" },
            },
          },
        },
        responses: {
          "200": {
            description: "Client updated successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Client" },
              },
            },
          },
          "404": {
            description: "Client not found",
          },
        },
      },
      delete: {
        summary: "Delete a client by ID",
        description: "Remove a client from the system",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the client to delete",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "204": {
            description: "Client deleted successfully",
          },
          "404": {
            description: "Client not found",
          },
        },
      },
    },
    // Rutas para los préstamos
    "/api/loan": {
      get: {
        summary: "Get all loans",
        description: "Retrieve a list of all loans",
        responses: {
          "200": {
            description: "A list of loans",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Loan" },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new loan",
        description: "Add a new loan to the system",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Loan" },
            },
          },
        },
        responses: {
          "201": {
            description: "Loan created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Loan" },
              },
            },
          },
        },
      },
    },
    "/api/loan/{id}": {
      get: {
        summary: "Get a loan by ID",
        description: "Retrieve a single loan by its ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the loan",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "A single loan",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Loan" },
              },
            },
          },
          "404": {
            description: "Loan not found",
          },
        },
      },
      put: {
        summary: "Update a loan by ID",
        description: "Update the details of an existing loan",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the loan to update",
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Loan" },
            },
          },
        },
        responses: {
          "200": {
            description: "Loan updated successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Loan" },
              },
            },
          },
          "404": {
            description: "Loan not found",
          },
        },
      },
      delete: {
        summary: "Delete a loan by ID",
        description: "Remove a loan from the system",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the loan to delete",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "204": {
            description: "Loan deleted successfully",
          },
          "404": {
            description: "Loan not found",
          },
        },
      },
    },
    // Rutas para los pagos
    "/api/payment": {
      get: {
        summary: "Get all payments",
        description: "Retrieve a list of all payments",
        responses: {
          "200": {
            description: "A list of payments",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Payment" },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new payment",
        description: "Add a new payment to the system",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Payment" },
            },
          },
        },
        responses: {
          "201": {
            description: "Payment created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Payment" },
              },
            },
          },
        },
      },
    },
    "/api/payment/{id}": {
      get: {
        summary: "Get a payment by ID",
        description: "Retrieve a single payment by its ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the payment",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "A single payment",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Payment" },
              },
            },
          },
          "404": {
            description: "Payment not found",
          },
        },
      },
      put: {
        summary: "Update a payment by ID",
        description: "Update the details of an existing payment",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the payment to update",
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Payment" },
            },
          },
        },
        responses: {
          "200": {
            description: "Payment updated successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Payment" },
              },
            },
          },
          "404": {
            description: "Payment not found",
          },
        },
      },
      delete: {
        summary: "Delete a payment by ID",
        description: "Remove a payment from the system",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the payment to delete",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "204": {
            description: "Payment deleted successfully",
          },
          "404": {
            description: "Payment not found",
          },
        },
      },
    },
    "/api/subscription": {
      get: {
        summary: "Get all subscriptions",
        description: "Retrieve a list of all subscriptions",
        responses: {
          "200": {
            description: "A list of subscriptions",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Subscription" },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Create a new subscription",
        description: "Add a new subscription to the system",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Subscription" },
            },
          },
        },
        responses: {
          "201": {
            description: "Subscription created successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Subscription" },
              },
            },
          },
        },
      },
    },
    "/api/subscription/{id}": {
      get: {
        summary: "Get a subscription by ID",
        description: "Retrieve a single subscription by its ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the subscription",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "A single subscription",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Subscription" },
              },
            },
          },
          "404": {
            description: "Subscription not found",
          },
        },
      },
      put: {
        summary: "Update a subscription by ID",
        description: "Update the details of an existing subscription",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the subscription to update",
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Subscription" },
            },
          },
        },
        responses: {
          "200": {
            description: "Subscription updated successfully",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Subscription" },
              },
            },
          },
          "404": {
            description: "Subscription not found",
          },
        },
      },
      delete: {
        summary: "Delete a subscription by ID",
        description: "Remove a subscription from the system",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the subscription to delete",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "204": {
            description: "Subscription deleted successfully",
          },
          "404": {
            description: "Subscription not found",
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Client: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Unique identifier for the client",
          },
          name: {
            type: "string",
            description: "Name of the client",
          },
          email: {
            type: "string",
            description: "Email of the client",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Creation timestamp of the client",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Last update timestamp of the client",
          },
        },
        required: ["name", "email"],
      },
      Loan: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Unique identifier for the loan",
          },
          amount: {
            type: "number",
            format: "float",
            description: "Amount of the loan",
          },
          interestRate: {
            type: "number",
            format: "float",
            description: "Interest rate of the loan",
          },
          clientId: {
            type: "integer",
            description: "ID of the client who took the loan",
          },
          startDate: {
            type: "string",
            format: "date-time",
            description: "Start date of the loan",
          },
          endDate: {
            type: "string",
            format: "date-time",
            description: "End date of the loan",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Creation timestamp of the loan",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Last update timestamp of the loan",
          },
        },
        required: [
          "amount",
          "interestRate",
          "clientId",
          "startDate",
          "endDate",
        ],
      },
      Payment: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Unique identifier for the payment",
          },
          amount: {
            type: "number",
            format: "float",
            description: "Amount of the payment",
          },
          date: {
            type: "string",
            format: "date-time",
            description: "Date of the payment",
          },
          loanId: {
            type: "integer",
            description: "ID of the associated loan",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Creation timestamp of the payment",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
            description: "Last update timestamp of the payment",
          },
        },
        required: ["amount", "date", "loanId"],
      },
      Subscription: {
        type: "object",
        properties: {
          id: { type: "integer" },
          userId: { type: "string" },
          plan: { type: "string", enum: ["STANDARD", "PRO", "ULTIMATE"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
    },
  },
};

export async function GET() {
  return NextResponse.json(swaggerSpec);
}
