```markdown
# 👩‍🌾 Node Farm 🌿

This project is a simple Node.js application built for learning purposes, demonstrating core concepts like working with files, handling HTTP requests, routing, templating, and using third-party modules.  It simulates a farm product listing website.

## 🛠️ Technologies Used

*   **Node.js:** The runtime environment for executing JavaScript server-side.
*   **npm (Node Package Manager):** Used for managing project dependencies.
*   **Slugify:** A third-party package for generating URL-friendly slugs from strings.
*   **Nodemon:** A development dependency that automatically restarts the server when code changes are detected.
```

## 🗂️ File Structure

```
node-farm/
├── 📁 dev-data/
│   └── 📄 data.json           # Product data (JSON).
├── 🧩 modules/
│   └── ⚙️ replaceTemplate.js # HTML template replacement module.
├── 📂 templates/
│   ├── 🖼️ template-card.html   # Product card template.
│   ├── 📰 template-overview.html # Overview page template.
│   └── 🏷️ template-product.html # Product details template.
├── 🗄️ txt/                   # (Commented-out) File system examples.
│   ├── 📝 append.txt

│   ├── 📜 final.txt

│   ├── 📥 input.txt

│   ├── 📤 output.txt

│   ├── 📑 read-this.txt

│   └── 🚀 start.txt

├── 🚫 .gitignore             # Git ignore file.
├── 💅 .prettierrc            # Prettier config.
├── ⚙️ index.js              # Main application file.
├── 📦 package-lock.json     # Dependency versions.
└── 📃 package.json          # Project metadata and dependencies.
```

## 🚀 How to Run

1.  **Clone the repository (if applicable):**  If you're starting from a repository, clone it to your local machine.
2.  **Navigate to the project directory:** `cd node-farm`
3.  **Install dependencies:** `npm install`
4.  **Start the server (using nodemon for automatic restarts):** `nodemon index.js`
5.  **Access the application:** Open your web browser and go to `http://127.0.0.1:8000` to view the overview page.  You can also access individual product pages via query parameters (e.g., `http://127.0.0.1:8000/product?id=0`).

## 💡 App Description

The Node Farm application demonstrates several key Node.js concepts:

*   **File System Operations:**  The code includes (commented-out) examples of synchronous and asynchronous file reading and writing using the `fs` module. The application also reads HTML templates and JSON data from files.
*   **HTTP Server:**  The `http` module is used to create a server that listens for incoming requests.
*   **Routing:** The application handles different URL paths (`/`, `/overview`, `/product`, `/api`) and serves different content accordingly.
*   **URL Parsing:** The `url` module is used to parse the URL and extract query parameters.
*   **Templating:** The `replaceTemplate` module (defined in `modules/replaceTemplate.js`) is used to dynamically insert product data into HTML templates.
*   **API:**  The `/api` route serves the product data as JSON.
*   **Third-party Modules:** The `slugify` module is used to create URL-friendly slugs for product names.

This project is a great starting point for learning Node.js and understanding how to build simple web applications.  It covers fundamental concepts that are essential for more complex Node.js projects.
