const btn = document.querySelector(".btn");

const jsonData = document.getElementById("jsonData");

btn.addEventListener("click", () => {
    fetch("http://localhost:3000/api/v1/products")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);

            jsonData.innerHTML = JSON.stringify(data, undefined, 2);
        })
        .catch((err) => console.log(err));
});

/* 
JSON.stringify output to div in pretty print way

https://stackoverflow.com/questions/16862627/json-stringify-output-to-div-in-pretty-print-way

*/
