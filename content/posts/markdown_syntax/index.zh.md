---
title: "Markdown範例"
author: "Jing Wang"
date: 2023-03-09T23:11:11+08:00
tags: ["markdown", "語法"]
categories: ["範例", "演示"]
---

# `<h1>` 標題
## `<h2>` 標題
### `<h3>` 標題
#### `<h4>` 標題
##### `<h5>` 標題
###### `<h6>` 標題


## 水平分隔線

___

---

***


## 強調

**這是粗體文字**

__這是粗體文字__

*這是斜體文字*

_這是斜體文字_

~~刪除線~~


## 引用區塊

> 引用區塊也可以巢狀...
>> ... 通過添加額外的大於符號來進一步嵌套...
> > > ... 或在箭頭之間加入空格。


## 列表

### 無序

+ 以 `+`、`-` 或 `*` 開始一行來建立清單
+ 子清單通過縮進2個空格：
  - 改變標記字符會強制開始新清單：
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ 非常簡單！

### 有序

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. 你可以使用連續的數字...
1. ...或保持所有數字為 `1.`

### 以偏移開始編號

57. foo
1. bar

## 程式碼

### 行內
行內 `程式碼`

### 縮排的程式碼

    // 一些註解
    代碼的第一行
    代碼的第二行
    代碼的第三行

### 區塊程式碼
程式碼區塊 "框"

```
這裡是範例文字...
這裡是範例文字...
這裡是範例文字...
```


## 語法突顯

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## 表格

### 預設表格
| 選項   | 描述 |
| ------ | ----------- |
| 數據   | 提供數據文件的路徑，以供傳遞到模板。 |
| 引擎   | 用於處理模板的引擎。預設是Handlebars。 |
| 擴展名  | 用於目標文件的擴展名。 |

### 右對齊的欄位

| 選項 | 描述 |
| ------:| -----------:|
| 數據   | 提供數據文件的路徑，以供傳遞到模板。 |
| 引擎   | 用於處理模板的引擎。預設是Handlebars。 |
| 擴展名  | 用於目標文件的擴展名。 |


## 鏈接

* [連結文字](http://dev.nodeca.com)
* [帶標題的連結](http://nodeca.github.io/pica/demo/ "標題文字!")


## 圖片

![小黃人](https://octodex.github.com/images/minion.png)
![風暴兵貓](https://octodex.github.com/images/stormtroopocat.jpg "風暴兵貓")

與鏈接一樣，圖片也有腳註風格的語法

![Alt text][id]

在文件的後面有個參考，定義了URL的位置：

[id]: https://octodex.github.com/images/dojocat.jpg  "忍者貓"


## 腳註

腳註 1 連結[^first]。

腳註 2 連結[^second]。

重複的腳註引用[^second]。

[^first]: 腳註 **可以有標記**

    以及多個段落。

[^second]: 腳註文字。


## 定義列表

術語 1

:   定義 1
具有延遲繼續。

具有 *內聯標記* 的術語 2

:   定義 2

        { 一些程式碼，屬於定義 2 的一部分 }

    定義 2 的第三段。