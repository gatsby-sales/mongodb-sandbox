---
title: 'Cool new feature'
metaTitle: 'Cool new feature is the meta title tag for this page'
metaDescription: 'This is the meta description for this page'
---

The following is a code block with JavaScript language syntax highlighting.

```javascript
import React from 'react';
```

Supports multiple changes.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
const chris = 'trying this out'
```

## Live Editing example

```javascript react-live=true
function Button({}) {
  const [count, setCount] = React.useState(0);
  const buttonClick = (e) => setCount(count + 1);
  return (
    <button className={'btn btn-default'} onClick={(e) => buttonClick(e)}>
      The count is {count}
    </button>
  );
}
```
