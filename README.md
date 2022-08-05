# Thermal Printer Web Starter 🚀

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/Sensation-Software-Solutions-pvt-ltd/thermal-printer-web.git

# Navigate to clonned folder and Install dependencies
cd thermal-printer-web && yarn or npm install

2. Running the APP

Run this command to start the development server and to start your app:
npm start

Or, if you have electron installed globally:
electron .

That's it! Cool, right?

```
There are two APIs:

```
1. For getting information about the available printers:
        http://localhost:8080/list //GET
    
2. For sending the print command to the Zebra printer:
        http://localhost:8080/print // POST
                Request Body :
                               {
                                  "printerName": "Microsoft Print to PDF",
                                  "width": "170px" // This is the width of the receipt
                               }


```

## Common Errors:

```
Error: The module '/path/to/native/module.node'
was compiled against a different Node.js version using
NODE_MODULE_VERSION $XYZ. This version of Node.js requires
NODE_MODULE_VERSION $ABC. Please try re-compiling or re-installing
the module (for instance, using `npm rebuild` or `npm install`).
```
If you are facing the above error, then you could run the following commands:

```
npm install --save-dev electron-rebuild

# Every time you run "npm install", run this:
./node_modules/.bin/electron-rebuild

# If you have trouble on Windows, try:
.\node_modules\.bin\electron-rebuild.cmd

```
For more information, you could check out the link given below:
https://www.electronjs.org/docs/latest/tutorial/using-native-node-modules


If you are getting the following error related to architecture:

```
thermal-printer-web/node_modules/printer/lib/node_printer.node' (mach-o file, but is an incompatible architecture (have (x86_64), need (arm64e))

```

You could try changing the node version.

For me, Node Version: 16.16.0 works fine.

You could try downgrading or upgrading the node versions for resolving the above mentioned error related to the architecture.