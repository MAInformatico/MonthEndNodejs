//Functions in AngularJS for MonthEnd
	
var app = angular.module('calculate', []);
	app.controller('ctrl', function($scope) {
	    $scope.salary= 0;
	    $scope.rentb= 0;
	    $scope.comub= 0;
	    $scope.elecb= 0;
	    $scope.watb= 0;
	    $scope.intb= 0;
	    $scope.gasb= 0;
	});


//Function to export the current info to pdf file
function printPDF() {
        var pdf = new jsPDF('p', 'pt', 'letter');
        source = $('#print')[0];

        specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                return true
            }
        };
        margins = {
            top: 80, bottom: 60, left: 80, width: 522
        };

        pdf.fromHTML( source, margins.left, margins.top, {
                'width': margins.width, 
                'elementHandlers': specialElementHandlers
            },

            function (dispose) {
                pdf.save('MonthEnd.pdf');
            }, margins
        );
    }