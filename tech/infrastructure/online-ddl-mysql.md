---
description: '#mysql #index #ddl #online_ddl'
icon: database
---

# Online DDL / MySQL

{% embed url="https://kaminashi-developer.hatenablog.jp/entry/2023/10/23/mysql-online-ddl" %}

```sql
ALTER TABLE `comments`
ADD INDEX idx_comments_search (`user_id`, `del`, `comment`, `created_at`)
ALGORITHM=INPLACE, LOCK=NONE;
```

> 1. ALTER TABLE によるテーブルロックの影響
>
> MySQL 5.7 の InnoDB テーブルでは、ほとんどの ALTER TABLE 操作が テーブル全体のロックを取得 します。 特に インデックスの追加 (ADD INDEX) や削除 (DROP INDEX) では、テーブルの 書き込み (INSERT, UPDATE, DELETE) がブロックされます。

> 2. ALTER TABLE 実行時のロックモード
>
> MySQL 5.7 の InnoDB テーブルでは、ほとんどの ALTER TABLE 操作が テーブル全体のロックを取得 します。 特に インデックスの追加 (ADD INDEX) や削除 (DROP INDEX) では、テーブルの 書き込み (INSERT, UPDATE, DELETE) がブロックされます。

## Add Index with MySQL@5.7

<details>

<summary>開発環境で実行時間からProdでの実行時間を類推して実行。おおよそ、大体近似値となった。</summary>

```markdown
# 実測
# stg: 86500 rows => (649.16ms)
# 推測
# prod: 211875 rows => (1.5s)
```

</details>

* `ALGORITHM=INPLACE, LOCK=NONE;`でのテーブルロックの有無は時間が短すぎて判断できず。
* テーブルロックかかる前提で進めるが安牌かもしれない。



### FULLTEXT INDEX

FULLTEXT INDEXはOnlineを適用すると、初回はテーブルロックが発生する。

[https://dev.mysql.com/doc/refman/8.4/en/innodb-online-ddl-operations.html](https://dev.mysql.com/doc/refman/8.4/en/innodb-online-ddl-operations.html)

> FULLTEXTユーザー定義の列がない場合、 最初のインデックスを追加するとテーブルが再構築されますFTS\_DOC\_ID。 FULLTEXTテーブルを再構築せずに追加のインデックスを追加できます。

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption><p><a href="https://dev.mysql.com/doc/refman/8.4/en/innodb-online-ddl-operations.html">https://dev.mysql.com/doc/refman/8.4/en/innodb-online-ddl-operations.html</a></p></figcaption></figure>

