"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6048],{4952:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var i=r(4848),a=r(8453);const s={sidebar_label:"Lesson 3: Dictionaries",sidebar_position:3},l="Dictionaries",t={id:"Apuntes python/Tema 3",title:"Dictionaries",description:"Table of Contents",source:"@site/docs/Apuntes python/Tema 3.md",sourceDirName:"Apuntes python",slug:"/Apuntes python/Tema 3",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Apuntes python/Tema 3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Lesson 3: Dictionaries",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lesson 2: Variables: list, tuple and range",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 2"},next:{title:"Lesson 4: Operators and Conditionals",permalink:"/apuntes-AOIngles/docs/Apuntes python/Tema 4"}},o={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Create Dictionaries",id:"create-dictionaries",level:2},{value:"Description",id:"description",level:3},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Scenario:",id:"scenario",level:4},{value:"Syntax of Dictionaries",id:"syntax-of-dictionaries",level:3},{value:"Example 1:",id:"example-1-1",level:4},{value:"Example 2:",id:"example-2-1",level:4},{value:"Accessing a Dictionary",id:"accessing-a-dictionary",level:2},{value:"Accessing Data",id:"accessing-data",level:3},{value:"Accessing Lists within Dictionaries",id:"accessing-lists-within-dictionaries",level:3},{value:"Example:",id:"example",level:4},{value:"Modifying Dictionary Data",id:"modifying-dictionary-data",level:2},{value:"Adding a Key-Value Pair",id:"adding-a-key-value-pair",level:3},{value:"Modifying a Value",id:"modifying-a-value",level:3},{value:"Replacing a Key",id:"replacing-a-key",level:3},{value:"Deleting Dictionary Data",id:"deleting-dictionary-data",level:2},{value:"Dictionary methods",id:"dictionary-methods",level:2},{value:"<code>get()</code>method",id:"getmethod",level:3},{value:"Example 1",id:"example-1-2",level:4},{value:"Example 2",id:"example-2-2",level:4},{value:"<code>keys()</code> method",id:"keys-method",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>values()</code> method",id:"values-method",level:3},{value:"Example",id:"example-4",level:4},{value:"Iterating through Dictionaries",id:"iterating-through-dictionaries",level:2},{value:"Example",id:"example-5",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dictionaries",children:"Dictionaries"}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#create-dictionaries",children:"Create Dictionaries"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#accessing-a-dictionary",children:"Accessing a Dictionary"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#modifying-dictionary-data",children:"Modifying Dictionary Data"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#deleting-dictionary-data",children:"Deleting Dictionary Data"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#dictionary-methods",children:"Dictionary methods"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#iterating-through-dictionaries",children:"Iterating through Dictionaries"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"create-dictionaries",children:"Create Dictionaries"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["A dictionary in Python is a collection of ",(0,i.jsx)(n.strong,{children:"key-value pairs"})," where each ",(0,i.jsx)(n.code,{children:"key"})," is unique. It is an unordered, mutable, and indexed data structure that allows for fast retrieval, insertion, and deletion of elements. Keys are typically strings or numbers, and ",(0,i.jsx)(n.code,{children:"values"})," can be of any data type"]}),"\n",(0,i.jsx)(n.p,{children:"A dictionary structure allows us to map values using key-value pairs in an organized manner, creating a visually ordered database."}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1:"}),"\n",(0,i.jsxs)(n.p,{children:["Store ",(0,i.jsx)(n.code,{children:"values"})," (Pedro, 49, Male, Yes, No, 2, 25000\u20ac) in ",(0,i.jsx)(n.code,{children:"keys"})," (Name, Age, Gender, Children, Married, Number of Children, Income) for a more organized and accessible manner."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Example of a dictionary\r\nmy_dict = {\r\n    "Name": "Pedro",\r\n    "Age": 49,\r\n    "Gender": "Male",\r\n    "Children": "Yes",\r\n    "Married": "No",\r\n    "Number of children": 2,\r\n    "Income": "25000\u20ac"\r\n}\r\n\r\n# Accessing a value by its key\r\nprint(my_dict["Name"])\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Pedro\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2:"}),"\n",(0,i.jsx)(n.h4,{id:"scenario",children:"Scenario:"}),"\n",(0,i.jsx)(n.p,{children:"Conducting a survey of 100 people, identifying each person by name, age, and gender as keys, and their responses as values: Patricia, 35, Female."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Name"}),(0,i.jsx)(n.td,{children:"Patricia"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Age"}),(0,i.jsx)(n.td,{children:"35"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Gender"}),(0,i.jsx)(n.td,{children:"Female"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"syntax-of-dictionaries",children:"Syntax of Dictionaries"}),"\n",(0,i.jsxs)(n.p,{children:["To create a dictionary, use a similar approach as lists. Name the dictionary followed by ",(0,i.jsx)(n.code,{children:"="})," and group key-value pairs within braces ",(0,i.jsx)(n.code,{children:"{}"})," ",(0,i.jsx)(n.strong,{children:"separated by commas"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1-1",children:"Example 1:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'people = {\r\n    "Name": "Patricia",\r\n    "Age": 35,\r\n    "Gender": "Female"\r\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2-1",children:"Example 2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "license_plate": "1234AAA"\r\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"accessing-a-dictionary",children:"Accessing a Dictionary"}),"\n",(0,i.jsx)(n.p,{children:"In the previous case we only have 3 data, but let's imagine that there were thousands of data about a particular car and we must \"dig\" there to only get one. Know if it has passed the MOT, name of the owner, etc. Let's make a complete template of our car:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2022",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid"\r\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"accessing-data",children:"Accessing Data"}),"\n",(0,i.jsx)(n.p,{children:"As you can see, we have placed a list within the \u201cextras\u201d key, this is possible and also very useful to be able to store several values \u200b\u200bin a key."}),"\n",(0,i.jsxs)(n.p,{children:["Now once we store the data in the dictionary we are going to access it, for that there are different ways, suppose we want to print only the car model, we do it using the ",(0,i.jsx)(n.code,{children:"print()"})," function."]}),"\n",(0,i.jsx)(n.p,{children:"Below the code we place a print followed by the name that we gave to the dictionary in this case car and then in square brackets the key we want to access, which in this case as we said before will be the model."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid"\r\n}\r\n\r\n#To see the value of the model key\r\nprint(car["model"])\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Ibiza 2024\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Remember that all elements followed by the function are enclosed in parentheses."})}),"\n",(0,i.jsx)(n.h3,{id:"accessing-lists-within-dictionaries",children:"Accessing Lists within Dictionaries"}),"\n",(0,i.jsxs)(n.p,{children:["It is done in the same way that we used before to print the value of a key, but ",(0,i.jsx)(n.strong,{children:"adding the indexes of the list that we want to print"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Example with the car extras that are stored in the extras ",(0,i.jsx)(n.code,{children:"key"}),", and we gave it a list as a ",(0,i.jsx)(n.code,{children:"value"}),":"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid"\r\n}\r\n\r\nprint(car["extras"][1])\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"proximity sensors\n"})}),"\n",(0,i.jsxs)(n.p,{children:['This prints "proximity sensors". ',(0,i.jsx)(n.strong,{children:"Indicate the index of the list after the key that holds the list"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"modifying-dictionary-data",children:"Modifying Dictionary Data"}),"\n",(0,i.jsx)(n.h3,{id:"adding-a-key-value-pair",children:"Adding a Key-Value Pair"}),"\n",(0,i.jsxs)(n.p,{children:["We are now going to add the ",(0,i.jsx)(n.code,{children:"key"})," ",(0,i.jsx)(n.strong,{children:'"price"'})," and the ",(0,i.jsx)(n.code,{children:"value"})," ",(0,i.jsx)(n.strong,{children:"14000"})," to this dictionary, remembering that the keys are unique, that is:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Since the price key does not exist, it will be added"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"If it already existed, only the value would be modified"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We add it using the following syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid"\r\n}\r\n\r\ncar["price"] = 14000\n'})}),"\n",(0,i.jsx)(n.h3,{id:"modifying-a-value",children:"Modifying a Value"}),"\n",(0,i.jsxs)(n.p,{children:["To change the price ",(0,i.jsx)(n.code,{children:"value"})," from ",(0,i.jsx)(n.strong,{children:"14000"})," to ",(0,i.jsx)(n.strong,{children:"17000"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\ncar["price"] = 17000\n'})}),"\n",(0,i.jsx)(n.h3,{id:"replacing-a-key",children:"Replacing a Key"}),"\n",(0,i.jsxs)(n.p,{children:["To change the ",(0,i.jsx)(n.code,{children:"key"})," ",(0,i.jsx)(n.strong,{children:'"price"'})," to ",(0,i.jsx)(n.strong,{children:'"cost"'}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\ncar["cost"] = car.pop("price")\n'})}),"\n",(0,i.jsx)(n.p,{children:'This adds the "cost" key and removes the "price" key, preserving the value.'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"deleting-dictionary-data",children:"Deleting Dictionary Data"}),"\n",(0,i.jsxs)(n.p,{children:["To delete a pair ",(0,i.jsx)(n.code,{children:"key: value"})," we can use the ",(0,i.jsx)(n.code,{children:"del()"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\ndel(car["color"])\r\nprint(car)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'{"brand": "seat", "model": "Ibiza 2024", "license_plate": "1234AAA", "owner": "Alfredo Mart\xednez Garc\xeda", "extras": ["sunroof", "proximity sensors"], "ITV": "Valid", "price": 14000}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It is important to remember that ",(0,i.jsx)(n.code,{children:"del()"})," is a function, so the ",(0,i.jsx)(n.strong,{children:"name of the dictionary and the key must be in parentheses"}),". ",(0,i.jsx)(n.code,{children:"del()"})," is a predefined just like ",(0,i.jsx)(n.code,{children:"print()"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"dictionary-methods",children:"Dictionary methods"}),"\n",(0,i.jsxs)(n.h3,{id:"getmethod",children:[(0,i.jsx)(n.code,{children:"get()"}),"method"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"get()"})," method retrieves the value of a specified key, and can return a default value if the key does not exist."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1-2",children:"Example 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\n#If the "owner" key exits, it returns the value\r\n#If "owner" key does not exist, it returns "No owner"\r\nprint(car.get("owner", "No owner"))\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"Alfredo Mart\xednez Garc\xeda\n"})}),"\n",(0,i.jsx)(n.p,{children:'If "owner" does not exist, it returns "No owner".'}),"\n",(0,i.jsx)(n.h4,{id:"example-2-2",children:"Example 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\n#If the "owner" key exits, it returns the value\r\n#If "owner" key does not exist, it returns "No owner"\r\nprint(car.get("owner", "No owner"))\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"No owner\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"keys-method",children:[(0,i.jsx)(n.code,{children:"keys()"})," method"]}),"\n",(0,i.jsxs)(n.p,{children:["Prints only the ",(0,i.jsx)(n.strong,{children:"keys"})," of the dictionary."]}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\nprint(car.keys())\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'dict_keys(["color", "brand", "model", "license_plate", "owner", "extras", "ITV", "price"])\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"values-method",children:[(0,i.jsx)(n.code,{children:"values()"})," method"]}),"\n",(0,i.jsxs)(n.p,{children:["Prints only the ",(0,i.jsx)(n.strong,{children:"values"})," of the dictionary."]}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\nprint(car.values())\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'dict_values(["red", "seat", "Ibiza 2024", "1234AAA", "Alfredo Mart\xednez Garc\xeda", ["sunroof", "proximity sensors"], "Valid", 14000])\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"iterating-through-dictionaries",children:"Iterating through Dictionaries"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"for"})," loop allows iterating through dictionaries, operating with both keys and values."]}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.code,{children:"items()"})," method, which returns a list of the dictionary's keys and values."]}),"\n",(0,i.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'car = {\r\n    "color": "red",\r\n    "brand": "seat",\r\n    "model": "Ibiza 2024",\r\n    "license_plate": "1234AAA",\r\n    "owner": "Alfredo Mart\xednez Garc\xeda",\r\n    "extras": ["sunroof", "proximity sensors"],\r\n    "ITV": "Valid",\r\n    "price": 14000\r\n}\r\n\r\nfor key, value in car.items():\r\n    print(key, value)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"color red\r\nbrand seat\r\nmodel Ibiza 2024\r\nlicense_plate 1234AAA\r\nowner Alfredo Mart\xednez Garc\xeda\r\nextras ['sunroof', 'proximity sensors']\r\nITV Valid\r\nprice 14000\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var i=r(6540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);