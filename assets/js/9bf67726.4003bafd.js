"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5860],{2902:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(4848),i=s(8453);const r={sidebar_label:"Lesson 1: Structure, and Data Types",sidebar_position:1},a="Introduction to Python, print(),input(), Structure, and Data Types",l={id:"Apuntes python/Tema 1",title:"Introduction to Python, print(),input(), Structure, and Data Types",description:"Table of Contents",source:"@site/docs/Apuntes python/Tema 1.md",sourceDirName:"Apuntes python",slug:"/Apuntes python/Tema 1",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Lesson 1: Structure, and Data Types",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python notes",permalink:"/apuntes-AOIngles/docs/category/python-notes"},next:{title:"Lesson 2: Operators and Conditionals",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 2"}},o={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Introduction to Python",id:"introduction-to-python",level:2},{value:"What is a function?",id:"what-is-a-function",level:3},{value:"Types of Functions",id:"types-of-functions",level:3},{value:"<code>print()</code> Function",id:"print-function",level:2},{value:"Important!",id:"important",level:3},{value:"Variables as arguments in the <code>print()</code> function",id:"variables-as-arguments-in-the-print-function",level:3},{value:"Using commas <code>,</code> to combine text and variables:",id:"using-commas--to-combine-text-and-variables",level:4},{value:"Using f-strings to include variable values in strings:",id:"using-f-strings-to-include-variable-values-in-strings",level:4},{value:"<code>input()</code> Function",id:"input-function",level:2},{value:"Type Conversion",id:"type-conversion",level:3},{value:"Type Conversion Example",id:"type-conversion-example",level:3},{value:"Structure and Data Types",id:"structure-and-data-types",level:2},{value:"Simple Data Types",id:"simple-data-types",level:3},{value:"Example:",id:"example",level:4},{value:"Structured Data Types",id:"structured-data-types",level:3},{value:"Example:",id:"example-1",level:4},{value:"Types of variables",id:"types-of-variables",level:2},{value:"Description",id:"description",level:3},{value:"Variable Declaration",id:"variable-declaration",level:3},{value:"Examples:",id:"examples",level:4},{value:"Syntax",id:"syntax",level:3},{value:"Types of variables",id:"types-of-variables-1",level:3},{value:"<code>type()</code> function",id:"type-function",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"introduction-to-python-printinput-structure-and-data-types",children:["Introduction to Python, ",(0,t.jsx)(n.code,{children:"print()"}),",",(0,t.jsx)(n.code,{children:"input()"}),", Structure, and Data Types"]}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#introduction-to-python",children:"Introduction to Python"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"#print-function",children:[(0,t.jsx)(n.code,{children:"print()"})," Function"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"#input-function",children:[(0,t.jsx)(n.code,{children:"input()"})," Function"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#structure-and-data-types",children:"Structure and Data Types"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#types-of-variables",children:"Types of variables"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"introduction-to-python",children:"Introduction to Python"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interpreted"}),": The interpreter translates our code as needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamically Typed"}),": Allows mutation (transformation) of variables."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cross-Platform"}),": Can be executed on any operating system."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"what-is-a-function",children:"What is a function?"}),"\n",(0,t.jsx)(n.p,{children:"A function is a set of lines of code that perform a specific task and can take arguments to modify its behavior and output data. Functions allow us to implement operations frequently used in a program, reducing the amount of code."}),"\n",(0,t.jsx)(n.h3,{id:"types-of-functions",children:"Types of Functions"}),"\n",(0,t.jsx)(n.p,{children:'There are two types of functions: those we can create and those pre-defined by the language. Many functions can be "called" and used without being explicitly declared by us.'}),"\n",(0,t.jsxs)(n.h2,{id:"print-function",children:[(0,t.jsx)(n.code,{children:"print()"})," Function"]}),"\n",(0,t.jsxs)(n.p,{children:["One of the first functions we should learn is the ",(0,t.jsx)(n.code,{children:"print()"})," function. This function simply prints on the screen whatever we specify as an argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("Hello World!")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Hello World!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"important",children:"Important!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Text must ",(0,t.jsx)(n.strong,{children:"always"})," be in quotes, otherwise, Python will interpret it as an object that does not exist, resulting in a syntax error."]}),"\n",(0,t.jsxs)(n.li,{children:["Always respect the syntax of function calls in Python by placing parentheses after the function name, even if no arguments are specified. For example: ",(0,t.jsx)(n.code,{children:"print()"}),", which will not print anything but will not cause an error."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"variables-as-arguments-in-the-print-function",children:["Variables as arguments in the ",(0,t.jsx)(n.code,{children:"print()"})," function"]}),"\n",(0,t.jsxs)(n.p,{children:["There are ",(0,t.jsx)(n.strong,{children:"two ways"})," to do it:"]}),"\n",(0,t.jsxs)(n.h4,{id:"using-commas--to-combine-text-and-variables",children:["Using commas ",(0,t.jsx)(n.code,{children:","})," to combine text and variables:"]}),"\n",(0,t.jsxs)(n.p,{children:["To print the content stored in a variable, we must put the variable name as an argument without quotes.\r\nTo combine text with the content of a variable, separate the elements with a comma (",(0,t.jsx)(n.code,{children:","}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'day = "Monday"\r\nprint("Today is", day)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Today is Monday \n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-f-strings-to-include-variable-values-in-strings",children:"Using f-strings to include variable values in strings:"}),"\n",(0,t.jsxs)(n.p,{children:["In Python, the ",(0,t.jsx)(n.code,{children:"print()"})," function can be used to output text to the console. To include variable values within a string, you can use f-strings (formatted string literals). Here's how it works:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1- Define the Variable"}),": Assign a value to a variable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'name = "Juan"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"2- Use the f-string"}),": Place an f before the opening quotation mark of the string. Inside the string, include curly braces ",(0,t.jsx)(n.code,{children:"{}"})," where you want to insert the value of the variable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'name = "Juan"\r\n\r\nprint(f"Hello, {name}!")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Hello, Juan!\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"input-function",children:[(0,t.jsx)(n.code,{children:"input()"})," Function"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"input()"})," function allows obtaining text entered via the keyboard. Upon reaching this function, the program stops waiting for input and the Enter key to be pressed, as shown in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'name = input("What\'s your name?: ")\r\nprint("Hello "+name+"!")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"What's your name?: Juan \r\nHello Juan!\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the user types their response on a different line because Python adds a newline at the end of each ",(0,t.jsx)(n.code,{children:"print()"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["We should always store the content of our ",(0,t.jsx)(n.code,{children:"input()"})," in a variable to use it later!"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'hours = input("How many hours do you work?: ")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"How many hours do you work?: 8\n"})}),"\n",(0,t.jsx)(n.h3,{id:"type-conversion",children:"Type Conversion"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.code,{children:"input()"}),"function converts the input to a string, even if a number is entered. ",(0,t.jsx)(n.strong,{children:"Attempting to perform operations will result in an error"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'num1 = input("Enter a number: ")\r\nnum2 = input("Enter another number: ")\r\nmult = num1*num2\r\nprint(num1,"*",num2,"=",mult)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter a number: 6\r\nEnter another number: 15\r\nTraceback (most recent call last):\r\n  File main.py, line 3, in module\r\nTypeError: can't multiply sequence by non-int of type 'str'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"type-conversion-example",children:"Type Conversion Example"}),"\n",(0,t.jsxs)(n.p,{children:["To have Python interpret the input as an integer, use the ",(0,t.jsx)(n.code,{children:"int()"})," function as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'num1 = int(input("Enter a number: "))\r\nnum2 = int(input("Enter another number: "))\r\nmult = num1*num2\r\nprint(num1,"*",num2,"=",mult)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter a number: 6\r\nEnter another number: 15\r\n6 * 15 = 90\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"structure-and-data-types",children:"Structure and Data Types"}),"\n",(0,t.jsx)(n.h3,{id:"simple-data-types",children:"Simple Data Types"}),"\n",(0,t.jsx)(n.p,{children:"A simple data type allows a variable to store it as a single value of that type."}),"\n",(0,t.jsxs)(n.p,{children:["For simple variables in Python, there are four types: ",(0,t.jsx)(n.code,{children:"int"})," (Integers), ",(0,t.jsx)(n.code,{children:"bool"})," (True, false), ",(0,t.jsx)(n.code,{children:"float"})," (Decimals) and ",(0,t.jsx)(n.code,{children:"string"})," (Text)."]}),"\n",(0,t.jsx)(n.p,{children:"Remember that in Python, the type of variable is determined by the type of data it stores. If the data type changes, the variable type will automatically change."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"a"})," stores:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"2"})," -> the data is an integer (simple data), so the variable a will automatically be of type ",(0,t.jsx)(n.code,{children:"int"}),", simple."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"a = 2\r\nprint(type(a))\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'int'>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:'"two"'})," -> the data is a string (structured data), so the variable a will automatically be of type ",(0,t.jsx)(n.code,{children:"str"}),", structured."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'a = "two"\r\nprint(type(a))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'str'>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"structured-data-types",children:"Structured Data Types"}),"\n",(0,t.jsxs)(n.p,{children:["Structured data in Python allows a variable to ",(0,t.jsx)(n.strong,{children:"store more than one value, data, or type of data"}),", such as a set of numbers, a string of characters, letters, lists, sequences, etc."]}),"\n",(0,t.jsxs)(n.p,{children:["We can find different types of structured data, which will be stored in different types of structured or complex variables. These can be classified as ",(0,t.jsx)(n.em,{children:"dynamic"})," (can be modified at runtime) or ",(0,t.jsx)(n.em,{children:"static"})," (cannot be modified at runtime)."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"List"})," (dynamic): Can store multiple values and can be modified."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'my_list = [1, 2, 3, "four"]\r\nprint(type(my_list)) \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'list'>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tuple"})," (static): Can store multiple values but cannot be modified."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'my_tuple = (1, 2, 3, "four")\r\nprint(type(my_tuple)) \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'tuple'>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dictionary"})," (dynamic): Can store key-value pairs and can be modified."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'my_dict = {"one": 1, "two": 2, "three": 3}\r\nprint(type(my_dict))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'dict'>\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"types-of-variables",children:"Types of variables"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["A variable is a space in a storage system that receives an ",(0,t.jsx)(n.strong,{children:"identifier"})," and holds information that is either known or unknown. In other words, a variable can be seen as a box where we store and exchange data of specific types."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Variables example",src:s(2114).A+"",width:"290",height:"174"})}),"\n",(0,t.jsx)(n.h3,{id:"variable-declaration",children:"Variable Declaration"}),"\n",(0,t.jsx)(n.p,{children:"In Python, when declaring a variable, we do not need to specify the type of data we are going to store in it, unlike in other programming languages."}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'box1 = "Hello"\r\nbox2 = 18\r\nbox3 = 18.1\r\nbox4 = True\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Types of variables",src:s(4989).A+"",width:"577",height:"190"})}),"\n",(0,t.jsxs)(n.p,{children:["As we see in the code, first the name of the variable is written, followed by the operator ",(0,t.jsx)(n.code,{children:"="})," (which in these cases is an assignment operator, not an equals sign), and then the data that it will store. Depending on the data we store in it, Python will determine the type of the variable."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["If the data to be stored is an ",(0,t.jsx)(n.code,{children:"string"}),", remember that it must be enclosed in quotation marks!"]})}),"\n",(0,t.jsx)(n.p,{children:"You should always first indicate the name of the variable and then its content, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"num = 17\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Variable names are sequences of letters and numbers, either uppercase or lowercase, but ",(0,t.jsx)(n.strong,{children:"always starting with a letter"}),". A variable should ",(0,t.jsx)(n.strong,{children:"never contain spaces"}),"; to separate words, we can use an underscore ",(0,t.jsx)(n.code,{children:"_"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"types-of-variables-1",children:"Types of variables"}),"\n",(0,t.jsx)(n.p,{children:"There are 3 most common types of variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Numeric:"})," Store numbers; within this category, we can find subtypes such as ",(0,t.jsx)(n.code,{children:"int"}),", ",(0,t.jsx)(n.code,{children:"float"}),", ",(0,t.jsx)(n.code,{children:"long"}),", and ",(0,t.jsx)(n.code,{children:"complex"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Text:"})," These are the classic variables that store strings of text as ",(0,t.jsx)(n.code,{children:"string"})," and ",(0,t.jsx)(n.code,{children:"char"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Boolean:"})," Store a value of True or False as ",(0,t.jsx)(n.code,{children:"bool"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["But in Python, variables can also be ",(0,t.jsx)(n.em,{children:"lists"}),", ",(0,t.jsx)(n.em,{children:"dictionaries"}),", ",(0,t.jsx)(n.em,{children:"tuples"})," (which we will cover later). Almost anything can be stored in them."]}),"\n",(0,t.jsxs)(n.h3,{id:"type-function",children:[(0,t.jsx)(n.code,{children:"type()"})," function"]}),"\n",(0,t.jsx)(n.p,{children:"You can determine the type of a variable using the built-in type() function, which allows you to know the type of a variable at a specific moment.\r\nTo call the type() function, simply write the function in the interpreter and pass the name of the variable as a parameter within the parentheses, like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'box1 = "Hello"\r\ntype(box1)\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'str'>\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you run the program, it will return the type of the variable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'box1 = "Hello"\r\nbox2 = 18\r\nbox3 = 18.1\r\nbox4 = True\r\n\r\nprint(type(box1))\r\nprint(type(box2))\r\nprint(type(box3))\r\nprint(type(box4))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"<class 'str'>\r\n<class 'int'>\r\n<class 'float'>\r\n<class 'bool'>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4989:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/typesofvariable-0a4ed781de99cfeba28f04cfedcc6c37.png"},2114:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);