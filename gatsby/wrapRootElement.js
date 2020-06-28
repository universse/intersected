import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'

import Code from 'components/Code'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    return props ? <Code {...props} /> : <pre {...preProps} />
  }
}

export default function wrapRootElement ({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
