# tiny-react-tooltip

> A simple and easy to use React tooltip.

[![NPM](https://img.shields.io/npm/v/tiny-react-tooltip.svg)](https://www.npmjs.com/package/tiny-react-tooltip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tiny-react-tooltip
```

## Screenshot

![screenshot](https://github.com/sharukhkhanajm/tiny-react-tooltip/blob/main/Screenshot_1.png)

## Usage

```tsx
import React, { Component } from 'react'

import { Tooltip } from 'tiny-react-tooltip'
import 'tiny-react-tooltip/dist/index.css'

class Example extends Component {
  render() {
    return (
      <>
        <Tooltip content='Bottom tooltip' direction='bottom'>
          Bottom
        </Tooltip>
        <Tooltip content='Top tooltip' direction='top'>
          Top
        </Tooltip>
        <Tooltip content='Left tooltip' direction='left'>
          Left
        </Tooltip>
        <Tooltip content='Right tooltip' direction='right'>
          Right
        </Tooltip>
      </>
    )
  }
}
```

## License

MIT © [sharukhkhanajm](https://github.com/sharukhkhanajm)
