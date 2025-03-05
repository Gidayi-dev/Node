# Node.js Learning Summary

## Project Setup
1. **Initialize Project**
   ```sh
   npm init -y
   ```
   - Creates a `package.json` file to manage dependencies and scripts.
   
2. **Project Structure**
   - Created `utils.js` for utility functions.
   - Added controller files for handling logic.
   
3. **Modify `package.json`**
   - Updated `package.json` for better project organization.
   add ```"type": "module",``` right after ```"main": "index.js"```
   delete
   ```"type": commonjs```

## Development Tools
1. **Install Nodemon (for auto-restart in development)**
   ```sh
   npm install -D nodemon --save-dev
   ```
2. **Update `package.json` to run server in development mode**
   ```json
   "scripts": {
     "dev": "nodemon index.js"
   }
   ```
   - Run using:
     ```sh
     npm run dev
     ```

## Environment & Git
1. **Create `.gitignore`**
   - Ignore `node_modules`, `.env`, and other unnecessary files.

2. **Environment Variables (`.env` file)**
   - Store sensitive configuration data.

## Node.js Core Modules
1. **Handling Requests**
   - GET, POST, PUT, DELETE requests using built-in `http` module.

2. **File System (`fs`) Module**
   - Read and write files asynchronously.
   ```js
   const fs = require('fs');
   fs.writeFileSync('test.txt', 'Hello, Node.js!');
   ```

3. **Hashing & Encryption**
   - Secure data using `crypto` module.

4. **Operating System (`os`) Module**
   - Fetch system details like memory and CPU.
   ```js
   const os = require('os');
   console.log(os.platform(), os.freemem());
   ```

5. **Path Module**
   - Manage file and directory paths.
   ```js
   const path = require('path');
   console.log(path.join(__dirname, 'utils.js'));
   ```

6. **URL Module**
   - Parse and manipulate URLs.
   ```js
   const url = require('url');
   const myUrl = new URL('https://example.com/path?name=John');
   console.log(myUrl.searchParams.get('name'));
   ```

7. **Events Module**
   - Handle event-driven programming.
   ```js
   const EventEmitter = require('events');
   const emitter = new EventEmitter();
   emitter.on('message', () => console.log('Event triggered!'));
   emitter.emit('message');
   ```

8. **Process Object**
   - Access environment variables and process information.
   ```js
   console.log(process.env.PATH);
   ```


