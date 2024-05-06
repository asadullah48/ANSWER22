//Question 22: Intentional Error: Try to produce an array index error in one of your programs. 
//Correct the error before finishing.
var guests = ["222", "123r", "435", "13",]; // Intentional error
var list = ["Usman", "Mansoor", "Mohsin", "Sultan", "Ifraheem", "Zakariyah", "Asadullah"]; // correction done
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var name_1 = list_1[_i];
    console.log("Assalaam O Alikum ".concat(name_1, ", kindly attend iftar with me"));
}
;
