# <%= name.toLowerCase() %>

To start the server:

```shell
npm start
```

To build the app:

```shell
npm run build
```

To add a new sample:

  1. Add a new javascript file to the `src` folder,
  2. Add a new entry to `webpack.config.js` file with the new created file name,
  3. Add a new `html` file in the `public/examples` folder containing the same structure like previous samples,
  4. Add a new list item in the `public/index.html` file.