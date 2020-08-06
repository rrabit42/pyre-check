(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(10),o=(r(0),r(171)),i={id:"pysa-coverage",title:"Coverage Increasing Strategies",sidebar_label:"Coverage Increasing Strategies"},s={id:"pysa-coverage",title:"Coverage Increasing Strategies",description:"Pysa relies on good type information and compete models in order to accurately analyze code. This page describes a number of strategies for increasing typing and model coverage to help Pysa. These strategies can be used once, with the results committed to your repository, or run as an ephemeral step in your analysis process prior to running pyre analyze.",source:"@site/../docs/pysa_increasing_coverage.md",permalink:"/docs/pysa-coverage",sidebar_label:"Coverage Increasing Strategies",sidebar:"overview",previous:{title:"Development Tips",permalink:"/docs/pysa-tips"},next:{title:"Static Analysis Post Processor",permalink:"/docs/static-analysis-post-processor"}},c=[{value:"<code>pyre infer</code>",id:"pyre-infer",children:[]},{value:"Preprocessors",id:"preprocessors",children:[]},{value:"Quick and Dirty Scripts",id:"quick-and-dirty-scripts",children:[]},{value:"Hand Crafted Models",id:"hand-crafted-models",children:[]}],p={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pysa relies on good type information and compete models in order to accurately analyze code. This page describes a number of strategies for increasing typing and model coverage to help Pysa. These strategies can be used once, with the results committed to your repository, or run as an ephemeral step in your analysis process prior to running ",Object(o.b)("inlineCode",{parentName:"p"},"pyre analyze"),"."),Object(o.b)("h2",{id:"pyre-infer"},Object(o.b)("inlineCode",{parentName:"h2"},"pyre infer")),Object(o.b)("p",null,"Pyre comes with a built-in type inference feature. From the root of your project, run ",Object(o.b)("inlineCode",{parentName:"p"},"pyre infer -r -i")," to make recursive in-place edits to add type information."),Object(o.b)("p",null,"Note: There is currently a bug with using the above arguments with the infer feature. The workaround is to break it into two commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"pyre infer -r\npyre infer -i --annotate-from-existing-stubs\n")),Object(o.b)("h2",{id:"preprocessors"},"Preprocessors"),Object(o.b)("p",null,"Pysa comes with a number of preprocessors intended to dynamically generate models for a project. Read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/pysa-model-generators"}),"this page")," to learn about the preprocessors that are currently available, and how to write your own. For best results, every entry point to your application (eg. view function for a Django web server) should have a hand written or preprocessor-generated model."),Object(o.b)("h2",{id:"quick-and-dirty-scripts"},"Quick and Dirty Scripts"),Object(o.b)("p",null,"Sometimes, code has conventions that convey typing/model information that just needs to be translated to a form Pysa understands. Don't be afraid of quick and dirty scripts to encode that information in a meaningful way."),Object(o.b)("p",null,"For example, do all your Django view functions live in a file called ",Object(o.b)("inlineCode",{parentName:"p"},"views.py")," and have an untyped ",Object(o.b)("inlineCode",{parentName:"p"},"request")," argument as the first argument? Can you just do a quick ",Object(o.b)("inlineCode",{parentName:"p"},"grep")," + ",Object(o.b)("inlineCode",{parentName:"p"},"sed")," to add the ",Object(o.b)("inlineCode",{parentName:"p"},"HttpRequest")," type annotation to all of those parameters? Pysa has a ton of pre-written models for ",Object(o.b)("inlineCode",{parentName:"p"},"HttpRequest"),", so a small typing change like that can cover a ton of entry points."),Object(o.b)("h2",{id:"hand-crafted-models"},"Hand Crafted Models"),Object(o.b)("p",null,"Consider all the ways that your application takes user input, and check to see if Pysa already has models written or not. For example, if you're using Flask as your web server rather than Django, you'll find Pysa doesn't currently have any pre-written models for Flask. You'll need to write some models following the instructions in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/pysa-basics"}),"previous pages of our docs"),". If the models are generally useful to others, please consider putting up a pull request to contribute them back to Pysa."))}l.isMDXComponent=!0},171:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,b=u["".concat(i,".").concat(y)]||u[y]||d[y]||o;return r?a.a.createElement(b,s(s({ref:t},p),{},{components:r})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);