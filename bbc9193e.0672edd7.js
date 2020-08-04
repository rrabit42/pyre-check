(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(10),o=(t(0),t(173)),s={id:"static-analysis-post-processor",title:"Static Analysis Post Processor",sidebar_label:"Static Analysis Processor"},c={id:"static-analysis-post-processor",title:"Static Analysis Post Processor",description:"The pyre analyze command runs static analysis and outputs the result as JSON.",source:"@site/../docs/static_analysis_post_processor.md",permalink:"/docs/static-analysis-post-processor",sidebar_label:"Static Analysis Processor",sidebar:"overview",previous:{title:"Coverage Increasing Strategies",permalink:"/docs/pysa-coverage"},next:{title:"Additional Resources",permalink:"/docs/pysa-additional-resources"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[{value:"Parsing the JSON",id:"parsing-the-json",children:[]},{value:"Issue Exploration",id:"issue-exploration",children:[]}]},{value:"Commands",id:"commands",children:[{value:"Information commands",id:"information-commands",children:[]},{value:"Display commands",id:"display-commands",children:[]},{value:"Selection commands",id:"selection-commands",children:[]},{value:"Trace commands",id:"trace-commands",children:[]},{value:"Debugging commands",id:"debugging-commands",children:[]}]}],i={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"pyre analyze")," command runs static analysis and outputs the result as JSON.\nThe Static Analysis Post Processor (SAPP) tool can process these results and\nallows the user to explore the results."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#commands"}),"commands")," for the available commands in explore mode."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"If you have installed pyre version ",Object(o.b)("inlineCode",{parentName:"p"},">= 0.0.22")," via ",Object(o.b)("inlineCode",{parentName:"p"},"pip install pyre-check"),",\nthen you already have the ",Object(o.b)("inlineCode",{parentName:"p"},"sapp")," binary installed."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"This assumes you have followed the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pysa-running#example"}),'"Running Pysa" example')," already."),Object(o.b)("h3",{id:"parsing-the-json"},"Parsing the JSON"),Object(o.b)("p",null,"The JSON output from ",Object(o.b)("inlineCode",{parentName:"p"},"pyre analyze")," can be difficult to read."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"[~/static_analysis_example] $ sapp --database-name sapp.db analyze ./taint-output.json\n")),Object(o.b)("p",null,"will parse the JSON file and make it easier to work with. It will save the\nresults to a local sqlite file ",Object(o.b)("inlineCode",{parentName:"p"},"sapp.db"),"."),Object(o.b)("h3",{id:"issue-exploration"},"Issue Exploration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"[~/static_analysis_example] $ sapp --database-name sapp.db explore\n")),Object(o.b)("p",null,"This will launch a custom IPython interface that's connected to the sqlite file.\nIn this mode, you can dig into the issues that Pyre surfaces. Following is an\nexample of how to use the various commands."),Object(o.b)("p",null,"Start out by listing all known issues:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"==========================================================\nInteractive issue exploration. Type 'help' for help.\n==========================================================\n\n[ run 1 ]\n>>> issues\nIssue 1\n    Code: 5001\n Message: Possible shell injection Data from [UserControlled] source(s) may reach [RemoteCodeExecution] sink(s)\nCallable: source.convert\n Sources: input\n   Sinks: os.system\nLocation: source.py:9|22|32\nFound 1 issues with run_id 1.\n")),Object(o.b)("p",null,"As expected, we have 1 issue. To select it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"[ run 1 ]\n>>> issue 1\nSet issue to 1.\n\nIssue 1\n    Code: 5001\n Message: Possible shell injection Data from [UserControlled] source(s) may reach [RemoteCodeExecution] sink(s)\nCallable: source.convert\n Sources: input\n   Sinks: os.system\nLocation: source.py:9|22|32\n")),Object(o.b)("p",null,"View how the data flows from source to sink:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"[ run 1 > issue 1 > source.convert ]\n>>> trace\n     # \u2387  [callable]       [port]      [location]\n     1    leaf             source      source.py:8|17|22\n --\x3e 2    source.convert   root        source.py:9|22|32\n     3    source.get_image formal(url) source.py:9|22|32\n     4    leaf             sink        source.py:5|21|28\n")),Object(o.b)("p",null,"Move to the next callable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"[ run 1 > issue 1 > source.convert ]\n>>> n\n     # \u2387  [callable]       [port]      [location]\n     1    leaf             source      source.py:8|17|22\n     2    source.convert   root        source.py:9|22|32\n --\x3e 3    source.get_image formal(url) source.py:9|22|32\n     4    leaf             sink        source.py:5|21|28\n")),Object(o.b)("p",null,"Show the source code at that callable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'[ run 1 > issue 1 > source.get_image ]\n>>> list\nIn source.convert [source.py:9|22|32]\n     4      command = "wget -q https:{}".format(url)\n     5      return os.system(command)\n     6\n     7  def convert() -> None:\n     8      image_link = input("image link: ")\n --\x3e 9      image = get_image(image_link)\n                              ^^^^^^^^^^\n')),Object(o.b)("p",null,"Move to the next callable and show source code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'[ run 1 > issue 1 > source.get_image ]\n>>> n\n     # \u2387  [callable]       [port]      [location]\n     1    leaf             source      source.py:8|17|22\n     2    source.convert   root        source.py:9|22|32\n     3    source.get_image formal(url) source.py:9|22|32\n --\x3e 4    leaf             sink        source.py:5|21|28\n\n[ run 1 > issue 1 > leaf ]\n>>> list\nIn source.get_image [source.py:5|21|28]\n     1  import os\n     2\n     3  def get_image(url: str) -> int:\n     4      command = "wget -q https:{}".format(url)\n --\x3e 5      return os.system(command)\n                             ^^^^^^^\n     6\n     7  def convert() -> None:\n     8      image_link = input("image link: ")\n     9      image = get_image(image_link)\n')),Object(o.b)("p",null,"Jump to the first callable and show source code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'[ run 1 > issue 1 > leaf ]\n>>> jump 1\n     # \u2387  [callable]       [port]      [location]\n --\x3e 1    leaf             source      source.py:8|17|22\n     2    source.convert   root        source.py:9|22|32\n     3    source.get_image formal(url) source.py:9|22|32\n     4    leaf             sink        source.py:5|21|28\n\n[ run 1 > issue 1 > leaf ]\n>>> list\nIn source.convert [source.py:8|17|22]\n     3  def get_image(url: str) -> int:\n     4      command = "wget -q https:{}".format(url)\n     5      return os.system(command)\n     6\n     7  def convert() -> None:\n --\x3e 8      image_link = input("image link: ")\n                         ^^^^^\n     9      image = get_image(image_link)\n')),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("h3",{id:"information-commands"},"Information commands"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"help"),": show the available commands"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"help COMMAND"),": show more info about a specific command"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"state"),": show state and debugging information"),Object(o.b)("h3",{id:"display-commands"},"Display commands"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"runs"),": list all completed static analysis runs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"issues"),": list all issues for the selected run"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"show"),": show info about selected issue"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"frames"),": show trace frames independently of an issue"),Object(o.b)("h3",{id:"selection-commands"},"Selection commands"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"analysis_output DIR"),": sets the location of the analysis output"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"run ID"),": select a specific run for browsing issues"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"latest_run KIND"),": select the latest run of the given kind"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"issue ID"),": select a specific issue for browsing a trace"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"frame ID"),": select a trace frame"),Object(o.b)("h3",{id:"trace-commands"},"Trace commands"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"trace"),": show a trace of the selected issue"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"prev"),"/",Object(o.b)("inlineCode",{parentName:"p"},"p"),": move backward within the trace"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"next"),"/",Object(o.b)("inlineCode",{parentName:"p"},"n"),": move forward within the trace"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"jump NUM"),": jump within a trace"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"branch"),": show and select alternative trace branches"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"list"),": show source code"),Object(o.b)("h3",{id:"debugging-commands"},"Debugging commands"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parents"),": show the callers of the current trace frame"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"details"),": additional details about the current trace frame"))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return t?r.a.createElement(d,c(c({ref:n},i),{},{components:t})):r.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);