const n="name"
const repo=50

// console.log(n+repo+"Repositories");  old method

console.log(` My name is ${n} and my repo count is ${repo}`);

const newName = new String("Smt");
console.log(newName);
console.log(newName[0]);

console.log(newName.length);

console.log(newName.__proto__); 

str="The Sample String"
console.log(str.length);
console.log(str.toUpperCase());//THE SAMPLE STRING
console.log(str.toLowerCase());//the sample string
console.log(str.substring(4, 10));//Sample
console.log(str.split(" "));//[ 'The', 'Sample', 'String' ]
console.log(str.replace("Sample", "Example"));//The Example String
console.log(str.charAt(5));//S
console.log(str.indexOf("S"));//2
console.log(str.lastIndexOf("e"));//15
console.log(str.includes("Sample"));//check if "Sample" is in the string
console.log(str.startsWith("The"));//check if string starts with "The"
console.log(str.endsWith("String"));//check if string ends with "String"
console.log(str.trim());//remove whitespace from both ends
console.log(str.concat(" - Added Text"));//concatenate strings
console.log(str.repeat(2));//repeat the string 2 times
console.log(str.padStart(25, "*"));//pad the start to a total length of 25 with "*"
console.log(str.padEnd(25, "-"));//pad the end to a total length of 25 with "-"
console.log(str.slice(4, 10));//Sample
console.log(str.search("Sample"));//4 
match = str.matchAll("a");
for (let i of match) {
    console.log(i);
}
match2=str.matchAll(/a/g);//[ [ 'a', index: 2, input: 'The Sample String', groups: undefined ], [ 'a', index: 9, input: 'The Sample String', groups: undefined ] ]
for (let i of match2){
    console.log(i);
}

console.log(str.localeCompare("Another String"));//compare with another string
console.log(str.valueOf());//The Sample String
console.log(str.normalize());//The Sample String
console.log(str.charCodeAt(0));//84 (ASCII code of 'T')
console.log(String.fromCharCode(84, 101, 115, 116));//Test
console.log(str.substr(4, 6));//Sample
console.log(str.toString());//The Sample String
console.log(String.raw`Raw String\nNew Line`);//Raw String\nNew Line
console.log(str.match(/Sample/));//[ 'Sample', index: 4, input: 'The Sample String', groups: undefined ]
console.log(str.search(/Sample/i));//4 (case-insensitive search)

// String to HTML tags
console.log(str.anchor("sampleAnchor"));//<a name="sampleAnchor">The Sample String</a>
console.log(str.big());//<big>The Sample String</big>
console.log(str.blink());//<blink>The Sample String</blink>
console.log(str.bold());//<b>The Sample String</b>
console.log(str.fixed());//<tt>The Sample String</tt>
console.log(str.fontcolor("red"));//<font color="red">The Sample String</font>
console.log(str.fontsize("5"));//<font size="5">The Sample String</font>
console.log(str.italics());//<i>The Sample String</i>
console.log(str.link("http://example.com"));//<a href="http://example.com">The Sample String</a>
console.log(str.small());//<small>The Sample String</small>
console.log(str.strike());//<strike>The Sample String</strike>
console.log(str.sub());//<sub>The Sample String</sub>
console.log(str.sup());//<sup>The Sample String</sup>
console.log(`The Original String-${str}`);//The Original String-The Sample String

console.log("End of String Methods");
