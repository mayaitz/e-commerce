import express from "express";
import userRouter from "./Routes/UserRouter";
import orderRouter from "./Routes/OrderRouter";
import productRouter from "./Routes/ProductRouter";
import { errorHandler } from "./Middlewares/ErrorHandler";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.use(errorHandler);

app.listen(port, function () {
  console.log("Express App running at http://127.0.0.1:8000/");
});
