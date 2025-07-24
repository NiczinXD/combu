import express from "express";
import busca from "./consumoRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Tudo correndo bem."));

    app.use(express.json(), busca);
};

export default routes;