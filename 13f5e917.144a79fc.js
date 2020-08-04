(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return p})),n.d(r,"metadata",(function(){return a})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(2),o=n(10),i=(n(0),n(173)),p={id:"error-suppression",title:"Error Suppression",sidebar_label:"Error Suppression"},a={id:"error-suppression",title:"Error Suppression",description:"Pyre throws errors on inferred or explicitly conflicting type annotations, and on type-incompatible usage and access.",source:"@site/../docs/error_suppression.md",permalink:"/docs/error-suppression",sidebar_label:"Error Suppression",sidebar:"overview",previous:{title:"Gradual Typing",permalink:"/docs/gradual-typing"},next:{title:"Pyre Errors",permalink:"/docs/error-types"}},s=[{value:"Explicitly Suppressing Errors",id:"explicitly-suppressing-errors",children:[]},{value:"Suppression Comment Types",id:"suppression-comment-types",children:[]}],c={rightToc:s};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Pyre throws errors on inferred or explicitly conflicting type annotations, and on type-incompatible usage and access."),Object(i.b)("p",null,"In default mode, pyre ",Object(i.b)("strong",{parentName:"p"},"will not")," throw errors error on:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Any")," types"),Object(i.b)("li",{parentName:"ol"},"Missing annotations"),Object(i.b)("li",{parentName:"ol"},"Code within functions whose return type is not explicitly annotated")),Object(i.b)("p",null,"Strict mode (",Object(i.b)("inlineCode",{parentName:"p"},"# pyre-strict"),") will not suppress any of the above errors in a file."),Object(i.b)("p",null,"Declare mode (",Object(i.b)("inlineCode",{parentName:"p"},"# pyre-ignore-all-errors"),") will suppress all errors in a file."),Object(i.b)("h2",{id:"explicitly-suppressing-errors"},"Explicitly Suppressing Errors"),Object(i.b)("p",null,"Pyre will ignore errors on lines marked with ",Object(i.b)("inlineCode",{parentName:"p"},"# pyre-ignore"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"# pyre-fixme"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"# type: ignore"),"."),Object(i.b)("p",null,"You may also ignore pyre errors on line X by adding an ignore comment to line X-1,\nas long as nothing else is on line X-1."),Object(i.b)("p",null,"To only ignore a specific kind of error (denoted in the pyre error message),\nyou can add the error code to the end of the ignore: i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"# pyre-ignore[7]"),"."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'  # same-line ignore\n  def foo() -> int:\n     return "string"  # pyre-ignore\n\n  # previous-line ignore\n  def foo() -> int:\n     # pyre-ignore\n     return "string"\n\n  # only ignore return errors\n  def foo() -> int:\n     return a.undefined # pyre-ignore[7]\n')),Object(i.b)("h2",{id:"suppression-comment-types"},"Suppression Comment Types"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"# pyre-fixme")," suppresses a type error with the intention of coming back to fix it later."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"# pyre-ignore")," signifies that there is something wrong with the type error,\nand so no further work needs to be done to fix this error where it occurs.\nInvestigation should be done on the type checker side.*"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"# type: ignore")," is MyPy's error ignore syntax and is compatible with Pyre."),Object(i.b)("p",null,"*Ensure your issue is addressed by the Pyre team by ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebook/pyre/issues"}),"opening an issue"),"\ndescribing a way to reproduce the problem you encountered."))}l.isMDXComponent=!0},173:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return y}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var r=o.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=t,y=u["".concat(p,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(y,a(a({ref:r},c),{},{components:n})):o.a.createElement(y,a({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);