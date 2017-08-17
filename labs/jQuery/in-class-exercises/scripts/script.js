$(function (){
	
	var CounterCollection = {
	counters: [
		{
			currentValue : 0,
			counterName: "Warnings"
		},
		{
			currentValue : 0,
			counterName: "Errors"
		},
		{
			currentValue : 5,
			counterName: "Whoops"
		}
	],
	addOneToCounterValue: function (counterIndex) {
			this.counters[counterIndex].currentValue += 1;
			$('[data-counter-index="${counterIndex}"]')
	}
}

var $counterContainer = $('#counter-container');
for ( var i =0; i < CounterCollection.counters.length; i++) {	
	var counter = CounterCollection.counters[i];
	var $newDiv = $("<div>");
	$newDiv.addClass('counter');
	$newDiv.data('counterIndex', i);
	$newDiv.append('<h1>').append(counter.counterName);
	$newDiv.append('<span>').append(counter.currentValue);
	var $plusOneButton = $("<button>")
		$plusOneButton.html("+1");
		$plusOneButton.attr('id', 'add-one');
		$newDiv.append($plusOneButton).append;

	var $removeButton = $('<button>');
		$removeButton.html("Remove");
		$removeButton.attr('id', 'remove-counter');
	
	$newDiv.on('click', function(event) {
		event.stopPropagation();
		if(event.target.id === 'remove-counter') {
			$(event.currentTarget).remove();
		} else if (event.target.id === "add-one") {
			counterIndex = $(event.target).data('counterIndex');
			CounterCollection.addOneToCounterValue(counterIndex);
		}
	});

	$newDiv.append($removeButton).append;

	$counterContainer.append($newDiv);
};

var $button = $('#add-one');

$("#add-one").on('click', function () {
    var currentValue = $('#current-count').text();
    var currentValueAsInt = parseInt(currentValue);
    currentValueAsInt += 1;
    $('#current-count').html(currentValueAsInt);
});

$("#add-new-counter").on('click', function(event) {
	event.preventDefault();
	alert($("#new-counter-name").val() + " " + $("#new-counter-start-value").val());
});
});