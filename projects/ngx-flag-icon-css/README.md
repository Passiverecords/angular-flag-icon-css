# ngx-flag-icon-css
[![npm version](https://badge.fury.io/js/ngx-flag-icon-css.svg)](https://www.npmjs.com/package/ngx-flag-icon-css)

---

flag-icon-css for Angular 2+

---

### Example:
```HTML
<flag-icon country="fr" squared></flag-icon>
```

- **country** *(Input)*:  
  *the [ISO 3166-1-alpha-2 code](https://www.iso.org/obp/ui/#search) of the flag's country*

- **squared** *(Input)*:  
  *if added, will render a squared version of the flag*

---

### Install:

1. Install both this library as well as flag-icon-css

```bash
npm install ngx-flag-icon-css flag-icon-css
```

2. Add the path to the flag-icon-css stylesheet to your angular.json file (inside the "styles" entry)  
*Note: This key should still exist in the old .angular-cli.json format*

```json
"styles": [
  "src/styles.css",
  "node_modules/flag-icon-css/css/flag-icon.min.css"
],
```
