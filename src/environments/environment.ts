// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://platzi-store.herokuapp.com',
  firebaseConfig: {
    apiKey: "AIzaSyC7bFt2RqSKC4RRIrnR5rVWZgEp5IXt9II",
    authDomain: "angular-store-spa.firebaseapp.com",
    databaseURL: "https://angular-store-spa.firebaseio.com",
    projectId: "angular-store-spa",
    storageBucket: "angular-store-spa.appspot.com",
    messagingSenderId: "526679385035",
    appId: "1:526679385035:web:0f8318f64037d650750c4e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
