[<img src="logo.jpg" align="right" class="logo" height="300" width="300"/>](https://github.com/erikras/styled-components-theme)

# styled-components-theme
---
[![NPM Version](https://img.shields.io/npm/v/styled-components-theme.svg?style=flat-square)](https://www.npmjs.com/package/styled-components-theme)
[![NPM Downloads](https://img.shields.io/npm/dm/styled-components-theme.svg?style=flat-square)](https://www.npmjs.com/package/styled-components-theme)
[![Build Status](https://img.shields.io/travis/erikras/styled-components-theme/master.svg?style=flat-square)](https://travis-ci.org/erikras/styled-components-theme)
[![codecov.io](https://codecov.io/github/erikras/styled-components-theme/coverage.svg?branch=master)](https://codecov.io/github/erikras/styled-components-theme?branch=master)

[`styled-components-theme`](https://github.com/erikras/styled-components-theme) generates 
selectors for colors in your
[`styled-components`](https://github.com/styled-components/styled-components) theme that allows
color manipulation, using the [`color`](https://github.com/qix-/color) library via calls on the
selectors themselves.

---

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save styled-components-theme
```

## Usage

#### 1) Define your theme colors

```jsx
// colors.js

const colors = {
  main:  '#393276',
  dark:  '#0D083B',
  light: '#837EB1'
}

export default colors
```

#### 2) Apply your theme with [`ThemeProvider`](https://github.com/styled-components/styled-components/blob/master/docs/theming.md)

```jsx
import { ThemeProvider } from 'styled-components';
import colors from './colors' // from Step #1

const App = props =>
  <ThemeProvider theme={colors}>
    {props.children}
  </ThemeProvider>

```

#### 3) Create an importable theme object using `styled-components-theme`

```jsx
// theme.js

import createTheme from 'styled-components-theme';
import colors from './colors' // from Step #1

const theme = createTheme(...Object.keys(colors))
export default theme
```

#### 4) Use the theme colors in your components

```jsx
import styled from 'styled-components'
import theme from './theme'

const Header = styled.div`
  background: ${theme.dark};
  color: ${theme.light};
`

const Button = styled.div`
  background-image: linear-gradient(${theme.light}, ${theme.light.darken(0.3));
  color: ${theme.dark};
  padding: 10px;
`
```

---

## Available manipulation functions

This library uses [the color manipulation provided by the
`color` library](https://github.com/qix-/color#manipulation).

```js
theme.color.negate()         // rgb(0, 100, 255) -> rgb(255, 155, 0)

theme.color.lighten(0.5)     // hsl(100, 50%, 50%) -> hsl(100, 50%, 75%)
theme.color.darken(0.5)      // hsl(100, 50%, 50%) -> hsl(100, 50%, 25%)

theme.color.saturate(0.5)    // hsl(100, 50%, 50%) -> hsl(100, 75%, 50%)
theme.color.desaturate(0.5)  // hsl(100, 50%, 50%) -> hsl(100, 25%, 50%)
theme.color.greyscale()      // #5CBF54 -> #969696

theme.color.whiten(0.5)      // hwb(100, 50%, 50%) -> hwb(100, 75%, 50%)
theme.color.blacken(0.5)     // hwb(100, 50%, 50%) -> hwb(100, 50%, 75%)

theme.color.clearer(0.5)     // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 0.4)
theme.color.opaquer(0.5)     // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 1.0)

theme.color.rotate(180)      // hsl(60, 20%, 20%) -> hsl(240, 20%, 20%)
theme.color.rotate(-90)      // hsl(60, 20%, 20%) -> hsl(330, 20%, 20%)
```
