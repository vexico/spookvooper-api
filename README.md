# SpookVooper API Libraries

Library that is used to easily access the SpookVooper API.

## Usage

We use ES6 modules, because CommonJS makes me want to cry.

**Example Script:**

```js
import svAPI from "spookvooperapi";
let a;

// Get the balance of SpikeViper, and save it to a variable, then console.log it with a prefix
svAPI.eco.getBalance("2a0057e6-356a-4a49-b825-c37796cb7bd9", true).then(value => {
    a = value;
    console.log(`Spike's Balance: ${a}`);
});
```

The value variable is what the 
