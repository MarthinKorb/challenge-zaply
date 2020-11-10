import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import ProductsController from "./controllers/ProductsController";

import swaggerConfigs from "./swagger";

const routes = Router();

routes.use("/api-docs", swaggerUi.serve);

routes.get("/api-docs", swaggerUi.setup(swaggerConfigs));

routes.get("/products", ProductsController.index);
routes.post("/products", ProductsController.create);
routes.delete("/products/:id", ProductsController.delete);
routes.put("/products/:id", ProductsController.edit);

export default routes;
