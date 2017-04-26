var alarms = [
      {name: 'alarm1'}
    , {name: 'alarm2'}
    , {name: 'alarm3'}
];


var new_alarms = [];


$(alarms).each(function() {
    console.log(this);
    new_alarms.push(this);
});


console.log(alarms, new_alarms);