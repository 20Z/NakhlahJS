---
title: الترتيب المنطقي في عبارات if else
snippet: يتم تنفيذ الدالة من الأعلى إلى الأسفل
order: 7
---

الترتيب مهم في عبارات `if` و `else if`. يتم تنفيذ الدالة من الأعلى إلى الأسفل،
لذا عليك توخي الحذر بشأن العبارة التي تأتي أولاً.

خذ هاتين الوظيفتين كمثال:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

في حين أن هاتين الدالتين تبدوان متطابقتين تقريبًا إذا مررنا رقمًا لكليهما، فإننا
نحصل على مخرجات مختلفة.

```js
foo(0);
bar(0);
```

سوف يقوم `foo(0)` بإرجاع `Less than one`، وسيقوم `bar(0)` بإرجاع
`Less than two`.
