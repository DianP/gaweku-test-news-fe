/** @type {import('prettier').Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  endOfLine: 'lf',
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@types/(.*)$',
    '^@config/(.*)$',
    '^@lib/(.*)$',
    '^@hooks/(.*)$',
    '^@components/ui/(.*)$',
    '^@components/(.*)$',
    '^@styles/(.*)$',
    '^@app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
