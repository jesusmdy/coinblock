# Coinblock

Alternate platform to buy & sell crypto currencies.

This frontend depends of an Strapi backend with GraphQL and its respective databases rows.

Based on the official Strapi Vue template [tutorial](https://strapi.io/blog/build-a-blog-with-vue-strapi-and-apollo)

**Frontend**

```bash
git clone https://github.com/jesusmdy/coinblock
cd coinblock
```

#### Start the frontend server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop

# Create a .env file containing the VUE_APP_STRAPI_API_URL variable
echo "VUE_APP_STRAPI_API_URL=http://localhost:1337" >> .env
```

Vue server is running here => [http://localhost:8080](http://localhost:8080)

