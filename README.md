# מיני פרוייקט במדעי הרוח הדיגיטליים

הנושא שאנחנו בחרנו למיני פרוייקט הוא איסוף מידע על מנות טבעוניות וצמחוניות ברחבי הארץ, יצירת מאגר מידע המכיל בפורמט אחיד מידע על כל המנות הצמחוניות והטבעוניות, וניתוח השפה המופיעה בתפריטים ומתארת את המנות תוך השוואה בין סוגי המנות השונים..

## מטרת הפרויקט

המטרה העיקרית של הפרויקט היא ליצור פתרון עבור אנשים צמחונים או טבעונים שמעוניינים למצוא אפשרויות נוספות למקומות בהם הם יכולים לאכול, ובנוסף לכך ללמוד על ההבדלים בשפה המתארת מנות טבעוניות, צמחוניות ולא צמחוניות.    

## רקע

בשנים האחרונות חל שינוי משמעותי במודעות החברה לצמחונות ולטבעונות והתרחשה עליה בכמות האנשים המזדהים כצמחונים או טבעונים. בהתאם לשינוי זה גם מסעדות מציעות יותר מנות המתאימות לצמחונים ולטבעונים, ולמרות זאת לאדם שהתזונה שלו מוגבלת יכול להיות קשה למצוא מקומות שמציעים אוכל שהוא אוהב וגם מתאים להשקפות האתיות או הבריאותיות שלו. 

## היעד

היעד העיקרי של הפרויקט היא יצירת מאגר מידע נגיש ונוח לשימוש עם מגוון של מנות צמחוניות וטבעוניות ממסעדות בכל רחבי הארץ.

## תוכנית עבודה

שלבי העבודה שלנו יהיו:
1. איסוף מידע על כל המנות שקיימות במסעדות ברחבי הארץ ממקורות המידע שלנו.
2. מיון המידע לפי אלגוריתם שנפתח כך שלכל מנה יהיה סימון המסמן האם היא צמחונית, טבעונית או לא צמחונית, ובכך תאפשר מיון עתידי קל יותר.
3. סידור המידע עד ליצירת פורמט אחיד המכיל את כל המידע הנחוץ לנו.
4. איחסון המידע ב Database.
5. יצירת אלגוריתמים המוצאים את המילים הנפוצות ביותר בכל קטגוריה.
6. הצגת המילים השונות המתארות מנות לפי סוג המנה באתר ייעודי שנבנה לשם כך. 

### האתגר

האתגר העיקרי של העבודה יהיה השגת מידע מכמה מקורות מידע שונים, מיון של המידע שנקבל וסידור שלו מחדש כדי שיתאים למאגר מידע אחיד שניצור.

### מקורות מידע

את המידע נאסוף ממאגרי מידע גדולים המאכסנים מידע על מסעדות ברחבי הארץ.

### Wolt

https://wolt.com/he/isr

וולט הוא אחד משירותי משלוחי המזון המובילים בארץ, ועל כן ה API שלו מכיל מידע רב על מנות שניתן להזמין, ביניהן גם מנות צמחוניות או טבעוניות.
אנחנו נשתמש ב API בו הם משתמשים במערכת שלהם על מנת לקבל מהם את המידע על כל המנות הרלוונטיות לנו.

### 10bis

https://www.10bis.co.il/next/

10ביס היא עוד אפליקציה המרכזת מנות מגוונות מרחבי הארץ וידועה בעיקר כהטבה שניתנת לעובדי חברה למען רכישת מזון. באופן דומה נשתמש ב API של 10ביס כדי לקבל את המידע שאנחנו צריכים על מנות צמחוניות וטבעוניות. 

## כלים

את הפרוייקט כולו נכתוב בשפה JavaScript.

לחלק של הוצאת המידע מהאינטרנט ואיחסון המידע באופן מאורגן נשתמש בכמה כלים:
MongoDB
REST API
Node.JS
Axios

לאחר השלב הראשון של הוצאת המידע, אירגונו, איחסונו וניתוחו, נרצה להציג את התוצאות באופן נעים לעין, הכולל הצגה של הגרפים אותם ניצור..
בחלק זה של העבודה נשתמש בכלים הבאים:

Wix

Tableau

## שפה- עברית או אנגלית?

העבודה שלנו תהיה כולה בעברית, כיוון שהתוכן בה יהיה רלוונטי בעיקר לארץ ועל כן אנחנו מאמינים שיהיה נגיש יותר לתושבי הארץ אם הכל יוצג בעברית.

## רשימת מקורות ביבליוגרפיים

### Is It Vegan? How to Know If Your Food Products Are Vegan

https://www.veganfirst.com/article/how-to-identify-vegan-products-read-vegan-labels

כתבה המסבירה כיצד מרשימת מרכיבים ניתן להבין האם מנה כלשהי היא טבעונית.

### This Is How Many Vegans Are In The World Right Now (2021 Update)

https://thevou.com/lifestyle/2019-the-world-of-vegan-but-how-many-vegans-are-in-the-world/

### The Language of Food

http://www.linguisticanthropology.org/blog/2014/09/16/jurafsky-the-language-of-food/

כתבה בה מדובר על העליה בכמות הטבעונים והצמחונים בשנים האחרונות.


## אתר התוצאות

https://edenwolfson93.wixsite.com/miniproject
