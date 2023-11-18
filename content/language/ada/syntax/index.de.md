---
title: "Grundlegende Ada-Syntax"
date: 2023-05-14T22:57:43+08:00
autor: "ChatGPT"
tags: ["ada", "syntax"]
categories: ["sprache", "programmierung"]
description: "Einführung in die Ada-Programmiersyntax."
keywords: "Ada, Syntax, Programmierung, Regeln, Markdown."
---

Die Syntax von Ada ist darauf ausgelegt, einfach zu lesen und zu schreiben zu sein. Ada ist eine stark typisierte Sprache mit einer strengen Syntax, die die Verwendung von Semikolons zum Beenden von Anweisungen erfordert. Ein Programm ist in Pakete unterteilt, die Prozeduren, Funktionen und Variablen enthalten. Variablen müssen deklariert werden, bevor sie verwendet werden können, und ihr Typ kann nach der Deklaration nicht geändert werden. Ada verwendet Schlüsselwörter wie `if`, `else`, `while` und `for`, um den Programmfluss zu steuern. Ada unterstützt die Verwendung von Arrays, Records und Zeigern und erlaubt die dynamische Speicherzuweisung. Eine der einzigartigen Eigenschaften der Ada-Syntax ist die Verwendung von `in` und `out`, um die Richtung der Parameterübergabe in Unterprogrammen anzugeben. Ada unterstützt auch die Verwendung von Fehlerbehandlung, um Fehler in der Programmausführung zu behandeln. Schließlich ist die Syntax von Ada darauf ausgelegt, Modularität und Wiederverwendbarkeit durch die Verwendung von Paketen und separater Kompilierung zu fördern.

## Datentypen

- Integer: `Integer'First`, `Integer'Last`
- Float: `Float'First`, `Float'Last`, `Float'Positive`, `Float'Negative`
- Boolean: `True`, `False`
- Zeichen: `Character'First`, `Character'Last`, `Character'Val`, `Character'Pos`
- String: `"Hallo, Welt!"`

## Operatoren

- Arithmetisch: `+`, `-`, `*`, `/`, `mod`
- Relationale: `=`, `/=`, `<`, `>`, `<=`, `>=`
- Logische: `and`, `or`, `not`
- Verkettung: `&`
- Zugehörigkeit: `in`

## Kontrollstrukturen

- If-else: `if <Bedingung> then <Anweisung> else <Anweisung> end if;`
- Schleife: `loop <Anweisung> end loop;`
- For-Schleife: `for <Var> in <Bereich> loop <Anweisung> end loop;`
- While-Schleife: `while <Bedingung> loop <Anweisung> end loop;`
- Fallunterscheidung: `case <Ausdruck> is when <Wert> => <Anweisung> end case;`

## Unterprogramme

- Prozedur: `procedure <Name> (<Parameter>) is <Anweisung> end <Name>;`
- Funktion: `function <Name> (<Parameter>) return <Typ> is <Anweisung> end <Name>;`

## Fehlerbehandlung

- Ausnahme: `exception <Name> is <Anweisung> end <Name>;`
- Auslösen: `raise <Name>;`
- Versuch-Auffangen: `begin <Anweisung> exception when <Name> => <Anweisung> end;`

## Generika

- Generisch: `generic (<Parameter>) <Typ/Variable> is <Anweisung> end <Typ/Variable>;`
