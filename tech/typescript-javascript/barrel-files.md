# Barrel Files

2025年において、Barrel Filesはマイナス評価が多い。

```tsx
// utils/index.ts
export * from './test';
export * from './fuga';
export * from './hoge';
```



{% embed url="https://developers.prtimes.jp/2025/01/28/avoid-barrel-files-in-prtimes/" %}

{% embed url="https://tkdodo.eu/blog/please-stop-using-barrel-files" %}

* 循環参照の可能性
* パフォーマンス劣化
  * Tree shaking&#x20;
  * Code Slitting

