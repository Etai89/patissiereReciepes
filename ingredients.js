const ingredientsDB = [
    { id: 1, name: 'אבקת אפייה' },
    { id: 2, name: 'אבקת חלבון' },
    { id: 3, name: 'אבקת סוכר' },
    { id: 4, name: 'אבקת פטיסייר' },
    { id: 5, name: 'אבקת פטל' },
    { id: 6, name: 'אבקת קקאו' },
    { id: 7, name: 'אגוזי לוז' },
    { id: 8, name: 'אגוזי מלך' },
    { id: 9, name: 'אגוזי פקאן' },
    { id: 10, name: 'אוכמניות' },
    { id: 11, name: 'אינסטנט פודינג וניל' },
    { id: 12, name: 'אפונה ירוקה' },
    { id: 16, name: 'בוטארג' },
    { id: 17, name: 'בוטנים' },
    { id: 18, name: 'ביצים' },
    { id: 19, name: 'ברנדי' },
    { id: 21, name: 'ברס' },
    { id: 22, name: "ג'לטין דגים" },
    { id: 23, name: 'גאודה מגורדת' },
    { id: 24, name: 'גבינה בולגרית' },
    { id: 25, name: 'גבינה לבנה 5%' },
    { id: 26, name: 'גבינה צהובה' },
    { id: 27, name: 'גבינת מסקרפונה' },
    { id: 28, name: 'גבינת עיזים' },
    { id: 29, name: 'גבינת עמק מגורדת' },
    { id: 30, name: 'גבינת פטה כבשים' },
    { id: 31, name: "גבינת פרמז'ן" },
    { id: 32, name: 'גבינת קממבר' },
    { id: 33, name: 'גבינת שמנת 25%' },
    { id: 34, name: 'גבינת שמנת שום שמיר' },
    { id: 35, name: 'גלוטן' },
    { id: 36, name: 'גלוקוז' },
    { id: 38, name: 'גרידת לימון' },
    { id: 39, name: 'גרידת תפוז' },
    { id: 40, name: 'גריסים' },
    { id: 41, name: 'גרנטה (משפר אפייה)' },
    { id: 42, name: 'דבש' },
    { id: 43, name: 'דפי גיטרה' },
    { id: 44, name: 'זיתים קלמנטה' },
    { id: 45, name: 'זרעי פשתן' },
    { id: 46, name: 'זרעי שוקולד' },
    { id: 47, name: 'חומץ 5%' },
    { id: 48, name: 'חומץ בלסמי' },
    { id: 49, name: 'חלב 1%' },
    { id: 50, name: 'חלב 3%' },
    { id: 51, name: 'חלב סויה' },
    { id: 52, name: 'חלב שיבולת שועל' },
    { id: 53, name: 'חלב שקדים' },
    { id: 54, name: 'חמאה' },
    { id: 55, name: 'חמאת בוטנים' },
    { id: 56, name: 'חמאת קקאו' },
    { id: 57, name: 'חמוציות' },
    { id: 59, name: 'חרדל' },
    { id: 60, name: 'טארט מלוח' },
    { id: 61, name: 'טארט מתוק' },
    { id: 62, name: 'טונה' },
    { id: 63, name: 'טימין' },
    { id: 64, name: 'טפיוקה' },
    { id: 65, name: 'יוגורט בקר' },
    { id: 66, name: 'כמון' },
    { id: 68, name: 'מוצרלה בייבי' },
    { id: 69, name: 'מוצרלה מגורדת' },
    { id: 70, name: 'מחית אננס' },
    { id: 71, name: 'מחית דובדבן' },
    { id: 72, name: 'מחית יוזו' },
    { id: 73, name: 'מחית ליים' },
    { id: 74, name: 'מחית ליצ׳י' },
    { id: 75, name: 'מחית מנגו' },
    { id: 76, name: 'מחית פיסטוק' },
    { id: 77, name: 'מחית פסיפלורה' },
    { id: 78, name: 'מחית קסיס' },
    { id: 79, name: 'מחית תפוז דם' },
    { id: 80, name: 'מיונז' },
    { id: 81, name: 'מיץ לימון' },
    { id: 82, name: 'מלח גס' },
    { id: 83, name: 'מלח דק' },
    { id: 84, name: 'מלח לימון' },
    { id: 85, name: 'מלית פסיפלורה' },
    { id: 86, name: 'מלפפון במלח' },
    { id: 87, name: 'ממרח בייגלה' },
    { id: 88, name: 'ממרח זיתים' },
    { id: 89, name: 'ממרח נוגט' },
    { id: 90, name: 'ממרח עגביות מיובשות' },
    { id: 91, name: 'רסק עגבניות' },
    { id: 92, name: 'ממרח קינדר' },
    { id: 93, name: 'ממרח תמרים' },
    { id: 94, name: 'מקלות שקדים' },
    { id: 95, name: 'מקרון 8 צבעים' },
    { id: 103, name: 'מרגרינה' },
    { id: 104, name: 'ממרח נוגט' },
    { id: 105, name: "נפאז׳ ניטראלי חם" },
    { id: 106, name: "סודה לשתייה" },
    { id: 107, name: "סוכר אינוורטי" },
    { id: 108, name: "סוכר גבישי" },
    { id: 109, name: "סוכר חום" },
    { id: 110, name: "סוכר לבן" },
    { id: 111, name: "סוכריות צבעוניות" },
    { id: 112, name: "סירופ מייפל" },
    { id: 113, name: "סלמון נורווגי" },
    { id: 115, name: "עדשים אדומים" },
    { id: 116, name: "עדשים שחורים" },
    { id: 117, name: "קרם פודינג וניל" },
    { id: 118, name: "פונדנט לבן" },
    { id: 119, name: "פטה כבשים 20%" },
    { id: 120, name: "פיסטוק קלוי גרוס" },
    { id: 121, name: "פיסטוק קלוף" },
    { id: 123, name: "פירורי וופל" },
    { id: 124, name: "פניני שוקולד" },
    { id: 125, name: "פסטה" },
    { id: 126, name: "פקטין" },
    { id: 130, name: "צימוקים" },
    { id: 131, name: "ציפוי נייטראלי" },
    { id: 132, name: "קווקר" },
    { id: 133, name: "קוקוס טחון" },
    { id: 134, name: "קורנפלור" },
    { id: 135, name: "קטשופ" },
    { id: 136, name: "קינואה אדומה" },
    { id: 137, name: "קינמון" },
    { id: 138, name: "קמח כוסמין" },
    { id: 139, name: "קמח לבן" },
    { id: 141, name: "קצח" },
    { id: 142, name: "חלמון" },
    { id: 140, name: "חלמון מפוסטר" },
    { id: 143, name: "קרם פררו חלבי" },
    { id: 144, name: "קרם קרמל מלוח" },
    { id: 145, name: "גבינת רוקפורט" },
    { id: 146, name: "רוטב אלף האיים" },
    { id: 147, name: "רוטב ויניגרט" },
    { id: 148, name: "רוטב שום" },
    { id: 149, name: "רום" },
    { id: 150, name: "ריבת חלב" },
    { id: 151, name: "ריבת תות" },
    { id: 155, name: "שברי קקאו" },
    { id: 156, name: "שומשום" },
    { id: 157, name: "שוקולד מריר אצבעות" },
    { id: 158, name: "שוקולד מריר מטבעות" },
    { id: 159, name: "שוקולד מריר אצבעות קצר" },
    { id: 161, name: "שוקולד חלב אצבעות" },
    { id: 162, name: "שוקולד חלב מטבעות" },
    { id: 163, name: "שוקולד לבן מטבעות חלבי" },
    { id: 164, name: "שוקולד לבן כפתורים פרווה" },
    { id: 169, name: "שוקולד מריר מטבעות קליבו" },
    { id: 171, name: "שוקולד צ'יפס" },
    { id: 172, name: "שמן זית" },
    { id: 173, name: "שמן קנולה" },
    { id: 174, name: "שמנת חמוצה 15%" },
    { id: 175, name: "שמנת מתוקה" },
    { id: 176, name: "שמנת צמחית" },
    { id: 177, name: "שמרים" },
    { id: 178, name: "שעועית ירוקה" },
    { id: 179, name: "שקד טחון" },
    { id: 180, name: "שקד מקלות גפרורים" },
    { id: 181, name: "שקדים פרוסים" },
    { id: 182, name: "שקדים קליפורניה טבעי" },
    { id: 183, name: "שקדים שלמים" },
    { id: 184, name: "בצק עלים" },
    { id: 185, name: "בצק קרואסונים" },
    { id: 186, name: "בצק שמרים" },
    { id: 187, name: "בצק שמרים פרווה" },
    { id: 202, name: "פריך חלבי" },
    { id: 203, name: "פריך פרווה" },
    { id: 204, name: "פריך חום" },
    { id: 206, name: "בצק מזונות" },
    { id: 207, name: "בצק קיש" },
    { id: 208, name: "בלילה קיש" },
    { id: 209, name: "גנאש לוז" },
    { id: 210, name: "גנאש קרמל" },
    { id: 211, name: "גנאש שוקולד" },
    { id: 212, name: "קרמל מלוח" },
    { id: 214, name: "קרמו שוקולד פקאן" },
    { id: 215, name: "תחתית טירמיסו" },
    { id: 216, name: "ציפוי שוקולד ברס" },
    { id: 217, name: "קרם פטיסייר חלבי" },
    { id: 218, name: "קרם פטיסייר פרווה" },
    { id: 228, name: "מדלין" },
    { id: 229, name: "שוקולד של פעם" },
    { id: 230, name: "מילוי פירות יער" },
    { id: 231, name: "מילוי גבינה מתוקה" },
    { id: 232, name: "בשמל" },
    { id: 233, name: "גנאש פסיפלורה" },
    { id: 234, name: "גנאש דובדבן" },
    { id: 235, name: "קראנץ' שוקולד" },
    { id: 236, name: "גנאש וניל" },
    { id: 237, name: "גנאש פיסטוק" },
    { id: 238, name: "גנאש קפה" },
    { id: 239, name: "מלית פירות יער" },
    { id: 240, name: "מרנג איטלקי" },
    { id: 241, name: "קומפוט פטל" },
    { id: 242, name: "קומפוט פירות יער" },
    { id: 243, name: "קצפת קפה" },
    { id: 244, name: "קרם לימון פרווה" },
    { id: 245, name: "קרמו פסיפלורה" },
    { id: 246, name: "קרמו שוקולד" },
    { id: 247, name: "מוס קפה" },
    { id: 248, name: "מוס פסיפלורה" },
    { id: 249, name: "כיפות (מוס) לימון פרווה" },
    { id: 250, name: "כיפות יוזו" },
    { id: 251, name: "קרם דיפלומט" },
    { id: 252, name: "קרם דיפלומט ליצ'י" },
    { id: 253, name: "קרם טרמיסו" },
    { id: 254, name: "קרמל קפה" },
    { id: 255, name: "גלייז" },
    { id: 256, name: "בראוניז" },
    { id: 257, name: "רבוך" },
    { id: 258, name: "קרם שקדים חלבי" },
    { id: 259, name: "קרם שקדים פרווה" },
    { id: 260, name: "קרם שקדים קינמון" },
    { id: 261, name: "בצק בריוש" },

]