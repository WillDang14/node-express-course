const product = require("../models/product");
const Product = require("../models/product");

/////////////////////////////////////////////////////////
/* $option: 
"i" ==>> Case insensitivity to match upper and lower cases
*/
const getAllProductsStatic = async (req, res) => {
    // throw new Error("Testing async error!");

    // const search = "ab";

    // const products = await Product.find({}).sort("-name price");

    // select
    // const products = await Product.find({}).select("name price");

    // Limit
    // const products = await Product.find({}).select("name price").limit(4);

    // SKip
    // const products = await Product.find({})
    //     .sort("name")
    //     .select("name price")
    //     .limit(10)
    //     .skip(5);

    // Pagination
    // const products = await Product.find({}).sort("name").select("name price");

    // Numeric Filters
    const products = await Product.find({ price: { $gt: 30 } })
        .sort("price")
        .select("name price");

    // res.status(200).json({ msg: "Products testing route" });
    res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;

    const queryObject = {};

    // if "featured" exists
    if (featured) {
        queryObject.featured = featured === "true" ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    // Numeric filter
    if (numericFilters) {
        // console.log(numericFilters);

        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte",
        };

        const regEx = /\b(>|>=|=|<|<=)\b/g;

        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );

        // console.log(filters);

        const options = ["price", "rating"];
        filters = filters.split(",").forEach((item) => {
            const [field, operator, value] = item.split("-");

            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }
        });
    }

    // console.log(queryObject);

    let result = Product.find(queryObject);
    // console.log(result);

    // sort
    if (sort) {
        // console.log(sort);
        const sortList = sort.split(",").join(" ");
        // console.log(sortList);

        result = result.sort(sortList);
        // console.log(result);
    } else {
        result = result.sort("createdAt");
    }

    // select
    if (fields) {
        const fieldsList = fields.split(",").join(" ");

        result = result.select(fieldsList);
    }

    // Pagination
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);
    const products = await result;

    res.status(200).json({ products, nbHits: products.length });
    // res.status(200).json({ msg: "testing" });
};

/////////////////////////////////////////////////////////
module.exports = { getAllProducts, getAllProductsStatic };
