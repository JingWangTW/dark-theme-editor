---
title: "Markdown Example"
author: "Jing Wang"
date: 2023-03-09T23:11:11+08:00
tags: ["markdown", "syntax"]
categories: ["example", "demo"]
---

# `<h1>` Heading

## `<h2>` Heading

### `<h3>` Heading

#### `<h4>` Heading

##### `<h5>` Heading

###### `<h6>` Heading

## Horizontal Rules

___

---

***

## Emphasis

**This is bold text**

**This is bold text**

*This is italic text*

*This is italic text*

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

### Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  + Marker character change forces new list start:
    + Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    + Nulla volutpat aliquam velit
+ Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

### Start numbering with offset

57. foo
1. bar

## Code

### Inline

Inline `code`

### Indented Code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

### Block code

Block code "fences"

```
Sample text here...
Sample text here...
Sample text here...
```

### Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Syntax highlighting with option

```c {linenos=table,hl_lines=["23-24","26-27",33],linenostart=20}
/*
    C Program: Simple Addition

    Description: This program prompts the user to enter two numbers, calculates their sum, and prints the result.
    
    Author: Your Name
    Date: July 23, 2023
*/

#include <stdio.h>

// Function to add two numbers
int add(int a, int b) {
    return a + b;
}

// Main function
int main() {
    // Declare variables
    int num1, num2, result;

    // Prompt user for input
    printf("Enter the first number: ");
    scanf("%d", &num1);

    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Calculate the sum
    result = add(num1, num2);

    // Display the result
    printf("The sum of %d and %d is: %d\n", num1, num2, result);

    return 0; // Indicate successful completion
}
```

## Tables

### Default Table

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

### Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

+ [link text](http://dev.nodeca.com)
+ [link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

## Definition lists

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.
