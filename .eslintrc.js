module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: { parser: 'babel-eslint' },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    // properties camelcase
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    // タグの最後で改行しないで
    'vue/html-closing-bracket-newline': [2, { multiline: 'never' }],
    // モジュール名の自由化
    'vue/no-unused-components': [0, { ignoreWhenBindingPresent: false }],
    // 不要なカッコは消す
    'no-extra-parens': ['error', 'all'],
    // 無駄なスペースは削除
    'no-multi-spaces': ['error'],
    // 空改行は1行まで
    'no-multiple-empty-lines': ['error', { max: 1 }],
    // 関数とカッコはあけない(function hoge() {/** */})
    'func-call-spacing': ['error', 'never'],
    // true/falseを無駄に使うな
    'no-unneeded-ternary': ['error'],
    // セミコロンは禁止
    semi: ['error', 'never'],
    // 文字列はシングルクオートのみ
    quotes: ['error', 'single'],
    // 改行コードはLF
    'linebreak-style': ['error', 'unix'],
    // varは禁止
    'no-var': ['error'],
    // jsのインデントは２
    indent: ['error', 2],
    // かっこの中はスペースなし
    'space-in-parens': ['error', 'never'],
    // console.logは禁止 TODO: ここをあとで変える
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
    // カンマの後にスペース入れる
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 配列のindexには空白入れるな(hogehoge[ x ])
    'computed-property-spacing': ['error', 'never'],
    // objectコロンの間はあけず、そのあとはあけて、インデントはコロンにあわせる
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        mode: 'strict'
      }
    ],
    // 予約語のあとはスペース
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: { as: { before: true } }
      }
    ],
    // 関数前にスペースあけろ
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3
        },
        ImportDeclaration: 'never',
        ExportDeclaration: 'never'
      }
    ],
    'object-property-newline': 'error'
  }
}
