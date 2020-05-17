This project was bootstrapped with [在 React 中使用 Redux](https://juejin.im/post/5b755537e51d45661d27cdc3).

## 在 React 中使用 Redux

了解 React 组件之间如何传递数据的人都应该知道，React 传递数据是一级一级地传的。就像如下的左图，一个组件要想把某个时候的数据传递给另一个的组件。结果，需要向上回调两次，再向下传一次，非常之麻烦。
而 Redux 是怎么做的呢，Redux 有一个非常核心的部分就是 Store，Store 中管理的数据独立于 React 组件之外，如果 React 某个组件中的某个数据在某个时刻改变了（可以称之为状态改变了），就可以直接更改这个 Store 中管理的数据，这样其他组件想要拿到此时的数据直接拿就行了，不需要传来传去。
需要说明的是，react 中有一个 context 也可以实现类似的功能，但它是一种侵入式写法，官方都不推荐，所以本文都不会提到它。

这个过程看上去挺简单的，但是 Redux 为了做好这样一件事也是要经历一个比较复杂的过程的。
接下来就开启 Redux 之旅吧。

```
$ npm install --save redux
or
$ yarn add redux
```

## 如何使用 react-redux

在 react 中使用 redux 其实是还可以更加优雅一点的。redux 还提供了一个 react-redux 插件，需要注意的是这个插件只起到辅助作用并不是用来替代 redux 的。

```
$ npm install --save react-redux
or
$ yarn add react-redux

```

### `yarn start`
