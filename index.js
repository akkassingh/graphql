import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = {
  product: () => {
    return {
      id: "1",
      name: "Cheese",
      description: "This is a tasty cheese",
      price: 4.99,
      soldout: false,
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
