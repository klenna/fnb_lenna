import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import useUiRelated from 'store/ui-related'

export default function CodeBlock({
  code,
}) {
  const [theme, setTheme] = useState(atomOneDark)
  const { theme: currentTheme } = useUiRelated((state) => state)

  useEffect(() => {
    const selectedTheme = currentTheme === 'dark' ? atomOneDark : atomOneLight
    setTheme(selectedTheme)
  }, [currentTheme])

  return (
    <SyntaxHighlighter
      language='javascript'
      showLineNumbers
      style={theme}
      useInlineStyles
      wrapLines
    >
      {code}
    </SyntaxHighlighter>
  )
}

CodeBlock.propTypes = {
  code: PropTypes.string,
}
