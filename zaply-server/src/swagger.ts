export default {
  swagger: "2.0",
  info: {
    description: "",
    version: "1.0.0",
    title: "Swagger API-Zaply",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "marthinkorb@gmail.com",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  host: "localhost:3000",
  basePath: "",
  tags: [
    // {
    //     "name": "DDA",
    //     "description": "DDA para boletos de clientes"
    // },
    {
      name: "CRUD of products",
      description:
        "You can create, read, update and delete products from your list.",
    },
  ],
  schemes: ["http", "https"],
  paths: {
    "/products": {
      get: {
        tags: ["CRUD of products"],
        summary: "List all products in system",
        consumes: ["application/json"],
        produces: ["application/json"],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Response",
            },
          },
        },
      },
      post: {
        tags: ["CRUD of products"],
        summary: "Create a new product",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/Request",
            },
          },
        ],
        responses: {
          "201": {
            description: "Created",
            schema: {
              $ref: "#/definitions/Response",
            },
          },
          "404": {
            description: "Bad request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
          "500": {
            description: "Internal server error",
          },
        },
      },
    },
    "/products/{id}": {
      put: {
        tags: ["CRUD of products"],
        summary: "Update a product",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "ID of product to be updated",
            schema: {
              $ref: "#/definitions/Request",
            },
          },
          {
            in: "body",
            name: "body",
            required: true,
            description: "ID of product to be updated",
            schema: {
              $ref: "#/definitions/Request",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/Response",
            },
          },
          "404": {
            description: "Failed. DDA not found.",
          },
        },
      },
      delete: {
        tags: ["CRUD of products"],
        summary: "Delete a product",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            description: "ID of product to be updated",
            schema: {
              $ref: "#/definitions/Request",
            },
          },
        ],
        responses: {
          "200": {
            description: "Product deleted",
            schema: {
              $ref: "#/definitions/Response",
            },
          },
          "404": {
            description: "Product not found.",
          },
        },
      },
    },
    // "/tools/{id}": {

    // }
  },
  securityDefinitions: {
    tools_auth: {
      type: "oauth2",
      authorizationUrl: "",
      flow: "implicit",
      scopes: {
        "write:tools": "",
        "read:tools": "",
      },
    },
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
  },
  definitions: {
    Update: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
      },
    },
    Request: {
      type: "object",
      properties: {
        image: {
          type: "string",
        },
        name: {
          type: "string",
        },
        categories: {
          type: "string",
        },
        price: {
          type: "string",
        },
        brand: {
          type: "string",
        },
      },
    },
    Response: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
        image: {
          type: "string",
        },
        name: {
          type: "string",
        },
        categories: {
          type: "string",
        },
        price: {
          type: "string",
        },
        brand: {
          type: "string",
        },
      },
    },
    BadRequest: {
      type: "object",
      properties: {
        message: {
          type: "string",
        },
        errors: {
          type: "object",
          properties: {
            description: {
              type: "string",
            },
          },
        },
      },
    },
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
};
