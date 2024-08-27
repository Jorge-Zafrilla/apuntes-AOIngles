"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2119],{1252:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(4848),i=r(8453);const o={sidebar_label:"Lesson 7: Errors and Exceptions",sidebar_position:7},s="Errors and Exceptions",c={id:"Apuntes python/Tema 7",title:"Errors and Exceptions",description:"Table of Contents",source:"@site/docs/Apuntes python/Tema 7.md",sourceDirName:"Apuntes python",slug:"/Apuntes python/Tema 7",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Lesson 7: Errors and Exceptions",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Lesson 6: Functions",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 6"},next:{title:"Lesson 8: Working with Files",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 8"}},a={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"What is Exception Handling in Python?",id:"what-is-exception-handling-in-python",level:2},{value:"Classic Python Interpreter Error",id:"classic-python-interpreter-error",level:3},{value:"Customized Error",id:"customized-error",level:3},{value:"The <code>try</code>/<code>except</code> Block",id:"the-tryexcept-block",level:2},{value:"Example:",id:"example",level:4},{value:"<code>except</code>",id:"except",level:3},{value:"<code>except</code> for a Specific Error",id:"except-for-a-specific-error",level:3},{value:"<code>except</code> for Any Error",id:"except-for-any-error",level:3},{value:"<code>finally</code>",id:"finally",level:3},{value:"Raising an Error",id:"raising-an-error",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"errors-and-exceptions",children:"Errors and Exceptions"}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#what-is-exception-handling-in-python",children:"What is Exception Handling in Python?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"#the-tryexcept-block",children:["The ",(0,t.jsx)(n.code,{children:"try"}),"/",(0,t.jsx)(n.code,{children:"except"})," Block"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#raising-an-error",children:"Raising an Error"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-is-exception-handling-in-python",children:"What is Exception Handling in Python?"}),"\n",(0,t.jsxs)(n.p,{children:["Managing errors will allow us to ",(0,t.jsx)(n.strong,{children:"prevent our program from abruptly stopping"})," and will give us the ability to ",(0,t.jsx)(n.strong,{children:"display a customized error to the user instead of the classic interpreter errors"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"classic-python-interpreter-error",children:"Classic Python Interpreter Error"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(10/0)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'Traceback (most recent call last):\r\n  File "<stdin>", line 1, in <module>\r\nZeroDivisionError: division by zero\n'})}),"\n",(0,t.jsx)(n.h3,{id:"customized-error",children:"Customized Error"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'try:\r\n    print(10/0)\r\n    \r\nexcept ZeroDivisionError:\r\n    print("You can\'t divide by zero!")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"You can't divide by zero!\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"the-tryexcept-block",children:["The ",(0,t.jsx)(n.code,{children:"try"}),"/",(0,t.jsx)(n.code,{children:"except"})," Block"]}),"\n",(0,t.jsxs)(n.p,{children:["By using ",(0,t.jsx)(n.code,{children:"try"}),"/",(0,t.jsx)(n.code,{children:"except"}),", we can establish a condition to handle errors within the ",(0,t.jsx)(n.code,{children:"try"})," block. If an error occurs, the code within the ",(0,t.jsx)(n.code,{children:"except"})," block is executed. If no error occurs, the code runs normally."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'try:\r\n    # Example: Trying to add a text string with a number\r\n    result = "3" + 5\r\n    \r\nexcept TypeError:\r\n    print("You can\'t add a string with a number!")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"You can't add a string with a number!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"except",children:(0,t.jsx)(n.code,{children:"except"})}),"\n",(0,t.jsxs)(n.p,{children:["We can have a general ",(0,t.jsx)(n.code,{children:"except"})," for any error or multiple ",(0,t.jsx)(n.code,{children:"except"})," blocks for specific errors, allowing us to anticipate and handle each error uniquely."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"try except example",src:r(7070).A+"",width:"679",height:"240"})}),"\n",(0,t.jsxs)(n.h3,{id:"except-for-a-specific-error",children:[(0,t.jsx)(n.code,{children:"except"})," for a Specific Error"]}),"\n",(0,t.jsx)(n.p,{children:"Let's catch a particular error, for example the error that occurs when accessing an index outside the range of a list. First, let's look at the error that appears in the compiler when doing so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Example: Accessing an index outside the range of a list\r\n#Index:  0      1      2\r\nlist = ["Hi", "Bye", False]\r\nitem = list[5]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'Traceback (most recent call last):\r\n  File "<stdin>", line 3, in <module>\r\nIndexError: list index out of range\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"traceback provides information about the error"}),", indicating where it occurred, helping us understand and fix the issue."]}),"\n",(0,t.jsxs)(n.p,{children:["It tells us that we are trying to access an element in the list that is ",(0,t.jsx)(n.strong,{children:"out of range"}),", since our list has only indices 0, 1 and 2, and we are ",(0,t.jsx)(n.strong,{children:"telling it to access the element at index 5, which does not exist"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The type of error it gives is ",(0,t.jsx)(n.code,{children:"IndexError"}),", now a ",(0,t.jsx)(n.strong,{children:"specific except will be used for that type of error"}),", and ",(0,t.jsx)(n.strong,{children:"another except block"})," at the end ",(0,t.jsx)(n.strong,{children:"for any other error that may occur"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'try:\r\n    #Index:  0      1      2\r\n    list = ["Hi", "Bye", False]\r\n    item = list[5]\r\n\r\nexcept IndexError: #Except for the specific error IndexError\r\n    print("You are trying to access a list index that is out of range")\r\nexcept: #Except for any other error\r\n    print("An error has occurred")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"You are trying to access a list index that is out of range\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"except-for-any-error",children:[(0,t.jsx)(n.code,{children:"except"})," for Any Error"]}),"\n",(0,t.jsxs)(n.p,{children:["If we use ",(0,t.jsx)(n.code,{children:"except"})," ",(0,t.jsx)(n.strong,{children:"without adding anything else below"}),", it means that this except will be applied to ",(0,t.jsx)(n.strong,{children:"any error that occurs during the execution of the program"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'try:\r\n    n1 = int(input("Enter an integer: "))\r\n    n2 = int(input("Enter another integer: "))\r\n    \r\n    div = n1/n2\r\n    print(f"{n1}/{n2} = {div}")\r\n    \r\nexcept: #Except for any error\r\n    print("An error has occurred")\n'})}),"\n",(0,t.jsxs)(n.p,{children:["What is the problem? In the previous example there ",(0,t.jsx)(n.strong,{children:"can be two types of errors"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"A value that cannot be converted to an integer"}),", for example a letter, is entered in ",(0,t.jsx)(n.code,{children:"n1"})," or ",(0,t.jsx)(n.code,{children:"n2"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter an integer: 32\r\nEnter another integer: hola\r\nAn error has occurred\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The number ",(0,t.jsxs)(n.strong,{children:["0 is entered in ",(0,t.jsx)(n.code,{children:"n2"})]}),", which would not give an error when converting it to int, but will give an error when doing the division since it cannot be multiplied by 0."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter an integer: 24\r\nEnter another integer: 0\r\nAn error has occurred\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If we put a general except it will warn us that there is an error, but we will not know what is failing. To make our program more efficient, ",(0,t.jsx)(n.strong,{children:"it would be best to add a specific error type to be able to differentiate between the errors that may occur"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'try:\r\n    n1 = int(input("Enter an integer: "))\r\n    n2 = int(input("Enter another integer: "))\r\n    \r\n    div = n1/n2\r\n    print(f"{n1}/{n2} = {div}")\r\n    \r\nexcept ZeroDivisionError: #Except for when the value of n2 is 0\r\n    print("You are trying to divide by zero")\r\nexcept ValueError: #Except when a value that cannot be converted to int is entered into n1 or n2\r\n    print("You have entered a value that cannot be converted to an integer")\r\nexcept: #Except for any other error\r\n    print("An error has occurred")\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now when a value that cannot be converted to int is entered into ",(0,t.jsx)(n.code,{children:"n1"})," or ",(0,t.jsx)(n.code,{children:"n2"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter an integer: 32\r\nEnter another integer: hola\r\nYou have entered a value that cannot be converted to an integer:\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When the value of ",(0,t.jsx)(n.code,{children:"n2"})," is 0:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter an integer: 24\r\nEnter another integer: 0\r\nYou are trying to divide by zero\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When there is no error:"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Enter an integer: 40\r\nEnter another integer: 10\r\n40/10 = 4.0\n"})}),"\n",(0,t.jsx)(n.h3,{id:"finally",children:(0,t.jsx)(n.code,{children:"finally"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"finally"})," block allows us to execute code regardless of whether an error occurred or not. It is not necessary to have an ",(0,t.jsx)(n.code,{children:"except"})," block if we have a ",(0,t.jsx)(n.code,{children:"finally"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"finally example",src:r(6548).A+"",width:"353",height:"506"})}),"\n",(0,t.jsxs)(n.p,{children:["In the following example we are going to try to access a key in a dictionary that does not exist, which will give us a ",(0,t.jsx)(n.code,{children:"KeyError"})," type error, the ",(0,t.jsx)(n.code,{children:"finally"})," will be executed after the ",(0,t.jsx)(n.code,{children:"except"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"try:\r\n    # Example: Trying to access a non-existent key in a dictionary\r\n    dictionary = {'name': 'John', 'age': 30}\r\n    value = dictionary['height']\r\nexcept KeyError:\r\n    print(\"You are trying to access a non-existent key in a dictionary!\")\r\nfinally:\r\n    print(\"This will execute no matter what\")\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"You are trying to access a non-existent key in a dictionary!\r\nThis will execute no matter what.\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsx)(n.code,{children:"finally"})," is always executed"]}),", no matter if an error has occurred or not, now in the example below no error occurs since we are accessing a key that does exist in the dictionary, the finally is executed anyway."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"try:\r\n    # Example: Trying to access a existent key in a dictionary\r\n    dictionary = {'name': 'John', 'age': 30}\r\n    value = dictionary['age']\r\nexcept KeyError:\r\n    print(\"You are trying to access a non-existent key in a dictionary!\")\r\nfinally:\r\n    print(\"This will execute no matter what\")\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"30\r\nThis will execute no matter what\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"raising-an-error",children:"Raising an Error"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes we need to manually trigger an error using the ",(0,t.jsx)(n.code,{children:"raise"})," keyword. This allows us to create custom errors and handle them with ",(0,t.jsx)(n.code,{children:"except"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def check_letter(word):\r\n    if \'\xf1\' in word:\r\n        raise ValueError("Word contains forbidden character: \xf1")\r\n    return word\r\n\r\ntry:\r\n    check_letter("ni\xf1o")\r\nexcept ValueError as e:\r\n    print(f"Error: {e}")\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Console:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Error: Word contains forbidden character: \xf1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, a ",(0,t.jsx)(n.code,{children:"ValueError"})," is raised if the word contains the character '\xf1', and the error is handled by the ",(0,t.jsx)(n.code,{children:"except"})," block."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6548:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/finally-0a69d55ed3135dd9d6d548d80f8f962e.png"},7070:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/try-except-1ae05caf79303dce55e9f1224609b79f.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);