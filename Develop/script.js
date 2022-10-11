// moment input from currentDay id on HTML
var currentTime = moment().format('H');
$('currentDay').text(moment.format('dddd, MMMM Do, YYYY'));

// button and time block rows
var saveBtn = $('button');
var timeBlock = $('textarea');

// time block stamp
var textArea = [
    $('#h9'),
    $('#h10'),
    $('#h11'),
    $('#h12'),
    $('#h13'),
    $('#h14'),
    $('#h15'),
    $('#h16'),
    $('#h17'),
];

// real-time row color change
// Present = ##### Past > ##### Future <

// Saving into Local-Storage
localStorage.setItem("hour-9");

// jquery
let hour10= $("#hour-10").val()
localStorage.setItem("hour-10", hour10)
$("#hour-11").val(localStorage.getItem("hour-11"));