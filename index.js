(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // vue.js
  var require_vue = __commonJS((exports, module) => {
    module.exports = Vue;
    return Vue;
  });

  // index.tsx
  var vue2 = __toModule(require_vue());

  // bar.tsx
  var vue = __toModule(require_vue());
  var bar_default = vue.defineComponent({
    props: {
      title: {type: String},
      onClick: {type: Function}
    },
    setup(props) {
      const text = vue.ref("");
      return () => {
        const {title, onClick} = props;
        return /* @__PURE__ */ Vue.h(Vue.Fragment, null, /* @__PURE__ */ Vue.h("input", {
          value: text.value,
          onInput: ({target}) => {
            text.value = target.value;
          }
        }), /* @__PURE__ */ Vue.h("p", {
          class: "test-class",
          onClick: () => onClick?.call(this, Math.random())
        }, title, " ", text.value));
      };
    }
  });

  // index.tsx
  var Foo = ({text, onPressed}) => /* @__PURE__ */ Vue.h("p", {
    onClick: () => onPressed(Math.random())
  }, text);
  vue2.createApp({
    render() {
      return /* @__PURE__ */ Vue.h(Vue.Fragment, null, /* @__PURE__ */ Vue.h(Foo, {
        text: "functional component",
        onPressed: (value) => console.log(value)
      }), /* @__PURE__ */ Vue.h(bar_default, {
        title: "defined component",
        onClick: (value) => console.log(value)
      }));
    }
  }).mount("main");
})();
