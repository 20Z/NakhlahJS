---
title: استخدم الأقواس
snippet: يعد تدوين القوس طريقة للحصول على حرف في فهرس
order: 4
---

يعد تدوين القوس طريقة للحصول على حرف في فهرس معين داخل سلسلة.

معظم لغات البرمجة الحديثة، مثل JavaScript، لا تبدأ بالعد من الرقم 1 كما يفعل
البشر. تبدأ عند 0. ويشار إلى ذلك بالفهرسة الصفرية.

على سبيل المثال، الحرف الموجود في الفهرس 0 في الكلمة `Yazan` هو `Y`. إذا
`"const firstName = "Yazan`، يمكنك الحصول على قيمة الحرف الأول من السلسلة
باستخدام `firstName[0]`.

```js
const firstName = "Yazan";
const firstLetter = firstName[0];
console.log(firstLetter);
```

`firstLetter` سيكون لها قيمة السلسلة `Y`.

<div class="quiz">
قم بطباعة حرف <code>r</code> من المتغير <code>country</code> في وحدة التحكم.
</div>