
 
 const RequestHandler = (req, res) => {

  if (req.url === "/") {
    res.write();

    return res.end();
  }

  // =========================
  // BUY PRODUCT
  // =========================
  if (req.url === "/buy-product" && req.method === "POST") {}

  // =========================
  // PRODUCTS PAGE
  // =========================
  if (req.url === "/products" && req.method === "GET") {
    res.write();

    return res.end();
  }

  // =========================
  // 404 PAGE
  // =========================
  res.statusCode = 404;

  res.end();
};

module.exports = RequestHandler;