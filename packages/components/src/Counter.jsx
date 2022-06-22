import * as React from "react";

import { sayHello } from '@bogus/utils';

sayHello('Trevor!');

function Counter() {
  let [count, setCount] = React.useState(0);
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  )
}

export default Counter;
