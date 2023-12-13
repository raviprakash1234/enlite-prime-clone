import express from "express";
import cors from "cors";

import serverInit from "./server";

const PORT = process.env.PORT || 3000;
const app = express();

// function isStaticRoute(requestUrl) {
//   const staticRouteSlugs = [
//     "favicon",
//     "index.html",
//     "manifest",
//     "robots.txt",
//     "static",
//     "assets",
//   ];
//   const matchedSlug = staticRouteSlugs.find(
//     (slug) => requestUrl.indexOf(slug) !== -1
//   );
//   return !!matchedSlug;
// }

// Register global middleswares for server app.
app.use(cors());
app.use(express.json({ limit: "10mb", strict: false }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(express.static("./build"));
// Initialize server app.
serverInit(app);
app.use("/assets", express.static("./build/assets"));
// Serve static files belonging to frontend app.
app.use("*", express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
