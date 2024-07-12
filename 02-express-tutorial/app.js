const express = require("express");
const app = express();

// const { products, people } = require("./data");

const peopleRouter = require("./routes/people");

/////////////////////////////////////////////////////
// Home page
// app.use(express.static("./public"));

app.use(express.static("./methods-public"));

/////////////////////////////////////////////////////
// parse form data
// parse form body into a Javascript object
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use route
app.use("/api/v1/people", peopleRouter);

/////////////////////////////////////////////////////
// Middlewares
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;

    // const time = new Date().getFullYear();
    // const time = new Date().toLocaleString();
    const time = new Date().toLocaleTimeString();

    console.log(method, url, time);

    next();
};

// app.use(["/api/v1/test", "/api/v1/products"], logger);
app.use("/", logger);

/////////////////////////////////////////////////////
// app.get("/", logger, (req, res) => {
//     res.send("Home");
// });

app.get("/", (req, res) => {
    res.send("Home");
});

/////////////////////////////////////////////////////
// app.get("/api/v1/test", (req, res) => {
//     res.json({ message: "It worked!" });
// });

// app.get("/api/v1/products", (req, res) => {
//     res.json(products);
// });

// app.get("/api/v1/people", (req, res) => {
//     res.status(200).json(people);
// });

/////////////////////////////////////////////////////
// app.get("/api/v1/products/:productID", (req, res) => {
//     const idToFind = parseInt(req.params.productID);

//     const product = products.find((p) => p.id === idToFind);

//     if (!product) {
//         return res.json({ message: "That product was not found." });
//     }

//     // return res.json(req.params);
//     return res.json(product);
// });

/////////////////////////////////////////////////////
// Search for name
// app.get("/api/v1/query", (req, res) => {
//     // console.log(req.query);

//     const { search, limit } = req.query;

//     let sortedProducts = [...products];

//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         });
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }

//     if (sortedProducts.length < 1) {
//         // res.status(200).send('no products matched your search');
//         return res.status(200).json({ sucess: true, data: [] });
//     }

//     res.status(200).json(sortedProducts);
// });

// Search for prices
// app.get("/api/v1/prices", (req, res) => {
//     // console.log(req.query);

//     const { price, limit } = req.query;

//     let sortedProducts = [...products];

//     if (price) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.price < Number(price);
//         });
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }

//     if (sortedProducts.length < 1) {
//         // res.status(200).send('no products matched your search');
//         return res.status(200).json({ sucess: true, data: [] });
//     }

//     res.status(200).json(sortedProducts);
// });
/////////////////////////////////////////////////////
////////////////////// POST method //////////////////
// app.get("/api/people", (req, res) => {
//     res.status(200).json({ success: true, data: people });
// });

// app.post("/login", (req, res) => {
//     const { name } = req.body;

//     if (name) {
//         people.push({ id: people.length + 1, name: name });

//         return res.status(201).json({ success: true, name: name });
//     }

//     res.status(400).json({
//         success: false,
//         message: "Please provide a name",
//     });
// });

// app.post("/api/people", (req, res) => {
//     // res.status(201).send("Success");

//     const { name } = req.body;

//     if (name) {
//         people.push({ id: people.length + 1, name: name });

//         // check again
//         // console.log(people);

//         return res.status(201).send({ success: true, person: name });
//     }

//     res.status(400).json({
//         success: false,
//         message: "Please provide a name",
//     });
// });

// app.post("/api/v1/people", (req, res) => {
//     const { name } = req.body;

//     if (name) {
//         people.push({ id: people.length + 1, name: name });

//         // check again
//         // console.log(people);

//         return res.status(201).json({ success: true, name: name });
//     }

//     res.status(400).json({
//         success: false,
//         message: "Please provide a name",
//     });
// });

/////////////////////////////////////////////////////
app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});
