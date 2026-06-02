
        // 四個檔案的預設課表資料（已全面補齊為 1~7 節完整課表）
        const defaultLessonsByDay = {
            "1": [
                { name: '第一節：自修(wy)', start: '08:30', end: '09:15', alertBefore: 5, totalNum: 20, presentNum: 20, note: '' },
                { name: '第二節：生科_901(wy)', start: '09:25', end: '10:10', alertBefore: 5, totalNum: 18, presentNum: 18, note: '' },
                { name: '第三節：生科_701(wy)', start: '10:20', end: '11:05', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第四節：生科_802(wy)', start: '11:15', end: '12:00', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
                { name: '第五節：自修(wy)', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第六節：自修(wy)', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第七節：自修(wy)', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' }
            ],
            "2": [
                { name: '第一節：生科_702(wy)', start: '08:30', end: '09:15', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
                { name: '第二節：生科_801(wy)', start: '09:25', end: '10:10', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
                { name: '第三節：自修(wy)', start: '10:20', end: '11:05', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第四節：生科_902(wy)', start: '11:15', end: '12:00', alertBefore: 5, totalNum: 19, presentNum: 19, note: '' },
                { name: '第五節：自修(wy)', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第六節：自修(wy)', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第七節：自修(wy)', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' }
            ],
            "4": [
                { name: '第一節：資科_8甲(st)', start: '08:25', end: '09:10', alertBefore: 5, totalNum: 14, presentNum: 14, note: '' },
                { name: '第二節：資科_9甲(st)', start: '09:20', end: '10:05', alertBefore: 5, totalNum: 7, presentNum: 7, note: '' },
                { name: '第三節：生科_9甲(st)', start: '10:15', end: '11:00', alertBefore: 5, totalNum: 7, presentNum: 7, note: '' },
                { name: '第四節：資科_7甲(st)', start: '11:10', end: '11:55', alertBefore: 5, totalNum: 3, presentNum: 3, note: '' },
                { name: '第五節：生科_8甲(st)', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 14, presentNum: 14, note: '' },
                { name: '第六節：自修', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 14, presentNum: 14, note: '' },
                { name: '第七節：自修', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 14, presentNum: 14, note: '' }
            ],
            "5": [
                { name: '第一節：生科_711(jn)', start: '08:25', end: '09:10', alertBefore: 5, totalNum: 29, presentNum: 29, note: '' },
                { name: '第二節：生科_712(jn)', start: '09:20', end: '10:05', alertBefore: 5, totalNum: 28, presentNum: 28, note: '' },
                { name: '第三節：生科_710(jn)', start: '10:15', end: '11:00', alertBefore: 5, totalNum: 29, presentNum: 29, note: '' },
                { name: '第四節：自修', start: '11:10', end: '11:55', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第五節：自修', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第六節：自修', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
                { name: '第七節：生科_713(jn)', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 28, presentNum: 28, note: '' }
            ]
        };



//---------------------------------------------------------------------------------------------------------------------------------
                // 預設課表（新增 totalNum, presentNum, note 屬性）
        let lessons = JSON.parse(localStorage.getItem('lessons_auto_2026_v2')) || [
            { name: '第一節：生科_711', start: '08:25', end: '09:10', alertBefore: 5, totalNum: 29, presentNum: 29, note: '' },
            { name: '第二節：生科_712', start: '09:20', end: '10:05', alertBefore: 5, totalNum: 28, presentNum: 28, note: '' },
            { name: '第三節：生科_710', start: '10:15', end: '11:00', alertBefore: 5, totalNum: 29, presentNum: 29, note: '' },
            { name: '第四節：自修', start: '11:10', end: '11:55', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第五節：自修', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第六節：自修', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第七節：生科_713', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 28, presentNum: 28, note: '' },
        ];


                // 預設課表（新增 totalNum, presentNum, note 屬性）
        let lessons = JSON.parse(localStorage.getItem('lessons_auto_2026_v2')) || [
            { name: '第一節：自修', start: '08:30', end: '09:15', alertBefore: 5, totalNum: 20, presentNum: 20, note: '' },
            { name: '第二節：生科_901', start: '09:25', end: '10:10', alertBefore: 5, totalNum: 18, presentNum: 18, note: '' },
            { name: '第三節：生科_802', start: '10:20', end: '11:05', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
            { name: '第四節：生科_701', start: '11:15', end: '12:00', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
            { name: '第五節：自修', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第六節：自修', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第七節：自修', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 20, presentNum: 20, note: '' },
        ];

        
                // 預設課表（新增 totalNum, presentNum, note 屬性）
        let lessons = JSON.parse(localStorage.getItem('lessons_auto_2026_v2')) || [
            { name: '第一節：生科_702', start: '08:30', end: '08:15', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
            { name: '第二節：生科_801', start: '09:25', end: '10:10', alertBefore: 5, totalNum: 23, presentNum: 23, note: '' },
            { name: '第三節：自修', start: '10:20', end: '11:05', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第四節：生科_902', start: '11:15', end: '12:00', alertBefore: 5, totalNum: 19, presentNum: 19, note: '' },
            { name: '第五節：自修', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第六節：自修', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
            { name: '第七節：自修', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 22, presentNum: 22, note: '' },
        ];


                // 預設課表（新增 totalNum, presentNum, note 屬性）
        let lessons = JSON.parse(localStorage.getItem('lessons_auto_2026_v2')) || [
            { name: '第一節：資科_8甲', start: '08:25', end: '09:10', alertBefore: 5, totalNum:14, presentNum: 14, note: '' },
            { name: '第二節：資科_9甲', start: '09:20', end: '10:05', alertBefore: 5, totalNum: 7, presentNum: 7, note: '' },
            { name: '第三節：生科_9甲', start: '10:15', end: '11:00', alertBefore: 5, totalNum: 7, presentNum: 7, note: '' },
            { name: '第四節：資科_7甲', start: '11:10', end: '11:55', alertBefore: 5, totalNum: 3, presentNum: 3, note: '' },
            { name: '第五節：生科_8甲', start: '13:00', end: '13:45', alertBefore: 5, totalNum: 14, presentNum: 14, note: '' },
            { name: '第六節：生科_7甲', start: '13:55', end: '14:40', alertBefore: 5, totalNum: 3, presentNum: 3, note: '' },
            { name: '第七節：自修', start: '14:55', end: '15:40', alertBefore: 5, totalNum: 28, presentNum: 28, note: '' },
        ];
//----------------------------------------------------------------------------------------------------------------------------
        