# solhint-plugin-cmf-rules

Notice that this plugin will only work with `solhint v3.0.0`, there is currently a pre-release that you can install with `npm i solhint@next`
To use these rules with your solhint build simply `npm i solhint-plugin-cmf-rules` into your repository

if you don't have a `.solhint.json` then execute `npx solhint init-config` and fill that file with the following:


```json
{
  "extends": ["solhint:recommended"],
  "plugins": ["cmf-rules"],
  "rules": {
    "cmf-rules/no-alias": "warn",
    "cmf-rules/no-underscore-params": "warn",
    "cmf-rules/underscore-on-private-internal-var": "warn",
    "cmf-rules/underscore-on-private-internal-func": "warn",
    "cmf-rules/private-state-variable": "warn",
    "cmf-rules/unammed-returns": "warn",
    "cmf-rules/interface-names": "warn",
    "func-order": "off",
    "mark-callable-contracts": "off",
    "no-empty-blocks": "off",
    "compiler-version": ["error", "0.6.4"]
  }
}

```
