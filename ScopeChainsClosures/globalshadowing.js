/**
 * Understanding where Scope Chains end is an important part of scoping. 
 * All Javascript runtimes must implicitly create a Global Scope object 
 * (window in the browser, global in node), 
 * which sits at the top of every scope chain.
 *
 * The javascript runtime follows these steps to assign a variable:
 * 1) Search within the current scope.
 * 2) If not found, search in the immediately outer scope.
 * 3) If found, go to 6.
 * 4) If not found, repeat 2. Until the Global Scope is reached.
 * 5) If not found in Global Scope, create it (on window / global objects).
 * 6) Assign the value.
 * 
 */

function foo() {
	var bar;
	quux = 1;

	function zip() {
		var quux;
	}
}