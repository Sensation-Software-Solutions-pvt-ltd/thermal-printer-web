# Thermal Printer Web Starter 🚀

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/Sensation-Software-Solutions-pvt-ltd/thermal-printer-web.git

# Navigate to clonned folder and Install dependencies
cd thermal-printer-web && yarn or npm install

#### 2. Running the APP

Run this command to start the development server and to start your app:
```
npm start
```

Or, if you have electron installed globally:
```
electron .
```

That's it! Cool, right?


There are two APIs:

1. For getting information about the available printers:
    http://localhost:8080/list //GET
2. For sending the print command to the Zebra printer:
    http://localhost:8080/print // POST
                Request Body :
                               {
                                  "printerName": "Microsoft Print to PDF",
                                  "width": "170px" // This is the width of the receipt
                               }
