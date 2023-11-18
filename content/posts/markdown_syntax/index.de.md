---
title: "Markdown-Syntax"
author: "Jing Wang"
date: 2023-03-09T23:11:11+08:00
tags: ["markdown", "syntax"]
categories: ["beispiel", "demo"]
---

# `<h1>` Überschrift

## `<h2>` Überschrift

### `<h3>` Überschrift

#### `<h4>` Überschrift

##### `<h5>` Überschrift

###### `<h6>` Überschrift

## Horizontale Linien

___

---

***

## Betonung

**Dieser Text ist fett**

**Dieser Text ist fett**

*Dieser Text ist kursiv*

*Dieser Text ist kursiv*

~~Durchgestrichen~~

## Blockzitate

> Blockzitate können auch verschachtelt sein...
>> ...durch Verwendung zusätzlicher Größer-als-Zeichen direkt hintereinander...
> > > ...oder mit Leerzeichen zwischen den Pfeilen.

## Listen

### Ungeordnet

+ Erstelle eine Liste, indem du eine Zeile mit `+`, `-` oder `*` beginnst
+ Unterlisten werden durch Einrücken um 2 Leerzeichen erstellt:
  + Änderung des Markerzeichens zwingt einen neuen Listenbeginn:
    + Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    + Nulla volutpat aliquam velit
+ Sehr einfach!

### Geordnet

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. Du kannst aufeinanderfolgende Zahlen verwenden...
1. ...oder alle Zahlen als `1.` belassen.

### Beginne mit Offset-Nummerierung

57. foo
1. bar

## Code

### Inline

Inline `Code`

### Eingerückter Code

    // Einige Kommentare
    Zeile 1 des Codes
    Zeile 2 des Codes
    Zeile 3 des Codes

### Codeblock

Codeblock mit "Fences"

```
Beispieltext hier...
Beispieltext hier...
Beispieltext hier...
```

### Syntaxhervorhebung

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Syntaxhervorhebung mit Option

```c {linenos=table,hl_lines=["23-24","26-27",33],linenostart=20}
/*
    C-Programm: Einfache Addition

    Beschreibung: Dieses Programm fordert den Benutzer auf, zwei Zahlen einzugeben, berechnet ihre Summe und gibt das Ergebnis aus.
    
    Autor: Ihr Name
    Datum: 23. Juli 2023
*/

#include <stdio.h>

// Funktion zum Addieren von zwei Zahlen
int addiere(int a, int b) {
    return a + b;
}

// Hauptfunktion
int main() {
    // Variablen deklarieren
    int num1, num2, ergebnis;

    // Benutzer um Eingabe bitten
    printf("Geben Sie die erste Zahl ein: ");
    scanf("%d", &num1);

    printf("Geben Sie die zweite Zahl ein: ");
    scanf("%d", &num2);

    // Summe berechnen
    ergebnis = addiere(num1, num2);

    // Ergebnis anzeigen
    printf("Die Summe von %d und %d ist: %d\n", num1, num2, ergebnis);

    return 0; // Erfolgreicher Abschluss anzeigen
}
```

## Tabellen

### Standardtabelle

| Option | Beschreibung |
| ------ | ----------- |
| data   | Pfad zu den Daten, die in die Vorlagen eingespeist werden sollen. |
| engine | Engine, die für die Verarbeitung der Vorlagen verwendet wird. Handlebars ist die Standardoption. |
| ext    | Dateierweiterung für Ziel-Dateien. |

### Rechtsbündige Spalten

| Option | Beschreibung |
| ------:| -----------:|
| data   | Pfad zu den Daten, die in die Vorlagen eingespeist werden sollen. |
| engine | Engine, die für die Verarbeitung der Vorlagen verwendet wird. Handlebars ist die Standardoption. |
| ext    | Dateierweiterung für Ziel-Dateien. |

## Links

+ [Linktext](http://dev.nodeca.com)
+ [Link mit Titel](http://nodeca.github.io/pica/demo/ "Titeltext!")

## Bilder

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "Der Stormtroopocat")

Wie bei Links verwenden auch Bilder eine Fußnoten-artige Syntax

![Alt-Text][id]

Mit einer späteren Referenz im Dokument, die den URL-Standort definiert:

[id]: https://octodex.github.com/images/dojocat.jpg  "Der Dojocat"

## Fußnoten

Fußnote 1 Link[^erste].

Fußnote 2 Link[^zweite].

Doppelte Fußnotenreferenz[^zweite].

[^erste]: Fußnote **kann Markup haben**

    und mehrere Absätze.

[^zweite]: Fußnotentext.

## Definitionlisten

Begriff 1

:   Definition 1
mit fortgesetzter Darstellung.

Begriff 2 mit *inline Markup*

:   Definition 2

        { etwas Code, Teil von Definition 2 }

    Dritter Absatz der Definition 2.
