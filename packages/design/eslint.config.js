import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Relax rules for a design system library with auto-generated components
      'react-refresh/only-export-components': 'off', // Design system exports utilities too
      '@typescript-eslint/no-unused-vars': 'warn', // Allow unused vars in library code
      '@typescript-eslint/no-empty-interface': 'off', // Common in design systems for extensibility
      '@typescript-eslint/no-empty-object-type': 'off', // Similar to empty interface
      '@typescript-eslint/ban-ts-comment': 'warn', // Allow ts-ignore in library code
    },
  },
)
