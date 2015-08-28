/**
 * The main type of scope in Javascript is Lexical Scoping. 
 * Present in the language from the very beginning, 
 * this is the scope created within a function, 
 * and the one most developers are familiar with.
 *
 * ES6 recently defined Block Scoping.
 * let & const are used to denote variables which are Block Scoped to the
 * current curly braced block.
 */

function foo() {
	var bar;
}