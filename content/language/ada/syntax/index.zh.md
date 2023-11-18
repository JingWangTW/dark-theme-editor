---
title: "Ada基本語法"
date: 2023-05-14T22:57:43+08:00
author: "ChatGPT"
tags: ["ada", "語法"]
categories: ["語言", "程式設計"]
description: "介紹Ada程式語法。"
keywords: "Ada,語法,程式設計,規則,Markdown。"
---

Ada的語法設計旨在易於閱讀和編寫。Ada是一種強型別語言，其嚴格的語法要求使用分號結束語句。程式被劃分為包(package)，包含程序、函式和變數。必須在使用變數之前宣告變數，且宣告後其類型不能更改。Ada使用關鍵字如 `if`、`else`、`while` 和 `for` 來控制程式流程。Ada支援使用陣列、記錄和指標，並允許動態記憶體配置。Ada語法的獨特特點之一是使用 `in` 和 `out` 來指定子程序中參數傳遞的方向。Ada還支援使用異常處理來處理程式執行中的錯誤。最後，Ada的語法旨在通過使用包和獨立編譯來促進模組化和可重用性。

## 資料類型

- 整數：`Integer'First`，`Integer'Last`
- 浮點數：`Float'First`，`Float'Last`，`Float'Positive`，`Float'Negative`
- 布林：`True`，`False`
- 字元：`Character'First`，`Character'Last`，`Character'Val`，`Character'Pos`
- 字串：`"你好，世界!"`

## 運算子

- 算術運算：`+`，`-`，`*`，`/`，`mod`
- 關係運算：`=`，`/=`，`<`，`>`，`<=`，`>=`
- 邏輯運算：`and`，`or`，`not`
- 連接運算：`&`
- 成員運算：`in`

## 控制結構

- if-else：`if <condition> then <statement> else <statement> end if;`
- 迴圈：`loop <statement> end loop;`
- for-迴圈：`for <var> in <range> loop <statement> end loop;`
- while-迴圈：`while <condition> loop <statement> end loop;`
- Case：`case <expression> is when <value> => <statement> end case;`

## 子程序

- 程序：`procedure <name> (<parameters>) is <statement> end <name>;`
- 函式：`function <name> (<parameters>) return <type> is <statement> end <name>;`

## 異常處理

- 異常：`exception <name> is <statement> end <name>;`
- 拋出異常：`raise <name>;`
- try-catch：`begin <statement> exception when <name> => <statement> end;`

## 泛型

- 泛型：`generic (<parameters>) <type/variable> is <statement> end <type/variable>;`
