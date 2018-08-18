// Creating the app namespace

var medTracker = {};



medTracker.addMed = function(medName, medQty) {
	$('ul').append(`<li class="med-list-item">
		<span class="remove-med">&times;</span>
		<span class="med-name">${medName}</span> 
		<button class="add-rem minus">-</button> 
		<span class="med-qty">${medQty}</span> 
		<button class="add-rem plus">+</button></li>`);
};

medTracker.remMed = function () {
	$('ul').on('click touchstart', '.remove-med', function () {
		const $removeMedListItem = $(this).parent();
		$removeMedListItem.remove();
	});
};

/*medTracker.plusMedQty = function () {
	//const currentMedQty = parseInt($('.med-qty').text());
	$('li').on('click touchstart', '.plus', function () {
		let newQty = parseInt($(this).find('.med-qty').text()) + 1;
		$('.med-qty').text(newQty);	
		console.log('added')	
	});
};

medTracker.minusMedQty = function () {
	$('.minus').on('click touchstart', function () {
		let newQty = parseInt($('.med-qty').text()) - 1;
		$('.med-qty').text(newQty);
		console.log('subbed')	
	});
};*/

medTracker.addRemMedQty = function () {
    $('.plus').click(function(){
	    // Get the field name
	    //fieldName = $(this).attr('field');
	    // Get its current value
	    const currentVal = parseInt($('.med-qty').val());
	    console.log(currentVal)
	    // If is not undefined
	    if (!isNaN(currentVal)) {
	        // Increment
	        $('.med-qty').val(currentVal + 1);
	    } else {
	        // Otherwise put a 0 there
	        $('.med-qty').val(0);
	    }
	});
};



medTracker.modalBtn = function () {
	const $modal = $('#mainModal'); 
	const $btn = $('#addMedBtn');
	const $spanX = $('#closeModal');
	const $medNameInput = $('#add-user-med');

	// When user clicks/touches on add medicine button, open modal 
	$btn.on('click touchstart', function() {
		$modal.css('display','block');
		
		// Focus cursor on Input
		$medNameInput.focus();
	});

	// When user clicks/touches 'x', close modal
	$spanX.on('click touchstart', function() {
		$modal.css('display','none');
	});
};

medTracker.init = function () {
	medTracker.modalBtn();
	medTracker.remMed();
	//medTracker.plusMedQty();
	//medTracker.minusMedQty();

	$('form').on('submit', function (e) {

		//Prevent Default
		e.preventDefault();

		// Getting values from both fields
		const medNameInput = $('#add-user-med').val();
		const medQtyInput = $('#add-user-med-qty').val();

		// Sortable UI
		

		//Append Medicine Addition
		medTracker.addMed(medNameInput,medQtyInput);

		//Clear fields
		$('#add-user-med').val('');
		$('#add-user-med-qty').val('');

		//Close modal
		$('#mainModal').css('display','none');

	});
};

$(function () {
	medTracker.init();
});