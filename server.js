const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
//const sequelize = require("./config/db");
//require("./models/asociaciones");
const app = express();

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
        eq: (a, b) => a === b,
        calcularPosicion: (index) => index + 1
    }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const homeRouter = require("./router/homeRouters");
app.use("/", homeRouter);


const ordenesRouter = require("./router/ordenesRouter");
app.use("/ordenes", ordenesRouter);


const marcasRouters = require("./router/marcasRouter");
app.use("/marcas", marcasRouters);


const pieza_repuestoRouter = require("./router/pieza-repuestoRouter");
app.use("/piezas-repuestos", pieza_repuestoRouter);


const vehiculosRouter = require("./router/vehiculosRouter");
app.use("/vehiculos", vehiculosRouter);


const servicioRouter = require("./router/servicioRouter");
app.use("/servicios", servicioRouter);






// sincronizar BD
//sequelize.sync().then(() => {
//  console.log("Base de datos sincronizada");
//});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));