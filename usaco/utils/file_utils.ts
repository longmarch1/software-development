import * as fs from "fs";

export function readFile(name: string): string[] {
    const data = fs.readFileSync(name, "utf8").toString().split("\n");
    data.pop(); // remove eof
    return data;
}

// const data = readFile("test_data_soulmate/1.in");
// data.forEach((value) => {
//     console.log(value);
// });
