import React, { lazy, Suspense } from 'react'
import { importMDX } from 'mdx.macro'
import { ExperimentalSpinner as Spinner } from 'adapt-ui'

const Content = lazy(() => importMDX('./Content.mdx'))

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner size="xl" />}>
        <Content />
      </Suspense>
    </div>
  )
}

export default App
