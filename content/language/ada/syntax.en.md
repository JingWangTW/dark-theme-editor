---
title: "Ada Basic Syntax"
date: 2023-05-14T22:57:43+08:00
author: "ChatGPT"
tags: ["ada", "syntax"]
categories: ["language", "programming"]
description: "Introduction to Ada programming syntax."
keywords: "Ada,syntax,programming,rules,markdown."
---

The syntax of Ada is designed to be easy to read and write. Ada is a strongly typed language with a strict syntax that requires the use of semicolons to end statements. A program is divided into packages that contain procedures, functions, and variables. Variables must be declared before they can be used, and their type cannot be changed after declaration. Ada uses keywords such as `if`, `else`, `while`, and `for` to control program flow. Ada supports the use of arrays, records, and pointers, and allows for dynamic memory allocation. One of the unique features of Ada's syntax is the use of `in` and `out` to specify the direction of parameter passing in subprograms. Ada also supports the use of exception handling to deal with errors in a program's execution. Finally, Ada's syntax is designed to promote modularity and reusability through the use of packages and separate compilation.

## Data Types
- Integer: `Integer'First`, `Integer'Last`
- Float: `Float'First`, `Float'Last`, `Float'Positive`, `Float'Negative`
- Boolean: `True`, `False`
- Character: `Character'First`, `Character'Last`, `Character'Val`, `Character'Pos`
- String: `"Hello, world!"`

## Operators
- Arithmetic: `+`, `-`, `*`, `/`, `mod`
- Relational: `=`, `/=`, `<`, `>`, `<=`, `>=`
- Logical: `and`, `or`, `not`
- Concatenation: `&`
- Membership: `in`

## Control Structures
- If-else: `if <condition> then <statement> else <statement> end if;`
- Loop: `loop <statement> end loop;`
- For-loop: `for <var> in <range> loop <statement> end loop;`
- While-loop: `while <condition> loop <statement> end loop;`
- Case: `case <expression> is when <value> => <statement> end case;`

## Subprograms
- Procedure: `procedure <name> (<parameters>) is <statement> end <name>;`
- Function: `function <name> (<parameters>) return <type> is <statement> end <name>;`

## Exception Handling
- Exception: `exception <name> is <statement> end <name>;`
- Raise: `raise <name>;`
- Try-catch: `begin <statement> exception when <name> => <statement> end;`

## Generics
- Generic: `generic (<parameters>) <type/variable> is <statement> end <type/variable>;`