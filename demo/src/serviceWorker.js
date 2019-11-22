// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
/* 使用React官方的脚手架工具create-react-app创建的项目，目录中会存在registerServiceWorker.js这个文件，这个文件的作用是什么呢？

这个文件可以使用也可以不使用，使用它可以使你的react项目变成一个PWA（Progressive Web Application,渐进式web应用程序）, 也就是说，在线上，只要访问过一次你的网站，下一次即使没有网络，这个应用依然可以被访问。当然，它的好处不仅这么一点点，在移动端打开项目时，如果你用的是chrome或者firefox这样的高级浏览器，浏览器会给你的页面不太一样的显示，你的网页看起来会更像原生App，实际上体验也更爽。

在项目的public目录下，存在一个manifest.json文件，你可以在这里对你的网页做一些配置，当用户访问网页，生成一个网页的桌面快捷方式时，会以这个文件中的内容作为图标和文字的显示内容。

配置好manifest.json, 使用registerServiceWorker.js，用户完全可以把你的网页快捷方式放到桌面上，因为你的网页此时支持离线访问，所以用起来和原生app的体验很接近。

大家可以做这样一个试验：

创建一个项目
运行npm run build
然后在本地开一个服务器，把build目录中的内容放在服务器的根目录下
通过localhost的域名访问服务器
访问过一次之后，断掉网络，重新访问
你会发现，即使没有网络，这个时候依然可以访问你的应用。需要注意的是，只有打包生成线上版本的react项目时，registerServiceWorker.js才会有效。本地开发时，这个文件没什么效果，因为如果本地开发使用这个文件，有可能会因为缓存造成调试问题。

还需要注意的是，项目在本地，通过localhost域名访问，支持http协议。如果真正放到线上，如果想让registerServiceWorker.js生效，服务器必须采用https协议，这也是为什么很多同学本地测试好用，线上就不好用的原因。

registerServiceWorker.js中的这些功能，并不是React所独创的内容，而是React对PWA的一个实现，PWA未来的发展前景不错，从扩展视野角度也值得大家一看，如果你想了解更多，可以访问PWA的官方手册，这里讲解了PWA底层关于serviceWorker很多的内容，非常有趣： */
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
