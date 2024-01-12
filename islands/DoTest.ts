
function testRegex(regex: string, text: string): boolean {
    const re = new RegExp(regex);
    return re.test(text);
}
function checkText(text1: string, text2: string): boolean {
    return text1 === text2;
}
/*
{
    "output": {
        "regex": ".*",
        "output": "Hi"
    },
    "code": {
        "regex": ".*",
        "code": ["console.log('Hi');"]
    }
}
*/
function doTest(testCase: any, code: string, output: string): boolean {
    const { code: codeTest, output: outputTest } = testCase;
    if (codeTest)
    {
        const codeRegex = codeTest.regex;
        const codesCheck = codeTest.code;
        if (!testRegex(codeRegex, code)) {
            return false;
        }
    
        let isCodeCorrect = false;
        for (const codeCheck of codesCheck) {
            if (checkText(codeCheck, code)) {
                isCodeCorrect = true;
                break;
            }
        }
    
        if (!isCodeCorrect) {
            return false;
        }
    }
    if (outputTest) {
        const outputRegex = outputTest.regex;
        const outputCheck = outputTest.output;
    
        if (!testRegex(outputRegex, output)) {
            return false;
        }
        if (!checkText(outputCheck, output)) {
            return false;
        }
    }
    if (!codeTest && !outputTest) {
        return true;
    }
    return true;
}

export function doTests(testCases: any[], code: string, output: string): boolean {
    for (const testCase of testCases) {
        if (!doTest(testCase, code, output)) {
            // console.log(testCase);   
            return false;
        }
    }
    return true;
}