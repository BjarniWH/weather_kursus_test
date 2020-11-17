
## How to clone and start

```bash 
git clone https://superusers-kursus@dev.azure.com/superusers-kursus/nodejs/_git/express-app

cd express-app 

npm install --silent 

npm run start
```














## How to start using Express from begining


```bash
# install only once
npm install -g express-generator
npm install -g pm2

# usage
express  --git --view=hbs  express-app
cd express-app

npm install --silent 
npm run start

   create : express-app\
   create : express-app\public\
   create : express-app\public\javascripts\
   create : express-app\public\images\
   create : express-app\public\stylesheets\
   create : express-app\public\stylesheets\style.css
   create : express-app\routes\
   create : express-app\routes\index.js
   create : express-app\routes\users.js
   create : express-app\views\
   create : express-app\views\error.hbs
   create : express-app\views\index.hbs
   create : express-app\views\layout.hbs
   create : express-app\.gitignore
   create : express-app\app.js
   create : express-app\package.json
   create : express-app\bin\
   create : express-app\bin\www   --> PORT MUST COME FROM package.json

```

Listen on port 1111
- http://localhost:1111/
- http://localhost:1111/users


## TODO: /about

- Create endpoint "/about" and read from package.json 
  - name
  - version 
  - dependencies
- http://localhost:1111/about


## TODO: use PM2 to manage your node program

```json
{
  "name": "express-app",
  "version": "0.0.1",
  "port":1111,
  "private": true,
  "scripts": {
    "start": "pm2 start ./bin/www --name express-app -i 1 --watch"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "hbs": "~4.0.4",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  }
}
```

- npm start
- pm2 dashboard
- pm2 info express-app
- pm2 stop express-app
- pm2 start express-app
- pm2 restart express-app
- pm2 scale express-app 4
- pm2 scale express-app 8
- pm2 scale express-app 2





