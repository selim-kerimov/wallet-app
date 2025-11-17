/** @type {import("prettier").Config} */
module.exports = {
  // Base style
  semi: false, // No semicolons — cleaner, modern JS style
  singleQuote: true, // Prefer single quotes
  trailingComma: 'all', // Makes diffs cleaner
  bracketSpacing: true, // Add spaces inside object braces: { foo: bar }
  bracketSameLine: false, // Keep JSX closing brackets on a new line
  arrowParens: 'always', // Always include parens around arrow function params
  printWidth: 100, // Reasonable line width for readability
  tabWidth: 2, // Standard 2-space indentation
  useTabs: false, // Spaces are more consistent across environments

  // JSX / TSX preferences
  jsxSingleQuote: false, // Keep double quotes in JSX
  endOfLine: 'lf', // Consistent line endings across OSes

  // Experimental/optional settings
  embeddedLanguageFormatting: 'auto', // Format embedded languages automatically
  proseWrap: 'preserve', // Don’t wrap markdown text by default
}
