---
description: '#mysql #index #ddl'
hidden: true
---

# Add Index with MySQL@5.7

* STGでのテストし、実行時間からProdでの実行時間を類推して実行したところ、大体近似値となった

<details>

<summary>Row計算例例</summary>

```markdown
# 実測
# stg: 86500 rows => (649.16ms)
# 推測
# prod: 211875 rows => (1.5s)
```

</details>



* `ALGORITHM=INPLACE, LOCK=NONE;`でのテーブルロックの有無は時間が短すぎて判断できず。テーブルロックかかる前提で進めるが安牌かもしれない。
