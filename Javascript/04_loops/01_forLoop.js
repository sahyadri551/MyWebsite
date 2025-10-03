for (let j=0; j<5; j++) {
    console.log(j); // 0, 1, 2, 3, 4
}

arr=[1,2,3,4,5]
for (let j=0; j<arr.length; j++) {
    console.log(arr[j]); // 1, 2, 3, 4, 5
}

for (let j=arr.length-1; j>=0; j--) {
    console.log(arr[j]); // 5, 4, 3, 2, 1
}

// break and continue
for (let j=0; j<5; j++) {
    if (j==3) {
        break;
    }
    console.log(j); // 0, 1, 2
}

for (let j=0; j<5; j++) {
    if (j==3) {
        continue;
    }
    console.log(j); // 0, 1, 2, 4
}

// nested loop
for (let i=0; i<5; i++) {
    for (let j=0; j<5; j++) {
        console.log(i, j); // 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9
    }
}
for (let i=0; i<=5; i++) {
    for (let j=0; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
