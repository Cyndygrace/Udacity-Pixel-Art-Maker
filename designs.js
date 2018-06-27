// // select color input

// // select size input   


// When size is submitted by user, call makeGrid()
	//to set listener to the submit button event in the form
    $("#sizePicker").submit(function(event) {
        event.preventDefault();

        const height = $("#inputHeight").val();
    	const width = $("#inputWeight").val();
        makeGrid(height, width);

             
   });

// to create grid based on the input values
function makeGrid(height, width) {
    $('tr').remove();
    
        for(let r = 1; r<=height; r++) {
            $("#pixelCanvas").append("<tr></tr>");
            for (let c = 1; c<=width; c++) {
                 $('tr').filter(':last').append('<td></td>');
            }
        }
        addColor();
    }

  // to add the different color to each cell when it is clicked      
function addColor() {
	const cell = $("td");
	cell.click(function() {
		const color = $("#colorPicker").val();
    	if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } 
        else {
            $(this).attr('style', 'background-color: ' + color);
        }

	});

   }
   //to add an event listener to the clear color button to set the grid back to default(removes all color)
   $("#clearGridColor").click(function(event) {
   	event.preventDefault();
   	$("td").removeAttr("style");
   });