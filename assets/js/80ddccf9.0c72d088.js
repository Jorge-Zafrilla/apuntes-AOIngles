"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8278],{8383:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=s(4848),i=s(8453);const l={sidebar_label:"Lesson 2: Variables: list, tuple and range",sidebar_position:2},r="Types of variables, list, tuple and range",a={id:"Apuntes python/Tema 2",title:"Types of variables, list, tuple and range",description:"Table of Contents",source:"@site/docs/Apuntes python/Tema 2.md",sourceDirName:"Apuntes python",slug:"/Apuntes python/Tema 2",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Lesson 2: Variables: list, tuple and range",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lesson 1: Structure, and Data Types",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 1"},next:{title:"Lesson 3: Dictionaries",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 3"}},d={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Types of variables",id:"types-of-variables",level:2},{value:"Description",id:"description",level:3},{value:"Variable Declaration",id:"variable-declaration",level:3},{value:"Examples:",id:"examples",level:4},{value:"Syntax",id:"syntax",level:3},{value:"Types of variables",id:"types-of-variables-1",level:3},{value:"<code>type()</code> function",id:"type-function",level:3},{value:"List",id:"list",level:2},{value:"Accessing List Elements",id:"accessing-list-elements",level:3},{value:"List Methods",id:"list-methods",level:2},{value:"The <code>append()</code> method",id:"the-append-method",level:3},{value:"Example:",id:"example",level:4},{value:"The <code>extend()</code> method",id:"the-extend-method",level:3},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"The <code>insert()</code> method",id:"the-insert-method",level:3},{value:"Example:",id:"example-3",level:4},{value:"The <code>pop()</code> method",id:"the-pop-method",level:3},{value:"Example:",id:"example-4",level:4},{value:"Example 2:",id:"example-2-1",level:4},{value:"The <code>remove()</code> method",id:"the-remove-method",level:3},{value:"Example 1:",id:"example-1-1",level:4},{value:"Example 2:",id:"example-2-2",level:4},{value:"The <code>sort()</code> method",id:"the-sort-method",level:3},{value:"Example 1:",id:"example-1-2",level:4},{value:"Example 2:",id:"example-2-3",level:4},{value:"The <code>reverse()</code> method",id:"the-reverse-method",level:3},{value:"Example:",id:"example-5",level:4},{value:"The <code>split()</code> method",id:"the-split-method",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Example 1:",id:"example-1-3",level:4},{value:"Example 2:",id:"example-2-4",level:4},{value:"Tuple",id:"tuple",level:2},{value:"Accessing Tuple Elements",id:"accessing-tuple-elements",level:3},{value:"Difference Between Lists and Tuples",id:"difference-between-lists-and-tuples",level:2},{value:"Range",id:"range",level:2},{value:"Example 1:",id:"example-1-4",level:4},{value:"Example 2:",id:"example-2-5",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"types-of-variables-list-tuple-and-range",children:"Types of variables, list, tuple and range"}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#types-of-variables",children:"Types of variables"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#list",children:"List"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#list-methods",children:"List Methods"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tuple",children:"Tuple"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#range",children:"Range"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"types-of-variables",children:"Types of variables"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["A variable is a space in a storage system that receives an ",(0,t.jsx)(n.strong,{children:"identifier"})," and holds information that is either known or unknown. In other words, a variable can be seen as a box where we store and exchange data of specific types."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Variables example",src:s(2114).A+"",width:"290",height:"174"})}),"\n",(0,t.jsx)(n.h3,{id:"variable-declaration",children:"Variable Declaration"}),"\n",(0,t.jsx)(n.p,{children:"In Python, when declaring a variable, we do not need to specify the type of data we are going to store in it, unlike in other programming languages."}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'box1 = "Hello"\r\nbox2 = 18\r\nbox3 = 18.1\r\nbox4 = True\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Types of variables",src:s(4989).A+"",width:"577",height:"190"})}),"\n",(0,t.jsxs)(n.p,{children:["As we see in the code, first the name of the variable is written, followed by the operator ",(0,t.jsx)(n.code,{children:"="})," (which in these cases is an assignment operator, not an equals sign), and then the data that it will store. Depending on the data we store in it, Python will determine the type of the variable."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["If the data to be stored is an ",(0,t.jsx)(n.code,{children:"string"}),", remember that it must be enclosed in quotation marks!"]})}),"\n",(0,t.jsx)(n.p,{children:"You should always first indicate the name of the variable and then its content, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"num = 17\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Variable names are sequences of letters and numbers, either uppercase or lowercase, but ",(0,t.jsx)(n.strong,{children:"always starting with a letter"}),". A variable should ",(0,t.jsx)(n.strong,{children:"never contain spaces"}),"; to separate words, we can use an underscore ",(0,t.jsx)(n.code,{children:"_"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"types-of-variables-1",children:"Types of variables"}),"\n",(0,t.jsx)(n.p,{children:"There are 3 most common types of variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Numeric:"})," Store numbers; within this category, we can find subtypes such as ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"float"}),", ",(0,t.jsx)(n.code,{children:"long"}),", and ",(0,t.jsx)(n.code,{children:"complex"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Text:"})," These are the classic variables that store strings of text as ",(0,t.jsx)(n.code,{children:"string"})," and ",(0,t.jsx)(n.code,{children:"char"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Boolean:"})," Store a value of True or False as ",(0,t.jsx)(n.code,{children:"bool"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["But in Python, variables can also be ",(0,t.jsx)(n.em,{children:"lists"}),", ",(0,t.jsx)(n.em,{children:"dictionaries"}),", ",(0,t.jsx)(n.em,{children:"tuples"})," (which we will cover later). Almost anything can be stored in them."]}),"\n",(0,t.jsxs)(n.h3,{id:"type-function",children:[(0,t.jsx)(n.code,{children:"type()"})," function"]}),"\n",(0,t.jsx)(n.p,{children:"You can determine the type of a variable using the built-in type() function, which allows you to know the type of a variable at a specific moment.\r\nTo call the type() function, simply write the function in the interpreter and pass the name of the variable as a parameter within the parentheses, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'box1 = "Hello"\r\ntype(box1)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'str'>\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you run the program, it will return the type of the variable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'box1 = "Hello"\r\nbox2 = 18\r\nbox3 = 18.1\r\nbox4 = True\r\n\r\nprint(type(box1))\r\nprint(type(box2))\r\nprint(type(box3))\r\nprint(type(box4))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'str'>\r\n<class 'int'>\r\n<class 'float'>\r\n<class 'bool'>\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"list",children:"List"}),"\n",(0,t.jsxs)(n.p,{children:["We can define a list as a contiguous storage area where we can store multiple and different types of data. ",(0,t.jsx)(n.strong,{children:"It can be edited and modified"})," using methods, making it mutable."]}),"\n",(0,t.jsxs)(n.p,{children:["To create a list, we simply declare it as we would a variable, but by storing its elements or items within ",(0,t.jsx)(n.strong,{children:"square brackets"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# List of numbers\r\nnumbers = [1,2,3,4,5,6,7,8,9]\r\n#List of boolean\r\nresponses = [False, True, True, False, False]\r\n#List of mixed values\r\ndata = ["Close", 53, 78.102, "Batoi", False]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Lists can also be created without specifying the elements they contain, as they are mutable and we can add elements later."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Lists can also contain other lists"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'#List inside other list\r\ndata = ["Close", 53, [45, "Python", True], "Batoi", False]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"accessing-list-elements",children:"Accessing List Elements"}),"\n",(0,t.jsxs)(n.p,{children:["To access the elements, we must consider that each element stored in a list is assigned an ",(0,t.jsx)(n.code,{children:"index"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["An index is a number that identifies the element within the group of elements or items, ",(0,t.jsx)(n.strong,{children:"always starting from zero"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Even if we modify the elements, the first one will always be zero, and the indices will increment from there."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Index   0     1    2      3      4\r\nitems = ["Hi", 54, False, 37.21, "Table"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["So, if I simply want to access the number 37.21 from the list ",(0,t.jsx)(n.em,{children:"items"}),", I must specify ",(0,t.jsx)(n.strong,{children:"the list followed by the index number in square brackets"})," that corresponds to it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Index   0     1    2      3      4\r\nitems = ["Hi", 54, False, 37.21, "Table"]\r\nprint(items[3])\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"37.21\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To access an element in a list that is inside another list, you first need to specify the index of the outer list and then the index of the inner list. In the example, the list ",(0,t.jsx)(n.code,{children:'[45, "Python", True]'})," has index ",(0,t.jsx)(n.strong,{children:"2"})," in the outer list, and within this list, the number 45 has index ",(0,t.jsx)(n.strong,{children:"0"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Index    0      1          2                3      4\r\n# Index                0     1        2\r\ndata = ["Close", 53, [45, "Python", True], "Batoi", False]\r\nprint(data[2][0])\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"45\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"list-methods",children:"List Methods"}),"\n",(0,t.jsxs)(n.h3,{id:"the-append-method",children:["The ",(0,t.jsx)(n.code,{children:"append()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["It is used to ",(0,t.jsx)(n.strong,{children:"add an element to the end of a list"}),". It is very simple to use: you just write the name of the list you want to modify, followed by a dot, the method (append in this case), and then the element to add inside parentheses."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Append example",src:s(6425).A+"",width:"914",height:"380"})}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'names1 = ["Marcos", "Roberto", "Elena", "Margarita"]\r\nprint(names1)\r\nnames1.append("Alex")\r\nprint(names1)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'["Marcos", "Roberto", "Elena", "Margarita"]\r\n["Marcos", "Roberto", "Elena", "Margarita", "Alex"]\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"the-extend-method",children:["The ",(0,t.jsx)(n.code,{children:"extend()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["It is useful for ",(0,t.jsx)(n.strong,{children:"adding multiple elements"})," from an iterable to ",(0,t.jsx)(n.strong,{children:"the end of a list"})," or for appending another list in Python. The ",(0,t.jsx)(n.code,{children:"extend()"})," method allows us to extend the list."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'names1 = ["Marcos", "Roberto", "Elena", "Margarita"]\r\nprint(names1)\r\nnames1.extend("Jose")\r\nprint(names1)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'["Marcos", "Roberto", "Elena", "Margarita"]\r\n["Marcos", "Roberto", "Elena", "Margarita", "J","o","s","e"]\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"mylist = [1, 2, 3, 4]\r\nmylist.extend([5, 6, 7])\r\nprint(mylist)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[1, 2, 3, 4, 5, 6, 7]\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"the-insert-method",children:["The ",(0,t.jsx)(n.code,{children:"insert()"})," method"]}),"\n",(0,t.jsx)(n.p,{children:"What if I want to add an element somewhere other than at the end of the list?"}),"\n",(0,t.jsxs)(n.p,{children:["To insert an element at a specific position, we can use the ",(0,t.jsx)(n.code,{children:"insert()"})," method in the same way as before. First, specify the name of the list, followed by a dot and the method (insert in this case). Then, ",(0,t.jsx)(n.strong,{children:"inside parentheses, provide the index where you want to insert the element, followed by a comma and the element itself"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Insert example",src:s(202).A+"",width:"1173",height:"407"})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'items = ["Chair", "Table", "Dish", "Glass"]\r\nprint(items)\r\nitems.insert(2, "Fork")\r\nprint(items)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'["Chair", "Table", "Dish", "Glass"]\r\n["Chair", "Table", "Fork", "Dish", "Glass"]\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"the-pop-method",children:["The ",(0,t.jsx)(n.code,{children:"pop()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["It is used to ",(0,t.jsx)(n.strong,{children:"remove an element from the list by specifying the index"})," of the element. Like the other methods, you only need to enter the list's name, followed by a dot and the method name (",(0,t.jsx)(n.code,{children:"pop()"})," in this case). Then, inside the parentheses, specify the index of the element to remove."]}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'items = [3.5, 113, "Table", 87.3, 654]\r\nprint(items)\r\nitems.pop(2)\r\nprint(items)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'[3.5, 113, "Table", 87.3, 654]\r\n[3.5, 113, 87.3, 654]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, it removes 'Table', which is at index 2 as specified within the parentheses. ",(0,t.jsx)(n.strong,{children:"If you do not provide an index to the pop method, it will remove the last element from the list."})]}),"\n",(0,t.jsxs)(n.p,{children:["When there is a list inside another and we want to delete an element from the inner list, ",(0,t.jsx)(n.strong,{children:"we must first indicate the index of the internal table in the external one"}),", in the example the internal list is at index 3 of the external list. Then ",(0,t.jsx)(n.strong,{children:"apply the method and indicate the index of the element you want to delete"}),', in the example below the string "House" has index 2.']}),"\n",(0,t.jsx)(n.h4,{id:"example-2-1",children:"Example 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'#Index    0      1      2               3             4\r\n#Index                        0     1      2     3\r\nitems = [True, "Yes", 4.23, [0.48,False,"House",47], 654]\r\nprint(items)\r\nitems[3].pop(2)\r\nprint(items)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'[True, "Yes", 4.23, [0.48,False,"House",47], 654]\r\n[True, "Yes", 4.23, [0.48,False,47], 654]\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"the-remove-method",children:["The ",(0,t.jsx)(n.code,{children:"remove()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["This method can also be used to remove an element from the list. The ",(0,t.jsx)(n.code,{children:"remove()"})," method allows us to remove an element from a list in Python by ",(0,t.jsx)(n.strong,{children:"specifying its value"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1-1",children:"Example 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'items = [3.5, 113, "Table", 87.3, 654]\r\nprint(items)\r\nitems.remove("Table")\r\nprint(items)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'[3.5, 113, "Table", 87.3, 654]\r\n[3.5, 113, 87.3, 654]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When there is a list inside another and we want to delete an element from the inner list, ",(0,t.jsx)(n.strong,{children:"we must first indicate the index of the internal table in the external one"}),", in the example the internal list is at index 3 of the external list. Then apply the method and indicate the element you want to delete, in the example below it is 0.48."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2-2",children:"Example 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'#Index    0      1      2               3             4\r\n#Index                        0     1      2     3\r\nitems = [True, "Yes", 4.23, [0.48,False,"House",47], 654]\r\nprint(items)\r\nitems[3].remove(0.48)\r\nprint(items)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'[True, "Yes", 4.23, [0.48,False,"House",47], 654]\r\n[True, "Yes", 4.23, [False,"House",47], 654]\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"the-sort-method",children:["The ",(0,t.jsx)(n.code,{children:"sort()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sort()"})," method will help us to ",(0,t.jsx)(n.strong,{children:"order the elements of a list"})," from smallest to largest."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1-2",children:"Example 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"grades = [7.8,5.3,3.2,9.9,6.6,2.5]\r\ngrades.sort()\r\nprint(grades)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[2.5, 3.2, 5.3, 6.6, 7.8, 9.9]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If we want the sort method to order the elements ",(0,t.jsx)(n.strong,{children:"from largest to smallest"}),", we must enter the argument ",(0,t.jsx)(n.code,{children:"reverse=True"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2-3",children:"Example 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"grades = [7.8,5.3,3.2,9.9,6.6,2.5]\r\ngrades.sort(reverse=True)\r\nprint(grades)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[9.9, 7.8, 6.6, 5.3, 3.2, 2.5]\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"the-reverse-method",children:["The ",(0,t.jsx)(n.code,{children:"reverse()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"reverse()"})," method will help us ",(0,t.jsx)(n.strong,{children:"reverse all the elements of a list"}),", as if we were seeing them through a mirror."]}),"\n",(0,t.jsx)(n.h4,{id:"example-5",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'letters = ["i","o","t","a","B"]\r\nletters.reverse()\r\nprint(letters)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'["B", "a", "t", "o", "i"]\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"the-split-method",children:["The ",(0,t.jsx)(n.code,{children:"split()"})," method"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"split()"})," method is used with ",(0,t.jsx)(n.code,{children:"string"}),", not with ",(0,t.jsx)(n.code,{children:"list"}),". It divides a string into smaller parts using a specific character or sequence of characters as the delimiter and returns those parts in a list."]}),"\n",(0,t.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"string.split(separator)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"string:"})," The string you want to divide."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"separator:"})," The character or sequence of characters used as the delimiter."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1-3",children:"Example 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'text = "Hello, how are you?"\r\ntext_divided = text.split(",")\r\nprint(text_divided)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'["Hello","how are you?"]\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2-4",children:"Example 2:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Note:"})})," By default, if no separator is specified, the string is split by whitespace."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'text = "Hello, how are you?"\r\ntext_divided = text.split()\r\nprint(text_divided)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'["Hello,","how","are","you?"]\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"tuple",children:"Tuple"}),"\n",(0,t.jsx)(n.p,{children:"A tuple is similar to a list in that it is a contiguous storage area where we can store multiple and different elements. However, there are some distinct similarities and differences that you should always remember."}),"\n",(0,t.jsx)(n.p,{children:"Tuples are variables where different types of structured data are stored and must be ordered from the beginning."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tuples are immutable"}),"; they ",(0,t.jsx)(n.strong,{children:"cannot be modified"})," during the execution of the program. Therefore, when creating a tuple, you must include the elements to be stored. Whenever we create a tuple, ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"we must use PARENTHESES"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Tuple of numbers\r\nnumbers = (1, 579.24, 3.6, 4, 5, 6, 7)\r\n#Tuple of boolean\r\nresponses = (False, True, True, False, False)\r\n#List of mixed values\r\ndata = ("Close", 53, 78.102, "Batoi", False)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"accessing-tuple-elements",children:"Accessing Tuple Elements"}),"\n",(0,t.jsxs)(n.p,{children:["To access the elements, we must consider that each element stored in a tuple is assigned an ",(0,t.jsx)(n.code,{children:"index"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["An index is a number that identifies the element within the group of elements or items, ",(0,t.jsx)(n.strong,{children:"always starting from zero"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Even if we modify the elements, the first one will always be zero, and the indices will increment from there."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Index   0     1     2      3      4\r\nitems = (183, True, "ABC", 59.20, "End")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To access the values of a tuple, it is done exactly the same way as in a list, using ",(0,t.jsx)(n.strong,{children:"square brackets"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"(NOT PARENTHESES)"})}),'.So, if I simply want to access the string "ABC" from the tuple ',(0,t.jsx)(n.em,{children:"items"}),", I must specify ",(0,t.jsx)(n.strong,{children:"the tuple followed by the index number in square brackets"})," that corresponds to it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Index   0     1     2      3      4\r\nitems = (183, True, "ABC", 59.20, "End")\r\nprint(items[2])\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"ABC\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"difference-between-lists-and-tuples",children:"Difference Between Lists and Tuples"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"List"}),(0,t.jsx)(n.th,{children:"Tuple"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Can be modified, are dynamic"}),(0,t.jsx)(n.td,{children:"Cannot be modified, are static"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Use square brackets ",(0,t.jsx)(n.code,{children:"[]"})]}),(0,t.jsxs)(n.td,{children:["Use parentheses ",(0,t.jsx)(n.code,{children:"()"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Elements are separated by commas"}),(0,t.jsx)(n.td,{children:"Elements are separated by commas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"list = [1, 2, 3]"}),(0,t.jsx)(n.td,{children:"tuple = (1, 2, 3)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Accessing elements: list[index]"}),(0,t.jsx)(n.td,{children:"Accessing elements: tuple[index]"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"range",children:"Range"}),"\n",(0,t.jsxs)(n.p,{children:["Creates a range of values as specified by your arguments. Specify ",(0,t.jsx)(n.strong,{children:"where to start"})," selecting, ",(0,t.jsx)(n.strong,{children:"where to end"}),", and the ",(0,t.jsx)(n.strong,{children:"intervals"}),".\r\nIt cannot be modified except at the time of creation, or after instructing the interpreter to store it in a variable."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Range example",src:s(8738).A+"",width:"513",height:"249"})}),"\n",(0,t.jsxs)(n.p,{children:["If you run, for example, ",(0,t.jsx)(n.code,{children:"range(5)"}),", you won\u2019t notice anything happening, but something did happen: a sequence of numbers as you specified is stored in memory. However, it is still invisible because it doesn\u2019t exist as an object you can see. To be able to view it, we must first convert it into a list. To do this, we use the ",(0,t.jsx)(n.code,{children:"list()"})," function."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1-4",children:"Example 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"x = list(range(5))\r\nprint(x)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[0,1,2,3,4]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2-5",children:"Example 2:"}),"\n",(0,t.jsx)(n.p,{children:"Let's create a range that stores in a list all even values between 2 and 20:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"x = list(range(2,20,2))\r\nprint(x)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"[2, 4, 6, 8, 10, 12, 14, 16, 18]\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6425:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/append-5a1c64158df580512e0fbdc02a954dbb.png"},202:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/insert-a72c4095412d80260d3dbd58a226b7c2.png"},8738:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/range-ex-c1fa4b588634a949b5115e9523f2b72f.png"},4989:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/typesofvariable-0a4ed781de99cfeba28f04cfedcc6c37.png"},2114:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);