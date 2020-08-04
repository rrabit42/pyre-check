(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(10),o=(t(0),t(173)),a={id:"configuration",title:"Configuring Pyre",sidebar_label:"Configuring Pyre"},c={id:"configuration",title:"Configuring Pyre",description:"Persistent Configuration",source:"@site/../docs/configuration.md",permalink:"/docs/configuration",sidebar_label:"Configuring Pyre",sidebar:"overview",previous:{title:"Guided Tour",permalink:"/docs/guided-tour"},next:{title:"Gradual Typing",permalink:"/docs/gradual-typing"}},l=[{value:"Persistent Configuration",id:"persistent-configuration",children:[]},{value:"Local Configuration",id:"local-configuration",children:[{value:"Nested Local Configurations",id:"nested-local-configurations",children:[]}]},{value:"Command Line Arguments and Flags",id:"command-line-arguments-and-flags",children:[{value:"Positional Arguments",id:"positional-arguments",children:[]}]},{value:"Flags",id:"flags",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"persistent-configuration"},"Persistent Configuration"),Object(o.b)("p",null,"The recommended way to use Pyre is with a configuration file set.\nYou can generate an initial configuration in the root of your project with"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ pyre init\n")),Object(o.b)("p",null,"This will create a basic configuration file at ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," containing,\nfor example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'{\n  "binary": "/Library/Frameworks/Python.framework/Versions/3.6/bin/pyre.bin",\n  "source_directories": [\n    "."\n  ]\n}\n')),Object(o.b)("p",null,"You can extend this configuration to configure Pyre for your project's specific\nsetup and needs. The following configuration options are supported:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"source_directories"),": List of paths to type check. Defaults to current directory."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"search_path"),": List of paths to Python modules to include in the typing\nenvironment. For example, typeshed third-party modules. Pyre will use those\npaths to build up the typing environment. Note that if the same Python module is\nfound both in ",Object(o.b)("inlineCode",{parentName:"p"},"source_directories")," and ",Object(o.b)("inlineCode",{parentName:"p"},"search_path"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"search_path")," version\ntakes precendence. If the same Python module is found in two different\n",Object(o.b)("inlineCode",{parentName:"p"},"search_path"),"s, the version that belongs to the path that comes earlier takes\nprecedence."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"exclude"),": List of regular expressions for files and directories that should be\ncompletely ignored by Pyre. The regular expression will be matched against the\n",Object(o.b)("em",{parentName:"p"},"full")," path of files as opposed to their relative path."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ignore_all_errors"),": A list of paths to omit from type-checking. This may be\nuseful for generated files, virtualenv directories, etc.  These should be paths\nrelative to the location of the configuration file (or the local configuration\nif applicable).  These can also include basic globs using *. ",Object(o.b)("strong",{parentName:"p"},"Note"),": files\nmatching these paths will still be processed (i.e. type and module names in those files are still visible to Pyre). Please refer to the ",Object(o.b)("inlineCode",{parentName:"p"},"exclude"),"\nconfiguration item if you have files that are intended to be hidden from Pyre."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"binary"),": Location of pyre binary. This can be specified to gradually upgrade a Pyre\nbinary in a CI setting."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"logger"),": If set, Pyre will invoke the binary passing it statistics in JSON format.\nThe statistics contain information about Pyre's performance as well as information about\nthe project's type coverage."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"typeshed"),": Path to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"Typeshed")," standard library, which\nprovides typed stubs for library functions."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"workers"),": Number of workers to spawn for multiprocessing."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"extensions"),": Consider extensions in this list equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},".py")," for type checking.\nEmpty string indicates extensionless files."),Object(o.b)("h2",{id:"local-configuration"},"Local Configuration"),Object(o.b)("p",null,"If you have sub-projects within your project root that you would like to run Pyre on, you\ncan create a ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration.local")," at the root of your subproject and override any\nof the fields set in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," above."),Object(o.b)("p",null,"When calling Pyre, the nearest local configuration at or above the current directory will be used.\nYou can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--local-configuration")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"-l"),") flag to invoke Pyre on a project that includes a\nlocal configuration, while outside its source directory. It works like ",Object(o.b)("inlineCode",{parentName:"p"},"make -C"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ls project\n  .pyre_configuration.local   project_file.py   ...\n$ pyre -l project\n  Checking...\n")),Object(o.b)("h3",{id:"nested-local-configurations"},"Nested Local Configurations"),Object(o.b)("p",null,"Nesting local configurations is not recommended. The configuration should live at the root of your\nproject unit and inclusion/exclusion of files from type checking can be done by specifying sources, using\n",Object(o.b)("inlineCode",{parentName:"p"},"ignore_all_errors"),", or by adding ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/error-suppression"}),"local suppression"),"."),Object(o.b)("p",null,"If in rare cases the nested configuration cannot be combined upward and the parent cannot be split apart, the\nparent configuration must list the directory containing the nested configuration in its ",Object(o.b)("inlineCode",{parentName:"p"},"ignore_all_errors")," field.\nPyre will warn if this is not the case, which prevents the possibility of introducing conflicting type errors."),Object(o.b)("h2",{id:"command-line-arguments-and-flags"},"Command Line Arguments and Flags"),Object(o.b)("p",null,"The Pyre command line flags can be summarized by running ",Object(o.b)("inlineCode",{parentName:"p"},"pyre --help")," or ",Object(o.b)("inlineCode",{parentName:"p"},"pyre -h"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ pyre --help\nusage: pyre [-h] [-l LOCAL_CONFIGURATION] [--version] [--binary-version]\n            [--show-error-traces] [--output {text,json}] [--verbose] [-n]\n            [--hide-parse-errors] [--target TARGETS]\n            [--build] [--source-directory SOURCE_DIRECTORIES]\n            [--search-path SEARCH_PATH] [--preserve-pythonpath]\n            [--binary BINARY] [--exclude EXCLUDE] [--typeshed TYPESHED]\n            [--save-initial-state-to SAVE_INITIAL_STATE_TO]\n            {analyze, check, kill, incremental, initialize init, query,\n            rage, restart, start, stop} ...\n\npositional arguments:\n  {analyze, check, kill, incremental, initialize (init), query, rage, restart, start, stop}\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -l LOCAL_CONFIGURATION, --local-configuration LOCAL_CONFIGURATION\n                        Use a local configuration\n  --version             show program's version number and exit\n  --binary-version      Print the pyre.bin version to be used\n  --show-error-traces   Display errors trace information\n  --output {text,json}  How to format output\n  --verbose             Enable verbose logging\n  -n, --noninteractive  Disable interactive logging\n  --search-path SEARCH_PATH\n                        Add an additional directory of modules and stubs to include in the type environment\n  --preserve-pythonpath\n                        Preserve the value of the PYTHONPATH environment variable and inherit the current python environment's search path\n  --binary BINARY       Location of the pyre binary\n  --exclude EXCLUDE     Exclude files and directories matching this regexp from parsing\n  --typeshed TYPESHED   Location of the typeshed stubs\n  --save-initial-state-to SAVE_INITIAL_STATE_TO\n                        Path to serialize pyre's initial state to.\n\nbuck:\n  --target TARGETS      The buck target to check\n  --build               Freshly build all the necessary artifacts.\n\nsource-directories:\n  --source-directory SOURCE_DIRECTORIES\n                        The source directory to check\n")),Object(o.b)("h3",{id:"positional-arguments"},"Positional Arguments"),Object(o.b)("p",null,"If ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/watchman/docs/install/"}),"Watchman")," is\ninstalled, running ",Object(o.b)("inlineCode",{parentName:"p"},"pyre")," with no positional arguments defaults to incremental,\notherwise defaults to check."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"check"),": Run Pyre."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"kill"),": Kill the Pyre server."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"incremental"),": Run Pyre and spin up a Pyre server, which listens to watchman changes in\nyour repository, and to changes reported by VSCode or Nuclide editors via LSP Protocol.\nSubsequent runs of Pyre will be much faster than running Pyre from scratch with ",Object(o.b)("inlineCode",{parentName:"p"},"check"),".\nRunning ",Object(o.b)("inlineCode",{parentName:"p"},"pyre")," with no positional arguments defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"pyre incremental"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"initialize"),", ",Object(o.b)("inlineCode",{parentName:"p"},"init"),": Generate a basic ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," file in the current directory.\nSearches for a path to your Pyre binary and typeshed stubs."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"rage"),": Print server logs for debugging or for context when reporting server errors."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"restart"),": Restart the Pyre server."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"start"),": Start the Pyre server."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"stop"),": Stop the Pyre server."),Object(o.b)("h2",{id:"flags"},"Flags"),Object(o.b)("p",null,"These flags can be passed in before any of the positional arguments above. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'pyre --source-directory "." --noninteractive check\npyre --source-directory "." restart\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--local-configuration LOCAL_CONFIGURATION"),": Call Pyre specifying the path to a local\nconfiguration outside of the current working directory."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--noninteractive"),": Disable interactive logging, which by default overwrites intermediate\nlogging output and adds colors for a more streamlined user experience.\nNon-interactive mode ensures all terminal output remains visible."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--output {text, json}"),": Formatting for error return values. Defaults to text."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--preserve-pythonpath"),": Use the ",Object(o.b)("inlineCode",{parentName:"p"},"$PYTHONPATH")," environment variable to search for external\nsources, along with the current environment's search path. This environment variable is\nignored otherwise."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--search-path SEARCH_PATH"),": Provide additional stubs or modules external to the project\nbeing type-checked. Can also be set in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration")," or often lives in the\n",Object(o.b)("inlineCode",{parentName:"p"},"$PYTHONPATH")," environment variable (see ",Object(o.b)("inlineCode",{parentName:"p"},"--preserve-pythonpath"),")."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--show-error-traces"),": Display more verbose error messages which include a more detailed\nreason and relevant source code locations (for example, what line a type conflicting\ntype was specified on)."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--source-directory SOURCE_DIRECTORY"),": Provide a path to the source root to check. Can also\nbe specified in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--typeshed TYPESHED"),": Path to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/python/typeshed"}),"Typeshed")," standard library,\nwhich provides typed stubs for library functions. This can also be set in ",Object(o.b)("inlineCode",{parentName:"p"},".pyre_configuration"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--verbose"),": Enable verbose logging. Most useful when used in conjunction with ",Object(o.b)("inlineCode",{parentName:"p"},"--noninteractive"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--version"),": Print the current version of Pyre."))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,h=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return t?i.a.createElement(h,c(c({ref:n},s),{},{components:t})):i.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);