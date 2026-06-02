        // 預設段考科別考程
        let lessons = JSON.parse(localStorage.getItem('exam_lessons_2026_v3')) || [
            { name: '第一節：國文', start: '08:40', end: '09:50', alertBefore: 5, totalNum: 30, presentNum: 30, note: '' },
            { name: '第二節：英文', start: '10:10', end: '11:10', alertBefore: 5, totalNum: 30, presentNum: 30, note: '' },
            { name: '第三節：英聽', start: '11:30', end: '11:55', alertBefore: 5, totalNum: 30, presentNum: 30, note: '播放播音系統' },
            { name: '第四節：數學', start: '13:30', end: '14:40', alertBefore: 5, totalNum: 30, presentNum: 30, note: '' },
            { name: '第五節：自然', start: '15:00', end: '16:00', alertBefore: 5, totalNum: 30, presentNum: 30, note: '' },
            { name: '第六節：社會', start: '16:10', end: '17:10', alertBefore: 5, totalNum: 30, presentNum: 30, note: '延續第五節結束10分後' }
        ];
