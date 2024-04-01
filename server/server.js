import express from "express";
import cors from "cors";
import auth from "./routes/authorize.js";
import people from "./routes/people.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/authorize", auth);
app.use("/people", people);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});