---
title: القيم المنطقية والتعامل معها
snippet: قد تكون القيم المنطقية واحدة فقط من قيمتين
order: 9
---

نوع آخر من البيانات هو `Boolean`. قد تكون القيم المنطقية واحدة فقط من قيمتين:
`true` أو `false`. إنها في الأساس مفاتيح تشغيل وإيقاف صغيرة، حيث يتم تشغيل
`true` وإيقاف `false`. هاتان الدولتان متنافيتان.

<mark>
لا يتم كتابة القيم المنطقية أبدًا مع علامات الاقتباس. السلاسل "true" و"false"
ليست منطقية وليس لها أي معنى خاص في JavaScript.
</mark>

```js
function welcomeToBooleans() {
  return true;
}

let t = welcomeToBooleans();
let f = false;
```
