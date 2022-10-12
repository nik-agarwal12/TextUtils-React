// The variables or objects that are exported as default can be imported here by any user-defined-name as well as without any curly braces but the variables or objects that are exported by name must be imported within curly braces and with the exact same name that has been declared in the exported file.

import name, {a,c,d} from "./module1.mjs"
console.log(name);
console.log(a);
console.log(c);
console.log(d);