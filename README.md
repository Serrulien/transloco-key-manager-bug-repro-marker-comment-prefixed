Do `npm run i18n:find`

The missing key nammed _ERR_ should not be detected as a key. See the comments in app.component.ts.

---

To generate this project I did:

```sh
ng new
npx ng add @ngneat/transloco
npx ng g @ngneat/transloco:keys-manager
```
