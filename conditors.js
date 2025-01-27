const conditors = {
    ayala: [
        { id: 3, product: "אקל שוקולד פקאן חלבי" },
        { id: 4, product: "אקלר פירות יער פרווה" },
        { id: 5, product: "אקלר קפה פרווה" },
        { id: 6, product: "אקלר קרמל חלבי" },
        { id: 7, product: "אקלר שוקולד פרווה" },
        { id: 15, product: "בראוניז קרמל מלוח חלבי" },
        { id: 22, product: "טירמיסו" },
        { id: 95, product: "פאי אגוזי לוז חלבי" },
        { id: 96, product: "פאי לימון גדול" },
        { id: 97, product: "פאי לימון יוזו חלבי" },
        { id: 98, product: "פאי לימון קטן" },
        { id: 99, product: "פאי מילפאי חלבי" },
        { id: 100, product: "פאי פיסטוק פטל גדול" },
        { id: 101, product: "פאי פיסטוק פטל קטן" },
        { id: 102, product: "פאי פירות גדול" },
        { id: 103, product: "פאי פירות קטן" },
        { id: 104, product: "פאי פסיפלורה גדול" },
        { id: 105, product: "פאי פסיפלורה קטן" },
        { id: 106, product: "פאי קפה גדול" },
        { id: 107, product: "פאי קפה קטן" },
        { id: 108, product: "פאי שוקולד פירות יער גדול" },
        { id: 109, product: "פאי שוקולד פירות יער קטן" },
        { id: 110, product: "פחזניה ליצ'י פטל" },
    ],
    naava: [
        { id: 9, product: "בחושה גזר" },
        { id: 10, product: "בחושה לימון" },
        { id: 11, product: "בחושה מייפל" },
        { id: 12, product: "שמרים פירות יער" },
        { id: 13, product: "בחושה שוקולד" },
        { id: 14, product: "בחושה שיש" },
        { id: 20, product: "חלות" },
        { id: 85, product: "עוגיה בישקוטים" },
        { id: 86, product: "עוגיה גלט סלה" },
        { id: 87, product: "עוגיה טבעוניות" },
        { id: 89, product: "עוגיה כוסמין" },
        { id: 90, product: "עוגיה מונטקאו" },
        { id: 92, product: "עוגיה פריכות שקדים" },
        { id: 115, product: "עוגיות שקדים" },
    ],
    nataly: [
        { id: 1, product: "אופרה גדול" },
        { id: 2, product: "אופרה קטן" },
        { id: 16, product: "גבינה אפויה רגילה" },
        { id: 17, product: "גבינה אפויה שוקולד לבן" },
        { id: 18, product: "חבילה של 10 מקרונים" },
        { id: 19, product: "חבילה של 3 מקרונים" },
        { id: 54, product: "מגש מלוח חלבי" },
        { id: 55, product: "מגש מלוח פרווה" },
        { id: 56, product: "מגש פריקסה פרווה" },
        { id: 57, product: "מגשים פטיפורים חלבי" },
        { id: 58, product: "מגשים פטיפורים פרווה" },
        { id: 59, product: "מוס גבינה פירות יער" },
        { id: 60, product: "מוס דובדבן שוקולד לבן חלבי" },
        { id: 61, product: "מוס טריקולדה בינוני חלבי" },
        { id: 62, product: "מוס טריקולדה גדול חלבי" },
        { id: 63, product: "מוס טריקולדה קטן חלבי" },
        { id: 64, product: "מוס מנגו נוגט פרווה" },
        { id: 65, product: "מוס מנגו שוקולד חלב" },
        { id: 66, product: "מוס פסיפלורה שוקולד לבן חלבי" },
        { id: 67, product: "מוס קסיס שוקולד לבן פרווה" },
        { id: 68, product: "מוס קפה וניל פרווה" },
        { id: 69, product: "מוס שוקולד וניל פרווה" },
        { id: 70, product: "מוקרם לזניה" },
        { id: 71, product: "מוקרם פסטה פטריות" },
        { id: 72, product: "מוקרם תפוחי אדמה" },
        { id: 73, product: "מרק אפונה" },
        { id: 74, product: "מרק בצל" },
        { id: 75, product: "מרק כתום" },
        { id: 76, product: "מרק עגבניות" },
        { id: 77, product: "מרק קוסקוס" },
        { id: 116, product: "פריקסה" },
        { id: 119, product: "קוקיז אגוזי לוז" },
        { id: 120, product: "קוקיז פיסטוק" },
        { id: 121, product: "קוקיז פקאן" },
        { id: 122, product: "קוקיז שוקוצ'יפס" },
        { id: 123, product: "קיש בטטה גדול" },
        { id: 124, product: "קיש בטטה קטן" },
        { id: 125, product: "קיש בצל גדול" },
        { id: 126, product: "קיש בצל קטן" },
        { id: 127, product: "קיש פטריות גדול" },
        { id: 128, product: "קיש פטריות קטן" },
        { id: 129, product: "קיש פלפל פטה גדול" },
        { id: 130, product: "קיש פלפל פטה קטן" },
    ],
    neomi: [
        { id: 84, product: "עוגיה אלפחורס" },
        { id: 88, product: "עוגיה טוויל שקדים" },
        { id: 93, product: "עוגיה ריבה" },
        { id: 117, product: "פררו רושה גדול" },
        { id: 118, product: "פררו רושה קטן" },
    ],
    michael: [
        { id: 31, product: "מאפה בריוש" },
        { id: 32, product: "מאפה בריוש פטיסייר" },
        { id: 33, product: "מאפה גביניה" },
        { id: 34, product: "מאפה דובדבן וניל" },
        { id: 35, product: "מאפה יהלומים פירות יער" },
        { id: 36, product: "מאפה מלוח פטריות" },
        { id: 37, product: "מאפה מלוח קרישה" },
        { id: 38, product: "מאפה קרואסון חמאה גדול" },
        { id: 39, product: "מאפה קרואסון חמאה קטן" },
        { id: 40, product: "מאפה קרואסון פיסטוק" },
        { id: 41, product: "מאפה קרואסון שוקולד חלב" },
        { id: 42, product: "מאפה קרמל מלוח" },
        { id: 43, product: "מאפה רוגלעך" },
        { id: 44, product: "מאפה ריבוע פטיסייר שקדים" },
        { id: 45, product: "מאפה שוסן תפוחים" },
        { id: 46, product: "מאפה שוקולד אגוזי לוז" },
        { id: 47, product: "מאפה שוקולד גדול" },
        { id: 48, product: "מאפה שוקולד קטן" },
        { id: 49, product: "מאפה שנייק צימוקים" },
        { id: 50, product: "מאפה שנייק קינמון" },
        { id: 51, product: "מאפה שנייק שוקוצ'יפס" },
        { id: 52, product: "מאפה שקדים גדול" },
        { id: 53, product: "מאפה שקדים קטן" },
        { id: 91, product: "עוגיה סבלה שוקולד" },
        { id: 131, product: "קרואסון סביח" },
        { id: 132, product: "קרואסון סלמון" },
        { id: 133, product: "ריבועים פטיסייר שקדים" },
        { id: 134, product: "שמרים פטיסייר פירות יער" },
        { id: 135, product: "שמרים פטיסייר צימוקים" },
        { id: 136, product: "שמרים קינמון" },
        { id: 137, product: "שמרים שוקולד חלבי" },
        { id: 138, product: "שמרים שוקולד פרווה" },
        { id: 150, product: "בצק עלים" },
        { id: 151, product: "בצק קרואסונים" },
        { id: 152, product: "בצק שמרים" },
        { id: 153, product: "בצק שמרים פרווה" },

    ],
    newAdds: [
        { id: 200, product: "קנולה" },
        { id: 201, product: "גלט לרואה" },
        { id: 202, product: "פריך חלבי" },
        { id: 203, product: "פריך פרווה" },
        { id: 204, product: "פריך חום" },
        { id: 205, product: "אוזני פיל" },
        { id: 206, product: "בצק מזונות" },
        { id: 207, product: "בצק קיש" },
        { id: 208, product: "בלילה קיש" },
        { id: 209, product: "גנאש לוז" },
        { id: 210, product: "גנאש קרמל" },
        { id: 211, product: "גנאש שוקולד" },
        { id: 212, product: "קרמל מלוח" },
        { id: 213, product: "רבוך קקאו " },
        { id: 214, product: "קרמו שוקולד פקאן" },
        { id: 215, product: "תחתית טירמיסו" },
        { id: 216, product: "ציפוי שוקולד ברס" },
        { id: 217, product: "קרם פטיסייר חלבי" },
        { id: 218, product: "קרם פטיסייר פרווה" },
        { id: 219, product: "פטיפור לימון" },
        { id: 220, product: "פטיפור קפה" },
        { id: 221, product: "פטיפור דובדבן" },
        { id: 222, product: "פטיפור אקלר פיסטוק" },
        { id: 223, product: "פטיפור פסיפלורה" },
        { id: 224, product: "פטיפור רושה" },
        { id: 225, product: "פטיפור אופרה" },
        { id: 226, product: "פטיפור פחזניה לוז" },
        { id: 227, product: "פטיפור אקלר וניל וקפה" },
        { id: 228, product: "מדלין" },
        { id: 229, product: "שוקולד של פעם" },
        { id: 230, product: "מילוי פירות יער" },
        { id: 231, product: "מילוי גבינה מתוקה" },
        { id: 232, product: "בשמל" },
        { id: 257, product: "קרם שקדים חלבי" },
        { id: 257, product: "קרם שקדים פרווה" },
        { id: 257, product: "קרם שקדים קינמון" },
    ]
}