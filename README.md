# L2now.info

This is a fork of [L2fees.info](https://L2fees.info) with more transaction type, smt like old gasnow.org.

### Running

`yarn install`

`yarn run dev`

### How to add a transaction?

1. Add a new query to `data/queries.ts` list.
2. Implement a query resolver in the one or more adapters in `data/adapters`.
3. Add a `transaction` to `data/transactions.ts` for every adapter you implemented that query, key of `transaction` is query name you defined in step 1.
4. (Optional) Add an icon in `components/icons` for the transaction if it does not exists.

### How to add a network?

1. Define a new adapter in `data/adapters`
2. Implemenet at least one query resolver. (See `data/queries.ts` for queries)
3. Register the new adapter in `data/adapters/index.ts`

---

**Looking for the adapters? Want to improve the data?**

L2now.info is powered by the CryptoStats protocol.

Visit <https://cryptostats.community/discover/l2-fees> to see the adapters used on this site and make changes.
