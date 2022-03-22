"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52292],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=i(a),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82904:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],s={id:"search-tables",title:"Search tables",slug:"/search-overview/search-tables"},c="Search tables",i={unversionedId:"search-overview/search-tables",id:"search-overview/search-tables",title:"Search tables",description:"You can use Search tables to view, compare, and sort Search items by properties. From the table you can also modify data and export data to a .csv file or JSON.",source:"@site/docs/search-overview/search-tables.md",sourceDirName:"search-overview",slug:"/search-overview/search-tables",permalink:"/docs/search-overview/search-tables",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/search-overview/search-tables.md",tags:[],version:"current",frontMatter:{id:"search-tables",title:"Search tables",slug:"/search-overview/search-tables"},sidebar:"tutorialSidebar",previous:{title:"Search Settings and Preferences",permalink:"/docs/search-providers/search-settings"},next:{title:"Search usage",permalink:"/docs/search-usage"}},u={},p=[{value:"View Search tables",id:"view-search-tables",level:2},{value:"Add columns",id:"add-columns",level:2},{value:"Customize columns",id:"customize-columns",level:2},{value:"Arrange columns",id:"arrange-columns",level:2},{value:"Delete columns",id:"delete-columns",level:2},{value:"Show/hide columns",id:"showhide-columns",level:2},{value:"Reset tables",id:"reset-tables",level:2},{value:"Save tables",id:"save-tables",level:2},{value:"Export table data",id:"export-table-data",level:2},{value:"Modify table data",id:"modify-table-data",level:2}],h={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search-tables"},"Search tables"),(0,o.kt)("p",null,"You can use Search tables to view, compare, and sort Search items by properties. From the table you can also modify data and export data to a .csv file or JSON."),(0,o.kt)("h2",{id:"view-search-tables"},"View Search tables"),(0,o.kt)("p",null,"To view your search in table format, enter a search query and click the table icon in the bottom right of the Unity Search window."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-tables-intro.png",alt:"search-tables-intro.png"})),(0,o.kt)("p",null,"By default, the table will show the Label and Description columns unless you have added new columns or you are using a select{} statement that creates new columns from selectors."),(0,o.kt)("p",null,"Click the column header to sort the search results in ascending or descending order by that column property."),(0,o.kt)("p",null,"Click the reset icon (",(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-reset-icon.png",alt:"search-reset-icon.png"}),") if no columns appear, or if the columns appear from the previous search and you want to reset to the default column layout."),(0,o.kt)("h2",{id:"add-columns"},"Add columns"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-tables-add-column.png",alt:"search-tables-add-column.png"})),(0,o.kt)("p",null,"To add a new column in the search table, click the plus icon (+) and choose a property or selector."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-tables-add-column-select.png",alt:"search-tables-add-column-select.png"})),(0,o.kt)("h2",{id:"customize-columns"},"Customize columns"),(0,o.kt)("p",null,"You can customize the name, icon, alignment and whether the column is sortable."),(0,o.kt)("p",null,"To edit your column, right-click the column header and select  ",(0,o.kt)("strong",{parentName:"p"},"Edit ","<","column name",">")," ."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-tables-edit-column.png",alt:"search-tables-edit-column.png"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u683c\u5f0f")),(0,o.kt)("td",{parentName:"tr",align:null},"Changes the data about the results to another format. If the result has no data for the new format (for example asking for color information from position data), the cell will be blank.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Icon"),(0,o.kt)("td",{parentName:"tr",align:null},"Changes the icon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u540d\u79f0")),(0,o.kt)("td",{parentName:"tr",align:null},"Changes the name of the column")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Alignment")),(0,o.kt)("td",{parentName:"tr",align:null},"Changes the alignment of the column")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Sortable")),(0,o.kt)("td",{parentName:"tr",align:null},"Select to make the column sortable in the table")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u8def\u5f84")),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the path of the property or sub property which is useful if you need to understand where a property is located.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Selector")),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates which property is accessed within the search query. This is useful if you wish to create queries for specific properties, for instance if you have a column for the Height property, you can check the Selector field and create a height search query for Assets using ",(0,o.kt)("inlineCode",{parentName:"td"},"#m_Height"),".")))),(0,o.kt)("h2",{id:"arrange-columns"},"Arrange columns"),(0,o.kt)("p",null,"Click and hold the column header and drag it to rearrange the columns."),(0,o.kt)("h2",{id:"delete-columns"},"Delete columns"),(0,o.kt)("p",null,"Right-click the column header and select  ",(0,o.kt)("strong",{parentName:"p"},"Remove ","<","column name",">")," ."),(0,o.kt)("h2",{id:"showhide-columns"},"Show/hide columns"),(0,o.kt)("p",null,"Once your table is set up, you may wish to hide certain columns temporarily without deleting them."),(0,o.kt)("p",null,"Right-click in the column header area and select  ",(0,o.kt)("strong",{parentName:"p"},"Show Columns ",">"," ","<","name of column",">")," . The columns with a checkmark appear in the table."),(0,o.kt)("h2",{id:"reset-tables"},"Reset tables"),(0,o.kt)("p",null,"Reset sets the table back to the default, with the Label and Description columns or will include columns specified in the select{} statement."),(0,o.kt)("p",null,"Click the reset icon (",(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-reset-icon.png",alt:"search-reset-icon.png"}),") to remove all added columns or if the columns appear from the previous search and you want to reset to the default column layout."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  If you want to keep your current search table column layout, save your table before resetting."),(0,o.kt)("h2",{id:"save-tables"},"Save tables"),(0,o.kt)("p",null,"To save your search table column layout:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the Save icon in the  ",(0,o.kt)("strong",{parentName:"p"},"Saved Searches"),"  User or Project panel area, or the Save icon to the right of the Search field."),(0,o.kt)("p",{parentName:"li"},"Unity Search includes the table layout with the saved search query. When a query is saved with a table its icon changes to the table icon."))),(0,o.kt)("h2",{id:"export-table-data"},"Export table data"),(0,o.kt)("p",null,"You can export table data in JSON or .csv format. When you save using JSON, you can open the saved table data in Unity. This is static data from the time that you saved it that does not refresh."),(0,o.kt)("p",null,"To export table data:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs.unity3d.com/cn/2022.1/uploads/Main/search-tables-export-data.png",alt:"search-tables-export-data.png"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the Save drop-down menu, choose  ",(0,o.kt)("strong",{parentName:"li"},"Export Report"),"  (for JSON) or  ",(0,o.kt)("strong",{parentName:"li"},"Export CSV")," ."),(0,o.kt)("li",{parentName:"ol"},"Name your file, choose a location to store your file, then click  ",(0,o.kt)("strong",{parentName:"li"},"Save")," ")),(0,o.kt)("h2",{id:"modify-table-data"},"Modify table data"),(0,o.kt)("p",null,"You can modify data in the table using the  ",(0,o.kt)("strong",{parentName:"p"},"Experimental"),"  format."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Note:"),"  When you change the data in the Unity Search table using the Experimental format, Search is not aware of any dependencies on the data. No changes to the custom Inspector code related to property editing are triggered. To ensure that your changes include dependencies or linked changes which are often embedded in custom code for common properties, make your changes in the Inspector instead."),(0,o.kt)("p",null,"To change the column to  ",(0,o.kt)("strong",{parentName:"p"},"Experimental")," :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right-click in the column header area and select  ",(0,o.kt)("strong",{parentName:"li"},"Column Format ",">"," Experimental",">")," ."),(0,o.kt)("li",{parentName:"ol"},"Choose either ",(0,o.kt)("a",{parentName:"li",href:"/docs/text-scene-format/format-description"},"Serialized")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/sl-shader/sl-properties"},"Material")," Property. The data in the column will now be editable.")))}d.isMDXComponent=!0}}]);