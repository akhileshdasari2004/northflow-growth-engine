import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, "..", "dist", "client");

if (!fs.existsSync(clientDir)) {
  console.error("dist/client directory not found");
  process.exit(1);
}

const assetsDir = path.join(clientDir, "assets");
const files = fs.readdirSync(assetsDir);

const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js") && !f.includes("styles"));
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!jsFile || !cssFile) {
  console.error("Could not find JS or CSS files");
  console.log("Files found:", files);
  process.exit(1);
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Growth infrastructure for HVAC contractors: recover missed calls, multiply Google reviews, and build recurring maintenance membership revenue." />
    <meta property="og:title" content="NorthFlow HVAC Growth" />
    <meta property="og:description" content="Recover missed calls, grow reviews, and build recurring membership revenue for your HVAC business." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
    <title>NorthFlow HVAC Growth — Recover Missed Calls, Grow Reviews & Memberships</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, "index.html"), htmlContent);
console.log("Generated index.html");