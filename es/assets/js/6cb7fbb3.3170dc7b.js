"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5326],{1435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(4848),l=r(8453);const i={sidebar_label:"Tema 5: Bucles For y While",sidebar_position:5},c="Bucles For y While",o={id:"Apuntes python/Tema 5",title:"Bucles For y While",description:"Tabla de Contenidos",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Apuntes python/Tema 5.md",sourceDirName:"Apuntes python",slug:"/Apuntes python/Tema 5",permalink:"/apuntes-AOIngles/es/docs/Apuntes python/Tema 5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Tema 5: Bucles For y While",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tema 4: Diccionarios",permalink:"/apuntes-AOIngles/es/docs/Apuntes python/Tema 4"},next:{title:"Tema 6: Funciones",permalink:"/apuntes-AOIngles/es/docs/Apuntes python/Tema 6"}},a={},d=[{value:"Tabla de Contenidos",id:"tabla-de-contenidos",level:2},{value:"Bucles en Python",id:"bucles-en-python",level:2},{value:"Bucle <code>for</code>",id:"bucle-for",level:2},{value:"Bucle <code>while</code>",id:"bucle-while",level:2},{value:"Control de Bucles: <code>break</code>, <code>continue</code> y <code>pass</code>",id:"control-de-bucles-break-continue-y-pass",level:2},{value:"<code>break</code>",id:"break",level:3},{value:"<code>continue</code>",id:"continue",level:3},{value:"<code>pass</code>",id:"pass",level:3},{value:"Diferencias entre <code>for</code> y <code>while</code>",id:"diferencias-entre-for-y-while",level:2}];function t(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bucles-for-y-while",children:"Bucles For y While"}),"\n",(0,s.jsx)(n.h2,{id:"tabla-de-contenidos",children:"Tabla de Contenidos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#bucles-en-python",children:"Bucles en Python"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#bucle-for",children:["Bucle ",(0,s.jsx)(n.code,{children:"for"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#bucle-while",children:["Bucle ",(0,s.jsx)(n.code,{children:"while"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#control-de-bucles-break-continue-y-pass",children:["Control de Bucles: ",(0,s.jsx)(n.code,{children:"break"}),", ",(0,s.jsx)(n.code,{children:"continue"})," y ",(0,s.jsx)(n.code,{children:"pass"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#diferencias-entre-for-y-while",children:["Diferencias entre ",(0,s.jsx)(n.code,{children:"for"})," y ",(0,s.jsx)(n.code,{children:"while"})]})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"bucles-en-python",children:"Bucles en Python"}),"\n",(0,s.jsxs)(n.p,{children:["Un bucle en programaci\xf3n ",(0,s.jsx)(n.strong,{children:"es la ejecuci\xf3n continua de un bloque espec\xedfico de c\xf3digo mientras se cumpla una condici\xf3n designada"}),".\r\nPor ejemplo, un bucle es una parte de nuestro programa que se ejecuta continuamente ",(0,s.jsx)(n.strong,{children:"mientras se cumpla una cierta condici\xf3n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Loop scheme",src:r(4040).A+"",width:"241",height:"209"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h2,{id:"bucle-for",children:["Bucle ",(0,s.jsx)(n.code,{children:"for"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["El bucle ",(0,s.jsx)(n.code,{children:"for"})," se encarga de ",(0,s.jsx)(n.strong,{children:"iterar sobre una secuencia"}),", buscando elementos que cumplan con una cierta condici\xf3n, y realizando alguna instrucci\xf3n seg\xfan se indique. Es importante notar que estos elementos deben ser ",(0,s.jsx)(n.strong,{children:"iterables"}),", es decir, ",(0,s.jsx)(n.strong,{children:"pueden ser recorridos"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["En el caso de un bucle ",(0,s.jsx)(n.code,{children:"for"}),", se debe especificar la variable donde se ",(0,s.jsx)(n.strong,{children:"almacenar\xe1n los elementos"})," del elemento iterable (",(0,s.jsx)(n.code,{children:"lista"}),", ",(0,s.jsx)(n.code,{children:"diccionario"}),", ",(0,s.jsx)(n.code,{children:"cadena"}),", etc.)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["La sentencia ",(0,s.jsx)(n.code,{children:"for"})," ",(0,s.jsx)(n.strong,{children:"es seguida por la variable donde se almacenar\xe1n los elementos"}),", luego el operador ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"in"})})," y ",(0,s.jsx)(n.strong,{children:"el elemento a iterar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]  # Create the list with numbers\r\n\r\nfor num in numbers:  # Store the list items in the variable "num"\r\n    if num % 2 == 0:  # Condition: If the remainder of the division by two is zero, then:\r\n        print(num)  # Print the variable num\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"2\r\n4\r\n6\r\n8\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"bucle-while",children:["Bucle ",(0,s.jsx)(n.code,{children:"while"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["El bucle ",(0,s.jsx)(n.code,{children:"while"})," nos permite ",(0,s.jsxs)(n.strong,{children:["ejecutar un bloque de c\xf3digo continuamente ",(0,s.jsx)(n.em,{children:"mientras la condici\xf3n sea verdadera"})]}),", e incluso podemos crear bucles infinitos."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Estos bucles se ejecutan mientras la condici\xf3n sea verdadera; si se cumple, se ejecuta el cuerpo del bucle, y luego se verifica nuevamente la condici\xf3n. Si sigue siendo verdadera, el bucle se ejecuta nuevamente. Si no se cumple, se omite el bucle y el programa contin\xfaa normalmente."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'i = 0  # Declare the value of the variable "i"\r\n\r\nwhile i <= 9:  # Create the loop with the condition to execute while "i" is less than or equal to "9"\r\n    i += 1  # Increment i by one (i is equal to i plus one)\r\n    print(i)  # Print "i"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"1\r\n2\r\n3\r\n4\r\n5\r\n6\r\n7\r\n8\r\n9\r\n10\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"control-de-bucles-break-continue-y-pass",children:["Control de Bucles: ",(0,s.jsx)(n.code,{children:"break"}),", ",(0,s.jsx)(n.code,{children:"continue"})," y ",(0,s.jsx)(n.code,{children:"pass"})]}),"\n",(0,s.jsxs)(n.p,{children:["A veces no queremos que un bucle contin\xfae indefinidamente una vez que haya cumplido su prop\xf3sito. Para ello, tenemos el control de bucles mediante estas tres instrucciones: ",(0,s.jsx)(n.code,{children:"break"}),", ",(0,s.jsx)(n.code,{children:"continue"})," y ",(0,s.jsx)(n.code,{children:"pass"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"break",children:(0,s.jsx)(n.code,{children:"break"})}),"\n",(0,s.jsxs)(n.p,{children:["Esta instrucci\xf3n se utiliza para ",(0,s.jsx)(n.strong,{children:"terminar un bucle"}),", es decir, salir de \xe9l y continuar con la ejecuci\xf3n de las instrucciones restantes del programa."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'string = "Python"\r\n\r\nfor letter in string:\r\n    if letter == "h":\r\n        print("Found the \'h\'")\r\n        break\r\n    print(letter)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"P\r\ny\r\nt\r\nFound the 'h'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'x = 5\r\n\r\nwhile True:\r\n    x -= 1\r\n    print(x)\r\n    if x == 0:\r\n        break\r\nprint("End of the loop")\r\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"4\r\n3\r\n2\r\n1\r\n0\r\nEnd of the loop\n"})}),"\n",(0,s.jsx)(n.h3,{id:"continue",children:(0,s.jsx)(n.code,{children:"continue"})}),"\n",(0,s.jsxs)(n.p,{children:["La instrucci\xf3n ",(0,s.jsx)(n.code,{children:"continue"})," dentro de un bucle ",(0,s.jsx)(n.strong,{children:"obliga al int\xe9rprete a volver al comienzo del bucle"}),", salt\xe1ndose todas las instrucciones o iteraciones que est\xe9n por debajo."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'string = "Python"\r\n\r\nfor letter in string:\r\n    if letter == "P":\r\n        continue\r\n    print(letter)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"y\r\nt\r\nh\r\no\r\nn\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"x = 5\r\n\r\nwhile x > 0:\r\n    x -= 1\r\n    if x == 3:\r\n        continue\r\n    print(x)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"4\r\n2\r\n1\r\n0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"pass",children:(0,s.jsx)(n.code,{children:"pass"})}),"\n",(0,s.jsxs)(n.p,{children:["La instrucci\xf3n ",(0,s.jsx)(n.code,{children:"pass"})," ",(0,s.jsx)(n.strong,{children:"es una declaraci\xf3n nula; no hace nada"}),". Es casi como si no existiera, pero nos permite crear un bucle sin colocar c\xf3digo en su cuerpo, para a\xf1adirlo m\xe1s tarde, us\xe1ndolo como un marcador de posici\xf3n temporal."]}),"\n",(0,s.jsxs)(n.p,{children:["La diferencia con ",(0,s.jsx)(n.code,{children:"continue"})," es que ",(0,s.jsx)(n.code,{children:"continue"})," termina la iteraci\xf3n actual pero contin\xfaa con la siguiente instrucci\xf3n o iteraci\xf3n del bucle, volviendo al principio. En cambio, ",(0,s.jsx)(n.code,{children:"pass"})," no hace nada y contin\xfaa con las siguientes instrucciones del bucle sin volver al principio."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'for letter in "Python":\r\n    if letter == "h":\r\n        pass\r\n    print("Current letter:", letter)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Current letter: P\r\nCurrent letter: y\r\nCurrent letter: t\r\nCurrent letter: h\r\nCurrent letter: o\r\nCurrent letter: n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'var = 10\r\n\r\nwhile var > 0:\r\n    var -= 1\r\n    if var == 5:\r\n        pass\r\n    print("Current value of the variable:", var)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Consola:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Current value of the variable: 9\r\nCurrent value of the variable: 8\r\nCurrent value of the variable: 7\r\nCurrent value of the variable: 6\r\nCurrent value of the variable: 5\r\nCurrent value of the variable: 4\r\nCurrent value of the variable: 3\r\nCurrent value of the variable: 2\r\nCurrent value of the variable: 1\r\nCurrent value of the variable: 0\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"diferencias-entre-for-y-while",children:["Diferencias entre ",(0,s.jsx)(n.code,{children:"for"})," y ",(0,s.jsx)(n.code,{children:"while"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"for"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prop\xf3sito"}),": Un bucle ",(0,s.jsx)(n.code,{children:"for"})," se utiliza para iterar sobre una secuencia (por ejemplo, lista, tupla, diccionario, conjunto o cadena)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Control de Iteraci\xf3n"}),": El n\xfamero de iteraciones est\xe1 definido por la cantidad de elementos en la secuencia. Itera a trav\xe9s de cada elemento uno por uno."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Caso de Uso"}),": Mejor para escenarios donde necesitas ejecutar un bloque de c\xf3digo para cada elemento en una secuencia y sabes el n\xfamero de iteraciones de antemano."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"while"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prop\xf3sito"}),": Un bucle ",(0,s.jsx)(n.code,{children:"while"})," se utiliza para repetir un bloque de c\xf3digo mientras una condici\xf3n sea verdadera."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Control de Iteraci\xf3n"}),": El n\xfamero de iteraciones est\xe1 controlado por una condici\xf3n, que se eval\xfaa antes de cada iteraci\xf3n. Puede potencialmente llevar a un bucle infinito si la condici\xf3n nunca se vuelve falsa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Caso de Uso"}),": Ideal para escenarios donde no se conoce de antemano el n\xfamero de iteraciones y depende de que se cumpla una cierta condici\xf3n durante la ejecuci\xf3n."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},4040:(e,n,r)=>{r.d(n,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(6540);const l={},i=s.createContext(l);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);