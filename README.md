## Simple Accordion Component (React)

### Installation

Add the below to your package.json file

`"simple-accordion": "git+https://github.build.ge.com/smallworld/simple-accordion.git#master"`

### How To Use

First import the component where you want to use it

`import Accordion from "simple-accordion";`

Then just render it

```
<Accodion item={{
  header: "Simple Accordion Header",
  content:"Simple Accordion Content."
}} />
```

### Props

| _Prop_ |                    _Description_                     | _Default value_ |
| ------ | :--------------------------------------------------: | :-------------: |
| item   | Object containing two key values, header and content |    Object {}    |

### Example

```
import React, { Component } from "react";
import Accodion from "simple-accordion";

class App extends Component {
  render() {
    return (
        <Accodion item={{
          header: "Simple Accordion Header",
          content:"Simple Accordion Content."
        }} />
    );
  }
}

export default App;
```

### CSS variables - the component exposes three custom variables

--simple-accordion-container

--simple-accordion-header

--simple-accordion-content

### To make stye changes add the following block to an HTML header
### Alternatively target the DOM elements

```
<style>
  body {
    --simple-accordion-header: #e2e8ed;
    --simple-accordion-content: #eaeef1;
    --simple-accordion-container: #eaeef1;
  }
</style>
```

---

### How to modify the component

First install all dependencies

Run command from root ./

`$ npm ci`

Edit files in ./src/

- index.js
- accordion.css

---

### Update published component files

Run command from root ./

`$ npm run build`
 
---

### Run demo

Open index.html in ./demo/

---

### Update the demo files

First install all dependencies

Run command from ./demo/

`$ npm ci`

Edit file in ./demo/src/

- index.js

---

### Update demo dist files

`$ npm run build`


### Run tests

`$ npm run test`

Note: if you update the component update the tests

