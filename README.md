# Nodelinks
**Nodelinks** is a lightweight tool designed for **Cloudflare Workers** that aggregates multiple V2Ray subscription links.  
It supports both **raw Vmess format** and **encrypted formats**, provides **privacy protection**, and allows **password-based access control**.
--
## [中文文档](https://github.com/gududaonet/Nodelinks/blob/main/README-zh.md)
## ✨ Features
- 🚀 Runs entirely on Cloudflare Workers (serverless, zero maintenance)
- 🔐 Password-protected access via `key` parameter
- 🔀 Supports multiple modes for link aggregation
- 🌐 Fetches and merges multiple online subscription links
- 📄 Returns either plain text or HTML page
- 🧩 Lightweight, easy to customize and extend
---
## 🧩 Supported Modes
### Choose Node Groups（Fixed Links Aggregation）
- Predefined subscription links are merged automatically,and you can use this to select your node groups
- Access example:
```
/?mode=1&key=YOUR_PASSWORD
```
---
## 🔐 Authentication
- All requests require the correct `key` parameter
- Unauthorized requests return `ACCESS DENIED`
- No one could know this is an bot when they see the 403 page
---
## 📦 Deployment
### 1️⃣ Create Cloudflare Workers Project
### 2️⃣ Replace `index.js`
Copy the Workers script code into `index.js` of the project.
### 3️⃣ Modify the code
Add your links and check your password
### 4️⃣ Publish
---
## ⚙️ Configuration Tips
Ensure your URLs are correct and accessible to Cloudflare servers
## ⚠️ Notes
* This project does **not** rely on Node.js APIs, only standard **Workers Web APIs**
* Not intended for very high-frequency or large-scale fetching
* Ensure that all URLs being fetched are accessible
---
## 📜 License
MIT License
## 📌 Disclaimer
This project is provided for **educational and technical research purposes only**.
The author is not responsible for any misuse of this project.
