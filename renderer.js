const express = require("express");
const cors = require("cors");
const fs = require("fs");
const printer = require("printer");

let apps = express();
apps.use(express.urlencoded({ extended: false }));
apps.use(express.json());
apps.use(cors());

let server = apps.listen(8080);

apps.get("/", function (req, res) {
  res.send("Server is ready!");
});

apps.get("/list", async (req, res) => {
  const obj = await printer.getPrinters();
  return res.status(200).json(obj);
});

apps.post("/print", (req, res) => {
  printer.printDirect({
    data: req.body.data,
    printer: req.body.printerName, // printer name, if missing then will print to default printer
    type: "RAW", // type: RAW, TEXT, PDF, JPEG, .. depends on platform
    success: function (jobID) {
      res.status(200).send("sent to printer with ID: " + jobID);
    },
    error: function (err) {
      res.status(400).json(err);
    }
  });
});
