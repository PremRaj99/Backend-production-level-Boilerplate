import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDb from "./db/connectDb.js";
import app from "./app.js";

const port = process.env.PORT || 3000;

connectDb()
  .then(
    app.listen(port, () => {
      console.log("Server is running on http://localhost" + port);
    })
  )
  .catch((err) => console.log("MONGO connection failed: ", err));
