let i = 0

while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++
}

do {
    console.log(i); // 0, 1, 2, 3, 4
    i++
} while (i < 5)

arr=[1,2,3,4,5]
i=0
while (i < arr.length) {
    console.log(arr[i]); // 1, 2, 3, 4, 5
    i++
}

i=arr.length-1
do {
    console.log(arr[i]); // 5, 4, 3, 2, 1
    i--
} while (i >= 0)

// break and continue
i=0
while (i < 5) {
    if (i==3) {
        break;
    }
    console.log(i); // 0, 1, 2
    i++
}

i=0
while (i < 5) {
    if (i==3) {
        i++
        continue;
    }
    console.log(i); // 0, 1, 2, 4
    i++
}

// nested loop
i=0
while (i < 5) {
    j=0
    while (j < 5) {
        process.stdout.write(`* `) // 0,0, 0,1, 0,2, 0,3, 0,4, 1,0, 1,1, 1,2, 1,3, 1,4, 2,0, 2,1, 2,2, 2,3, 2,4, 3,0, 3,1, 3,2, 3,3, 3,4, 4,0, 4,1, 4,2, 4,3, 4,4
        j++
    }
    console.log()
    i++
}