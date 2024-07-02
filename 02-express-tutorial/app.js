const express = require("express");
const app = express();

const { products } = require("./data");

/////////////////////////////////////////////////////
// Home page
app.use(express.static("./public"));

/////////////////////////////////////////////////////
app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
    res.json(products);
});

/////////////////////////////////////////////////////
app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID);

    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.json({ message: "That product was not found." });
    }

    // return res.json(req.params);
    return res.json(product);
});

/////////////////////////////////////////////////////
// Search for name
app.get("/api/v1/query", (req, res) => {
    // console.log(req.query);

    const { search, limit } = req.query;

    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] });
    }

    res.status(200).json(sortedProducts);
});

// Search for prices
app.get("/api/v1/prices", (req, res) => {
    // console.log(req.query);

    const { price, limit } = req.query;

    let sortedProducts = [...products];

    if (price) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price < Number(price);
        });
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] });
    }

    res.status(200).json(sortedProducts);
});
/////////////////////////////////////////////////////
app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});
