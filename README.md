# Threshold Network Website

## Development

Uses node v16

### Setup

Install dependencies:

```sh
yarn
```

Copy `.env.example`, rename to `.env.development` and setup variables.

### Run local netlify backed

To run the app in the development mode:

```sh
yarn start-local-netlify
```

### Run the app

To run the app in the development mode:

```sh
yarn start
```

Open http://localhost:8000 to view it in the browser.

The page will reload if you make edits.

### Contributor Notes

#### `@shoegazer_`
* Had to do the following to get the above instructions to work:
> First thing I would do is to lock the dependencies by removing all "^" from the package.json file. 
After this, would install the dependencies using node version 18: `nvm use 18` and `yarn install`
to build, I would use node version 16: `nvm use 16, yarn build and yarn start`

* Tried the above on Windows and didn't work -- on Linux (Ubuntu) it did

Filed https://github.com/threshold-network/website/issues/114

