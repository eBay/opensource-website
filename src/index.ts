import brogan from "@ebay/brogan-ebay";
import { start } from "@ebay/marko-run-adapter/app";
import express from "express";
import kraken from "kraken-js";

// initialize express, kraken, brogan and @marko/run
const app = express();
const basedir = process.cwd();
app.use(kraken(await brogan.init(app, { basedir })));
await start(app);
