"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[767],{5318:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||o;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4257:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],l={},p="tools-language",d={unversionedId:"tools/tools-language",id:"tools/tools-language",title:"tools-language",description:"",source:"@site/docs/tools/tools-language.mdx",sourceDirName:"tools",slug:"/tools/tools-language",permalink:"/rnx-kit/docs/tools/tools-language",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/tools-language.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"third-party-notices",permalink:"/rnx-kit/docs/tools/third-party-notices"},next:{title:"tools-node",permalink:"/rnx-kit/docs/tools/tools-node"}},u={},m=[],s={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-language"},"tools-language"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rnx-kit/tools-language")," is a collection of supplemental JavaScript functions\nand types."),(0,o.kt)("p",null,"You can import the entire package, or, to save space, import individual\ncategories:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import * from "@rnx-kit/tools-language";\n\nimport * from "@rnx-kit/tools-language/function";\nimport * from "@rnx-kit/tools-language/math";\nimport * from "@rnx-kit/tools-language/properties";\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"array"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"addRange(to, from, start, end)")),(0,o.kt)("td",{parentName:"tr",align:null},"Add elements from one array to another, returning the resulting array.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"array"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isNonEmptyArray(array)")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns whether the specified object is a non-empty array.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"array"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"toIndex(array, offset)")),(0,o.kt)("td",{parentName:"tr",align:null},"Convert an array offset to an array index. An offset can be positive or negative, while an index is always positive.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tryInvoke(fn)")),(0,o.kt)("td",{parentName:"tr",align:null},"Invoke the given function, returning its result or a thrown error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"math"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isApproximatelyEqual(f1, f2, tolerance)")),(0,o.kt)("td",{parentName:"tr",align:null},'Decide if two numbers, integer or decimal, are "approximately" equal. They\'re equal if they are close enough to be within the given tolerance.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"extendObject(obj, extendedProps)")),(0,o.kt)("td",{parentName:"tr",align:null},"Add properties to an object, changing it from its current type to an extended type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"extendObjectArray(arr, extendedProps)")),(0,o.kt)("td",{parentName:"tr",align:null},"Add properties to each object in an array, changing the object from its current type to an extended type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hasProperty(obj, property)")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns whether ",(0,o.kt)("inlineCode",{parentName:"td"},"property")," exists in ",(0,o.kt)("inlineCode",{parentName:"td"},"obj"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pickValue(obj, key, name)")),(0,o.kt)("td",{parentName:"tr",align:null},"Pick the value for property ",(0,o.kt)("inlineCode",{parentName:"td"},"key")," from ",(0,o.kt)("inlineCode",{parentName:"td"},"obj")," and return it in a new object. If ",(0,o.kt)("inlineCode",{parentName:"td"},"name")," is given, use it in the new object, instead of ",(0,o.kt)("inlineCode",{parentName:"td"},"key"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pickValues(obj, keys, names)")),(0,o.kt)("td",{parentName:"tr",align:null},"Pick the value for each ",(0,o.kt)("inlineCode",{parentName:"td"},"key")," property from ",(0,o.kt)("inlineCode",{parentName:"td"},"obj")," and return each one in a new object. If ",(0,o.kt)("inlineCode",{parentName:"td"},"names")," are given, use them in the new object, instead of ",(0,o.kt)("inlineCode",{parentName:"td"},"keys"),".")))))}c.isMDXComponent=!0}}]);