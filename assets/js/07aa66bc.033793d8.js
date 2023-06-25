"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(i,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"bottomsheetbackdrop",title:"BottomSheetBackdrop",description:"a pre-built BottomSheet backdrop implementation with configurable props.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetbackdrop"},o=void 0,p={unversionedId:"components/bottomsheetbackdrop",id:"components/bottomsheetbackdrop",title:"BottomSheetBackdrop",description:"a pre-built BottomSheet backdrop implementation with configurable props.",source:"@site/docs/components/bottomsheetbackdrop.md",sourceDirName:"components",slug:"/components/bottomsheetbackdrop",permalink:"/react-native-bottom-sheet/components/bottomsheetbackdrop",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/components/bottomsheetbackdrop.md",tags:[],version:"current",frontMatter:{id:"bottomsheetbackdrop",title:"BottomSheetBackdrop",description:"a pre-built BottomSheet backdrop implementation with configurable props.",image:"/img/bottom-sheet-preview.gif",slug:"/components/bottomsheetbackdrop"},sidebar:"packages",previous:{title:"BottomSheetVirtualizedList",permalink:"/react-native-bottom-sheet/components/bottomsheetvirtualizedlist"},next:{title:"BottomSheetFooter",permalink:"/react-native-bottom-sheet/components/bottomsheetfooter"}},i={},d=[{value:"Props",id:"props",level:2},{value:"<code>animatedIndex</code>",id:"animatedindex",level:3},{value:"<code>animatedPosition</code>",id:"animatedposition",level:3},{value:"<code>opacity</code>",id:"opacity",level:3},{value:"<code>appearsOnIndex</code>",id:"appearsonindex",level:3},{value:"<code>disappearsOnIndex</code>",id:"disappearsonindex",level:3},{value:"<code>enableTouchThrough</code>",id:"enabletouchthrough",level:3},{value:"<code>pressBehavior</code>",id:"pressbehavior",level:3},{value:"Example",id:"example",level:2}],m={toc:d},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A pre-built BottomSheet backdrop implementation with configurable props."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"Inherits ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,r.kt)("h3",{id:"animatedindex"},(0,r.kt)("inlineCode",{parentName:"h3"},"animatedIndex")),(0,r.kt)("p",null,"Current sheet position index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Animated.SharedValue<number",">"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"YES")))),(0,r.kt)("h3",{id:"animatedposition"},(0,r.kt)("inlineCode",{parentName:"h3"},"animatedPosition")),(0,r.kt)("p",null,"Current sheet position."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Animated.SharedValue<number",">"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"YES")))),(0,r.kt)("h3",{id:"opacity"},(0,r.kt)("inlineCode",{parentName:"h3"},"opacity")),(0,r.kt)("p",null,"Backdrop opacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"appearsonindex"},(0,r.kt)("inlineCode",{parentName:"h3"},"appearsOnIndex")),(0,r.kt)("p",null,"Snap point index when backdrop will appears on."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"disappearsonindex"},(0,r.kt)("inlineCode",{parentName:"h3"},"disappearsOnIndex")),(0,r.kt)("p",null,"Snap point index when backdrop will disappears on."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"enabletouchthrough"},(0,r.kt)("inlineCode",{parentName:"h3"},"enableTouchThrough")),(0,r.kt)("p",null,"Enable touch through backdrop component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h3",{id:"pressbehavior"},(0,r.kt)("inlineCode",{parentName:"h3"},"pressBehavior")),(0,r.kt)("p",null,"What should happen when user press backdrop?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none"),": do nothing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"close"),": close the sheet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collapse"),": collapse the sheet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"N"),": snap point index.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BackdropPressBehavior")," ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},"'close'"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useCallback, useMemo, useRef } from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  // ref\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);\n\n  // callbacks\n  const handleSheetChanges = useCallback((index: number) => {\n    console.log('handleSheetChanges', index);\n  }, []);\n\n  // renders\n  const renderBackdrop = useCallback(\n    props => (\n      <BottomSheetBackdrop\n        {...props}\n        disappearsOnIndex={1}\n        appearsOnIndex={2}\n      />\n    ),\n    []\n  );\n  return (\n    <View style={styles.container}>\n      <BottomSheet\n        ref={bottomSheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        backdropComponent={renderBackdrop}\n        onChange={handleSheetChanges}\n      >\n        <View style={styles.contentContainer}>\n          <Text>Awesome \ud83c\udf89</Text>\n        </View>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: 'grey',\n  },\n  contentContainer: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n\nexport default App;\n")))}s.isMDXComponent=!0}}]);