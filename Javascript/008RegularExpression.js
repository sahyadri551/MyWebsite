a="A long length of stringv with many long words and numbers 1234567890";
console.log(a.match(/long/));
console.log(a.search(/long/)); // / for regular expression
console.log(a.search(/long/g)); // g for global
console.log(a.search(/long/gi)); // g for global and i for case insensitive
console.log(a.replace(/long/g, "short")); // 2 values, 1st is regular expression, 2nd is replacement
console.log(a.replace(/long/gi, "short"));

b="1234567890";
console.log(b.match(/\d/g)); // \d for digits
console.log(b.match(/\D/g)); // \D for non-digits
console.log(b.match(/\w/g)); // \w for words
console.log(b.match(/\W/g)); // \W for non-words
console.log(b.match(/\s/g)); // \s for spaces
console.log(b.match(/\S/g)); // \S for non-spaces
console.log(b.match(/\b/g)); // \b for boundaries
console.log(b.match(/\B/g)); // \B for non-boundaries
console.log(b.match(/\t/g)); // \t for tabs
console.log(b.match(/\n/g)); // \n for newlines
console.log(b.match(/\r/g)); // \r for carriage returns
console.log(b.match(/\f/g)); // \f for form feeds

c="A long length of stringv with many long words and numbers 1234567890";
console.log(c.match(/[^A-Za-z0-9]/g)); // [^A-Za-z0-9] for non-alphanumeric characters (^ for not)
console.log(c.match(/[A-Za-z0-9]/g)); // [A-Za-z0-9] for alphanumeric characters
console.log(c.match(/[A-Za-z0-9\s]/g)); // [A-Za-z0-9\s] for alphanumeric characters and spaces
console.log(c.match(/[A-Za-z0-9\s\W]/g)); // [A-Za-z0-9\s\W] for alphanumeric characters, spaces, and non-word characters
console.log(c.match(/[A-Za-z0-9\s\W\t\n\r\f]/g)); // [A-Za-z0-9\s\W\t\n\r\f] for alphanumeric characters, spaces, non-word characters, tabs, newlines, carriage returns, and form feeds

// Special Characters
d="A long length of stringv with many long words and symbols !@#$%^&*()_+-=[]{}|;':\",.<>/?";
console.log(d.match(/[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/g)); // [!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?] for special characters | \[ for [ | \] for ] | \/ for /
console.log(d.match(/[^!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/g)); // [^!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?] for non-special characters

 regex = /pattern/;
 regex = /pattern/ig;
 regex = /pattern/g;
 regex = /pattern/gi;

 regex = /\d/;
 regex = /\D/;
 regex = /\w/;
 regex = /\W/;
 regex = /\s/;
 regex = /\S/;
 regex = /\b/;
 regex = /\B/;
 regex = /\t/;
 regex = /\n/;
 regex = /\r/;
 regex = /\f/;

 regex = /[A-Za-z0-9\s\W\t\n\r\f]/;
 regex = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/;
 regex = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/g;
 regex = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/gi;

 regex =/[a-z]/
 regex =/[A-Z]/
 regex =/[0-9]/
 console.log(a.match(regex));

 console.log(a.match(/[a-z]/g));
 console.log(a.match(/[A-Z]/g));
 console.log(a.match(/[0-9]/g));

 regex=/[abc]/ // finds any of the characters between the brackets
 regex = /[^abc]/; // the caret (^) negates the set, finding any character NOT between the brackets
 
 regex=/(a|b)/ // finds either 'a' or 'b'
 regex=/(a|b|c)/ // finds either 'a', 'b', or 'c'

 regex=/(a|b)*/ // finds zero or more of either 'a' or 'b'
 regex=/(a|b)+/ // finds one or more of either 'a' or 'b'
 regex=/(a|b)?/ // finds zero or one of either 'a' or 'b'
 regex=/(a|b){3}/ // finds exactly 3 of either 'a' or 'b'
 regex=/(a|b){3,}/ // finds 3 or more of either 'a' or 'b'
 regex=/(a|b){3,5}/ // finds 3 to 5 of either 'a' or 'b'
