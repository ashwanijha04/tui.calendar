'use strict';

/* eslint-disable require-jsdoc, no-unused-vars */

var CalendarList = [];

function CalendarInfo() {
    this.id = null;
    this.name = null;
    this.checked = true;
    this.color = null;
    this.bgColor = null;
    this.borderColor = null;
    this.dragBgColor = null;
}

function addCalendar(calendar) {
    CalendarList.push(calendar);
}

function findCalendar(id) {
    var found;

    CalendarList.forEach(function(calendar) {
        if (calendar.id === id) {
            found = calendar;
        }
    });

    return found || CalendarList[0];
}

function hexToRGBA(hex) {
    var radix = 16;
    var r = parseInt(hex.slice(1, 3), radix),
        g = parseInt(hex.slice(3, 5), radix),
        b = parseInt(hex.slice(5, 7), radix),
        a = parseInt(hex.slice(7, 9), radix) / 255 || 1;
    var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

    return rgba;
}


(function() {
    var calendar;
    var id = 0;

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Working';
    calendar.color = '#ffffff';
    calendar.bgColor = '#1fab89';
    calendar.dragBgColor = '#1fab89';
    calendar.borderColor = '#1fab89';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Working(7AM)';
    calendar.color = '#ffffff';
    calendar.bgColor = '#17b978';
    calendar.dragBgColor = '#17b978';
    calendar.borderColor = '#17b978';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Work Off';
    calendar.color = '#ffffff';
    calendar.bgColor = '#00a9ff';
    calendar.dragBgColor = '#00a9ff';
    calendar.borderColor = '#00a9ff';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Planned Leave';
    calendar.color = '#ffffff';
    calendar.bgColor = '#ffbd39';
    calendar.dragBgColor = '#ffbd39';
    calendar.borderColor = '#ffbd39';
    addCalendar(calendar);

    calendar = new CalendarInfo();
    id += 1;
    calendar.id = String(id);
    calendar.name = 'Unplanned Leave';
    calendar.color = '#ffffff';
    calendar.bgColor = '#e23e57';
    calendar.dragBgColor = '#e23e57';
    calendar.borderColor = '#e23e57';
    addCalendar(calendar);
})();
