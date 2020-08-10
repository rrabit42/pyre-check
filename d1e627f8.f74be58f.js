(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(79)),o={id:"pysa-advanced",title:"Advanced Topics",sidebar_label:"Advanced Topics"},s={unversionedId:"pysa-advanced",id:"pysa-advanced",isDocsHomePage:!1,title:"Advanced Topics",description:"This page documents less straightforward bits of Pysa.",source:"@site/../docs/pysa_advanced.md",permalink:"/docs/pysa-advanced",sidebar_label:"Advanced Topics",sidebar:"overview",previous:{title:"Feature Annotations",permalink:"/docs/pysa-features"},next:{title:"Dynamically Generating Models",permalink:"/docs/pysa-model-generators"}},c=[{value:"Annotating <code>dataclass</code> Models",id:"annotating-dataclass-models",children:[]},{value:"Tainting Specific <code>kwargs</code>",id:"tainting-specific-kwargs",children:[]},{value:"Prevent Inferring Models with <code>SkipAnalysis</code>",id:"prevent-inferring-models-with-skipanalysis",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page documents less straightforward bits of Pysa."),Object(i.b)("h2",{id:"annotating-dataclass-models"},"Annotating ",Object(i.b)("inlineCode",{parentName:"h2"},"dataclass")," Models"),Object(i.b)("p",null,"In Pysa, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/dataclasses.html?"}),Object(i.b)("inlineCode",{parentName:"a"},"dataclasses")),"\nare defined via attributes, which are converted to properties under the hood. If\nyou want to taint the attributes of a ",Object(i.b)("inlineCode",{parentName:"p"},"dataclass"),", you might try to do the\nfollowing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# tainted.py\n@dataclass(frozen=True)\nclass MyDataClass:\n    attribute: str = ""\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# stubs/taint/tainted.py.pysa\n# This won't work\ntainted.MyDataClass.attribute: TaintSource[SensitiveData]\n")),Object(i.b)("p",null,"This doesn't work, because during analysis Pysa's understanding of the data\nclass is of how the class looks after the property is expanded; that is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Pysa's view of tainted.py\nclass MyDataClass:\n  @property\n  def attribute(self) -> str: ...\n  @attribute.setter\n  def attribute(self, value) -> None: ...\n")),Object(i.b)("p",null,"Therefore, to annotate a ",Object(i.b)("inlineCode",{parentName:"p"},"dataclass")," attribute, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"@property"),"\nannotations:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# stubs/taint/tainted.py.pysa\n@property\ndef tainted.MyDataClass.attribute(self) -> TaintSource[SensitiveData]: ...\n")),Object(i.b)("h2",{id:"tainting-specific-kwargs"},"Tainting Specific ",Object(i.b)("inlineCode",{parentName:"h2"},"kwargs")),Object(i.b)("p",null,"Sometimes, a function can have potential sinks mixed together with benign\nparameters in the keyword arguments (",Object(i.b)("inlineCode",{parentName:"p"},"kwargs"),") that it accepts. In these cases,\ntainting the whole ",Object(i.b)("inlineCode",{parentName:"p"},"kwargs")," variable will result in false positives when tainted\ndata flows into a benign ",Object(i.b)("inlineCode",{parentName:"p"},"kwarg"),". Instead, for a function like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def eval_and_log(**kwargs):\n    eval(kwargs["eval"])\n    logging.debug(kwargs["log"])\n')),Object(i.b)("p",null,"We can lie a bit in our ",Object(i.b)("inlineCode",{parentName:"p"},".pysa")," file, and break out the dangerous argument for\ntainting:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def eval_and_log(*, eval: TaintSink[RemoteCodeExecution], **kwargs): ...\n")),Object(i.b)("p",null,"This allows us to catch flows only into the ",Object(i.b)("inlineCode",{parentName:"p"},"eval")," keyword argument."),Object(i.b)("h2",{id:"prevent-inferring-models-with-skipanalysis"},"Prevent Inferring Models with ",Object(i.b)("inlineCode",{parentName:"h2"},"SkipAnalysis")),Object(i.b)("p",null,"In addition to the models defined in ",Object(i.b)("inlineCode",{parentName:"p"},".pysa")," files, Pysa will infer models for\nfunctions based what sources, sinks, etc. they call in their body. The\n",Object(i.b)("inlineCode",{parentName:"p"},"SkipAnalysis")," annotation can be used to prevent Pysa from inferring models, and\ninstead force it to use only the user defined models for determining taint flow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def qualifier.dont_generate_models(argument) -> SkipAnalysis: ...\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SkipAnalysis")," can be applied at the class level as a shorthand to prevent pysa\nfrom infering models for all functions in a class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"class skip_analysis.SkipMe(SkipAnalysis): ...\n")))}p.isMDXComponent=!0},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);