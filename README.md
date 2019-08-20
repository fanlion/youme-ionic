# Youme Ionic Native

Youme Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Ionic Native wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

## Installation

Run following command to install Ionic Native in your project.

```bash
cordova plugin add cordova-plugin-youme-im
npm install @youme-ionic/core --save
npm install @youme-ionic/youme-im --save
```

You also need to install the Ionic Native package for each plugin you want to add. Please see the [Ionic Native documentation](https://ionicframework.com/docs/native/) for complete instructions on how to add and use the plugins.

## Documentation

For the full Ionic Native documentation, please visit [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/).

### Basic Usage

#### Ionic/Angular apps

To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it.
Make sure to import the injectable class from the `/ngx` directory as shown in the following examples:

```typescript
// app.module.ts
import { YoumeIM } from '@youme-ionic/youme-im/ngx';

...

@NgModule({
  ...

  providers: [
    ...
    YoumeIM
    ...
  ]
  ...
})
export class AppModule { }
```

```typescript
import { YoumeIM } from '@youme-ionic/youme-im/ngx';
import { Platform } from 'ionic-angular';

@Component({ ... })
export class MyComponent {

  constructor(private yim: YoumeIM, private platform: Platform) {

    this.platform.ready().then(() => {
      // init sdk
      this.yim.init('appkey', 'appsecret', 'serverZone').then((code) => {
        console.log('init sdk success', code);
      }).catch((code) => {
        console.log('init sdk fail', code);
      });
    });

  }

}
```

#### ES2015+/TypeScript

These modules can work in any ES2015+/TypeScript app (including Angular/Ionic apps). To use any plugin, import the class from the appropriate package, and use it's static methods.

```js
import { YoumeIM } from '@youme-ionic/youme-im';

document.addEventListener('deviceready', () => {
  YoumeIM.init('appke', 'appsecret', 'serverZone').then((code) => {
    console.log('init sdk success', code);
  }.catch((code) => {
    console.log('init sdk fail', code));
  }
});
```

#### AngularJS

Youme Ionic Native generates an AngularJS module in runtime and prepares a service for each plugin. To use the plugins in your AngularJS app:

1. Download the latest bundle.
2. Include it in `index.html` before your app's code.
3. Inject `youme.native` module in your app.
4. Inject any plugin you would like to use with a `$cordova` prefix.

```js
angular.module('myApp', ['youme.native'])
  .controller('MyPageController', function($cordovaYoumeIM) {
    $cordovaYoumeIM.init('appke', 'appsecret' , 'serverZone').then(
      function(code) {
        console.log('init sdk success', code);
      },
      function(err) {
        console.log('init sdk fail', code);
      });
  });
```

#### Vanilla JS

To use Ionic Native in any other setup:

1. Download the latest bundle.
2. Include it in `index.html` before your app's code.
3. Access any plugin using the global `YoumeNative` variable.

```js
document.addEventListener('deviceready', function() {
  YoumeNative.YoumeIM.init('appkey', 'appsecret', 'serverZone').then(
      function (code) {
        console.log('init sdk success', code);
      },
      function(code) {
        console.log('init sdk fail', code);
      }
    );
});
```
