const fs = require("fs-extra")
const stream = require("stream");
const path = require ("path")

async function script () {
    console.log("script map.component");
    try {

        fs.readdir(path.join(path.dirname(__dirname), "/scripts/map.inputs"), function (error, files) {
            if (error) {
                console.log('script.readdir error: ' + error)
                return 
            } 
            files.forEach(async fileName => { 
                //console.log("script mapping file " + fileName)
                let fileLoc = path.join(path.dirname(__dirname), "/scripts/map.inputs/", fileName)
                let fileStream = fs.createReadStream(fileLoc);
                let fileData = "";
                fileStream.on("data", chunk => {        
                    fileData += chunk;        
                });        
                fileStream.on("end", async () => {  
                    let mapping = map(fileData, fileName.split(".")[0])
                    // Object file
                    let objectFileName = fileName.split(".")[0] + ".object.js"
                    let objectFileLoc = path.join(path.dirname(__dirname), "/scripts/map.outputs/", objectFileName)
                    await fs.ensureFile(objectFileLoc)
                        .catch(err=>console.log)
                    let objectStream = fs.createWriteStream(objectFileLoc,{encoding:'binary',flags : 'w'})
                    let objectBuffer = Buffer.from(mapping.object)
                    objectStream.write(
                        objectBuffer, 'binary',
                        //e=>console.log('script mapped object ' + fileName.split(".")[0] + ' in ' + objectFileName + '\n')
                    )
                    // Steps file
                    let stepsFileName = fileName.split(".")[0] + ".steps.js"
                    let stepsFileLoc = path.join(path.dirname(__dirname), "/scripts/map.outputs/", stepsFileName)
                    await fs.ensureFile(stepsFileLoc)
                        .catch(err=>console.log)
                    let stepsStream = fs.createWriteStream(stepsFileLoc,{encoding:'binary',flags : 'w'})
                    let stepsBuffer = Buffer.from(mapping.steps)
                    stepsStream.write(
                        stepsBuffer, 'binary',
                        //e=>console.log('script mapped steps ' + fileName.split(".")[0] + ' in ' + stepsFileName + '\n')
                    ) 
                });
            });
        });
    } catch (error) {
        console.error(error);
        console.log("script.catch error : ", error);
    }
}

script ()

function map( data, name) {

    // Identifying data testids
    let dataidpos = []
    let idx = data.indexOf("data-testid=")
    while (idx !== -1) {
        dataidpos.push(idx);
        idx = data.indexOf("data-testid=", idx + 1);
    }
    //console.log("dataidpos",dataidpos)

    let functionList = []

    let obj = "const { expect } = require(\"@playwright/test\")" +
    "\nconst { setDefaultTimeout } = require(\"@cucumber/cucumber\")" +
    "\nconst { paths } = require(\"../paths.js\")\n" +
    "\nsetDefaultTimeout(3 * 1000)\n" +
    "\n// Automated generation of functions from data-testid" +
    "\n" + "class " + name + " {\n"
    let objinst = name.charAt(0).toLowerCase() + name.slice(1)
    let stp = "const { Given, When, Then } = require(\"@cucumber/cucumber\")" +
        "\nconst env = require(\"../../.env.json\")" +
        "\nconst { " + name + " } = require(\"./" + name + ".object.js\")" +
        "\nconst { scenari } = require(\"../scenari.js\")" +
        "\nconst { random_id } = require(\"../../utils/toolkit.js\")\n" +
        "\nconst " + objinst + " = new " + name + "()" +
        "\nObject.keys(env).forEach(k => {" +
        "\n\t" + objinst + "[k] = env[k]" +
        "\n})\n" +
        "\n// Automated generation of functions from data-testid\n" 

    // Identify all functions
    dataidpos.forEach(idpos => {
        let idend = data.indexOf("\"", idpos + 14 )
        let testelement = data.substring(idpos + 12, idend)
        let parametric = false
        if (testelement.includes("{")) {
            testelement = data.substring(idpos + 14, idend)
            parametric = true
        } else {
            testelement = data.substring(idpos + 13, idend)
        }
        console.log("testelement",testelement)
        let elementkeys = testelement.split('-')

        // root management
        switch (elementkeys[0]) {
            case "page":
                if (elementkeys.length === 2) {
                    obj += pageObject({
                        type: "page",
                        id: testelement
                    })
                    stp += pageSteps(objinst, {
                        type: "page",
                        id: testelement
                    })
                }
                break
            case "modal":
                if (elementkeys.length === 2) {
                    obj += modalObject({
                        type: "modal",
                        id: testelement
                    })
                    stp += modalSteps(objinst, {
                        type: "modal",
                        id: testelement
                    })
                }
                break
            case "component":
                if (elementkeys.length === 2) {
                    obj += componentObject({
                        type: "component",
                        id: testelement
                    })
                    stp += componentSteps(objinst, {
                        type: "component",
                        id: testelement
                    })
                }
                break
            default:
        }
        // sub-component management
        if (testelement.includes("button")) {
            //console.log("ADD button ", testelement)
            functionList.push({
                type: "button",
                id: testelement,
                parametric : parametric
            })
        }
        if (testelement.includes("input")) {
            functionList.push({
                type: "input",
                id: testelement,
                parametric : parametric
            })
        }
        if (testelement.includes("list") && elementkeys.length === 2) {
            functionList.push({
                type: "list",
                id: testelement,
                parametric : parametric
            })
        }
        if (testelement.includes("box") && elementkeys.length === 4) {
            //console.log("ADDING BOX")
            functionList.push({
                type: "box",
                id: testelement,
                parametric : parametric
            })
        }
        if (testelement.includes("text")) {
            functionList.push({
                type: "text",
                id: testelement,
                parametric : parametric
            })
        }
    }); 

    //console.log(name+".functionList",functionList)

    // Map all functions
    // Boxes
    let boxFunctions = functionList.filter(func => {
        return func.type === "box"
    })
    if (boxFunctions.length > 0) {
        boxFunctions.forEach(func => {
            obj += boxObject(func)
            stp += boxSteps(objinst, func)
        })
    }
    // Lists
    let listFunctions = functionList.filter(func => {
        return func.type === "list"
    })
    if (listFunctions.length > 0) {
        listFunctions.forEach(func => {
            obj += listObject(func)
            stp += listSteps(objinst, func)
        })
    }
    // Inputs
    let inputFunctions = functionList.filter(func => {
        return func.type === "input"
    })
    if (inputFunctions.length > 0) {
        obj += inputsObject(inputFunctions)
        stp += inputsSteps(objinst, inputFunctions)
    }
    // Buttons
    let buttonFunctions = functionList.filter(func => {
        return func.type === "button"
    })
    if (buttonFunctions.length > 0) {
        obj += "\n\t// Buttons\n"
        stp += "\n// Buttons"
        buttonFunctions.forEach(func => {
            obj += buttonObject(func)
            stp += buttonSteps(objinst, func)
        })
        stp += "\n"
    }
    // Texts
    let textFunctions = functionList.filter(func => {
        return func.type === "text"
    })
    if (textFunctions.length > 0) {
        obj += "\n\t// Texts\n"
        stp += "\n// Texts"
        textFunctions.forEach(func => {
            obj += textObject(func)
            stp += textSteps(objinst, func)
        })
        stp += "\n"
    }

    // Close
    obj += "}\n"
    obj += "\n\nmodule.exports = { " + name + " }"

    return {
        object: obj,
        steps: stp
    }
}

function pageObject( func ) {
    let tag = func.id.split('page-')[1]
    return "\n\t// Page\n" + 
        "\tasync navigateToPage() {\n" + 
        "\t\tawait global.page.goto(this.appUrl+paths[\""+tag+"\"])\n" + 
        "\t}\n" + 
        "\tasync assertPageIsVisible() {\n" + 
        "\t\tconst element = await global.page.getByTestId(\""+func.id+"\")\n" + 
        "\t\tawait expect(element).toBeVisible()\n" + 
        "\t}\n" + 
        "\tasync assertPageIsHidden() {\n" + 
        "\t\tconst element = await global.page.getByTestId(\""+func.id+"\")\n" + 
        "\t\tawait expect(element).toBeHidden()\n" + 
        "\t}\n"
}
function pageSteps( objinst, func ) {
    let tag = func.id.split('page-')[1]
    return "\n// Page" + 
        "\nGiven(\"I open " + tag + " page\", async () => {" +
        "\n\tawait " + objinst + ".navigateToPage()" +
        "\n\tawait " + objinst + ".assertPageIsVisible()" +
        "\n})" +
        "\nThen(\"" + tag + " page should be visible\", async () => {" +
        "\n\tawait " + objinst + ".assertPageIsVisible()" +
        "\n})" +
        "\nThen(\"" + tag + " page should be hidden\", async () => {" +
        "\n\tawait " + objinst + ".assertPageIsHidden()" +
        "\n})\n"
}
function modalObject( func ) {
    return "\n\t// Modal visibility\n" + 
        "\tasync assertModalIsVisible() {\n" + 
        "\t\tconst element = await global.page.getByTestId(\"" + func.id + "\")\n" + 
        "\t\tawait expect(element).toBeVisible()\n" + 
        "\t}\n" + 
        "\tasync assertModalIsHidden() {\n" + 
        "\t\tconst element = await global.page.getByTestId(\"" + func.id + "\")\n" + 
        "\t\tawait expect(element).toBeHidden()\n" + 
        "\t}\n"
}
function modalSteps( objinst, func ) {
    let tag = func.id.split('modal-')[1]
    return "\n// Modal visibility" + 
        "\nThen(\"" + tag + " modal should be visible\", async () => {" +
        "\n\tawait " + objinst + ".assertModalIsVisible()" +
        "\n})" +
        "\nThen(\"" + tag + " modal should be hidden\", async () => {" +
        "\n\tawait " + objinst + ".assertModalIsHidden()" +
        "\n})\n"
}
function componentObject( func ) {
    let tag = func.id.split('component-')[1]
    let captialTag = CaptialTag(tag)
    return "\n\t// Component " + tag + "\n" + 
        "\tasync assert" + captialTag + "IsVisible() {\n" + 
        "\t\tconst element = await global.page.getByTestId(\""+func.id+"\")\n" + 
        "\t\tawait expect(element).toBeVisible()\n" + 
        "\t}\n" + 
        "\tasync assert" + captialTag + "IsHidden() {\n" + 
        "\t\tconst element = await global.page.getByTestId(\""+func.id+"\")\n" + 
        "\t\tawait expect(element).toBeHidden()\n" + 
        "\t}\n"
}
function componentSteps( objinst, func ) {
    let tag = func.id.split('component-')[1]
    let captialTag = CaptialTag(tag)
    return "\n// Component" + tag + "" + 
        "\nThen(\"" + tag + " should be visible\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsVisible()" +
        "\n})" +
        "\nThen(\"" + tag + " should be hidden\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsHidden()" +
        "\n})\n"
}
function buttonObject( func ) {
    let tag = func.id.split('button-')[1]
    let captialTag = CaptialTag(tag)
    if(func.parametric) {
        return "\tasync click" + captialTag + "(parameter, by) {\n" + 
        "\t\tawait global.page.locator('[data-testid=\"" + func.id + "\"]['+by+'=\"'+parameter+'\"]').click()\n" + 
        "\t}\n"
    } else {
        return "\tasync click" + captialTag + "() {\n" + 
        "\t\tawait global.page.getByTestId(\"" + func.id + "\").click()\n" + 
        "\t}\n"
    }
}
function buttonSteps( objinst, func ) {
    let tag = func.id.split('button-')[1]
    let captialTag = CaptialTag(tag)
    let keys = func.id.split('-')
    let parameter = {
        when: "",
        param: ""
    }
    if(func.parametric !== undefined) {
        if(func.parametric) {
            parameter = {
                when: " {string} by {string}",
                param: "parameter, by"
            }
        }
    }
    let complement = undefined
    switch (keys[0]) {
        case "modal":
            complement = " of " + keys[1] + " modal"
            break
        case "page":
            complement = " of " + keys[1] + " page"
            break
        default:
            complement = " of " + keys[1]
    }
    return "\nWhen(\"I click " + tag + parameter.when + " button" + complement + "\", async ("+ parameter.param + ") => {\n" + 
        "\tawait " + objinst + ".click" + captialTag + "("+ parameter.param + ")\n" + 
        "})"
}   
function inputsObject( funcs ) {

    // Input fill
    let obj = "\n\t// Inputs\n" +
        "\tasync fillIn(inputs) {\n"
    funcs.forEach(func => {
        if (func.id.includes("input-")) {
            let tag = func.id.split('input-')[1]
            let captialTag = CaptialTag(tag)
            obj += "\t\tif (inputs." + captialTag + " !== undefined) {\n" +
            "\t\t\tawait global.page\n" +
            "\t\t\t\t.locator(\"data-testid=" + func.id + " >> input\")\n" +
            "\t\t\t\t.fill(inputs." + captialTag + ")\n" +
            "\t\t}\n"
        }
        if (func.id.includes("inputbox-")) {
            let tag = func.id.split('inputbox-')[1]
            let captialTag = CaptialTag(tag)
            obj += "\t\tif (inputs." + captialTag + " !== undefined) {\n" +
            "\t\t\tif (inputs." + captialTag + ") {\n" +
            "\t\t\t\tawait global.page.locator(\"data-testid=" + func.id + " >> input\").check()\n" +
            "\t\t\t} else {\n" +
            "\t\t\t\tawait global.page.locator(\"data-testid=" + func.id + " >> input\").uncheck()\n" +
            "\t\t\t}\n" +
            "\t\t}\n"            
        } 
    })
    obj += "\t}"
    
    // Input error
    funcs.forEach(func => {
        if (func.id.includes("input-")) {
            let tag = func.id.split('input-')[1]
            let captialTag = CaptialTag(tag)
            obj += "\n\tasync assertInput" + captialTag + "IsError() {" +
                "\n\t\tconst element = await global.page.locator(" +
                "\n\t\t\t\"data-testid=" + func.id + " >> input\"," +
                "\n\t\t)" +
                "\n\t\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"true\");" +
                "\n\t}"
                obj += "\n\tasync assertInput" + captialTag + "IsNotError() {" +
                "\n\t\tconst element = await global.page.locator(" +
                "\n\t\t\t\"data-testid=" + func.id + " >> input\"," +
                "\n\t\t)" +
                "\n\t\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"false\");" +
                "\n\t}"
        }
        if (func.id.includes("inputbox-")) {
            let tag = func.id.split('inputbox-')[1]
            let captialTag = CaptialTag(tag)
            obj += "\n\tasync assertInput" + captialTag + "IsError() {" +
                "\n\t\tconst element = await global.page.locator(" +
                "\n\t\t\t\"data-testid=" + func.id + " >> input\"," +
                "\n\t\t)" +
                "\n\t\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"true\");" +
                "\n\t}"
                obj += "\n\tasync assertInput" + captialTag + "IsNotError() {" +
                "\n\t\tconst element = await global.page.locator(" +
                "\n\t\t\t\"data-testid=" + func.id + " >> input\"," +
                "\n\t\t)" +
                "\n\t\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"false\");" +
                "\n\t}"
        }
    })
    obj += "\n"
    return obj
}
function inputsSteps( objinst, funcs ) {
    // Complement
    let keys = funcs[0].id.split('-')
    let complement = undefined
    switch (keys[0]) {
        case "modal":
            complement = keys[1] + " modal"
            break
        case "page":
            complement = keys[1] + " page"
            break
        case "component":
            complement = keys[1]
            break
        default:
            complement =" ..."
    }
    // Input fill
    let steps = "\n// Inputs\n" + "When(\"I fill " + complement + " with {string}\", async function (scenario) {" + 
        "\n\tawait " + objinst + ".fillIn(scenari[\"" + keys[1] + "\"][scenario]())" +
        "\n})"
    // Input error
    funcs.forEach(func => {
        if (func.id.includes("input-")) {
            let tag = func.id.split('input-')[1]
            let captialTag = CaptialTag(tag)
            steps += "" + 
                "\nThen(\"" + tag + " should be in error in " + complement + "\", async () => {" +
                "\n\tawait " + objinst + ".assertInput" + captialTag + "IsError()" +
                "\n})" +
                "\nThen(\"" + tag + " should not be in error in " + complement + "\", async () => {" +
                "\n\tawait " + objinst + ".assertInput" + captialTag + "IsNotError()" +
                "\n})"
        }
        if (func.id.includes("inputbox-")) {
            let tag = func.id.split('inputbox-')[1]
            let captialTag = CaptialTag(tag)
            steps += "" + 
                "\nThen(\"" + tag + " should be in error in " + complement + "\", async () => {" +
                "\n\tawait " + objinst + ".assertInput" + captialTag + "IsError()" +
                "\n})" +
                "\nThen(\"" + tag + " should not be in error in " + complement + "\", async () => {" +
                "\n\tawait " + objinst + ".assertInput" + captialTag + "IsNotError()" +
                "\n})"
        }
    })
    steps += "\n"
    return steps
}
function boxObject( func ) {
    let tag = func.id.split('box-')[1]
    let captialTag = CaptialTag(tag)
    return "\n\t// Box " + tag + " visibility\n" + 
        "\tasync assert" + captialTag + "IsVisible() {\n" + 
        "\t\tconst element = await global.page.locator(\"data-testid=" + func.id + "\")\n" + 
        "\t\tawait expect(element).toBeVisible()\n" + 
        "\t}\n" + 
        "\tasync assert" + captialTag + "IsHidden() {\n" + 
        "\t\tconst element = await global.page.locator(\"data-testid=" + func.id + "\")\n" + 
        "\t\tawait expect(element).toBeHidden()\n" + 
        "\t}\n"
}
function boxSteps( objinst, func ) {
    let tag = func.id.split('box-')[1]
    let captialTag = CaptialTag(tag)
    return "\n// Box " + tag + " visibility" + 
        "\nThen(\"" + tag + " should be visible\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsVisible()" +
        "\n})" +
        "\nThen(\"" + tag + " should be hidden\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsHidden()" +
        "\n})\n"
}
function textObject( func ) {
    let tag = func.id.split('text-')[1]
    let captialTag = CaptialTag(tag)
    return "\tasync assertText" + captialTag + "Is(value) {" + 
        "\n\t\tconst element = await global.page.locator(\"data-testid=" + func.id + "\")" + 
        "\n\t\tawait expect(element).toBe(value)" + 
        "\n\t}"
}
function textSteps( objinst, func ) {   
    let tag = func.id.split('text-')[1]
    let captialTag = CaptialTag(tag)
    let keys = func.id.split('-')
    let complement = undefined
    switch (keys[0]) {
        case "modal":
            complement = " of " + keys[1] + " modal"
            break
        case "page":
            complement = " of " + keys[1] + " page"
            break
        default:
            complement = " of " + keys[1]
    } 
    return "\nThen(\"" + tag + complement + " should be {string}\", async () => {" +
        "\n\tawait " + objinst + ".assertText" + captialTag + "Is(value)" +
        "\n})"
}
function listObject( func ) {
    let tag = func.id.split('list-')[1]
    let captialTag = CaptialTag(tag)
    let keys = func.id.split('-')
    
    return "\n\t// List " + tag + "\n" +
        "\tasync click" + captialTag + "Item(parameter,by) {\n" + 
        "\t\tswitch (by) {\n" + 
        "\t\t\tcase \"id\":\n" + 
        "\t\t\t\tawait global.page.getByTestId(\"" + func.id + "-listitem\").getAttribute(\"id\", parameter).click()\n" + 
        "\t\t\t\tbreak\n" + 
        "\t\t\tcase \"text\":\n" + 
        "\t\t\t\tawait global.page.getByTestId(\"" + func.id + "-listitem\").getByText(parameter).click()\n" + 
        "\t\t\t\tbreak\n" + 
        "\t\t}\n" +
        "\t}\n" +
        "\tasync assert" + captialTag + "IsEmpty() {\n" + 
        "\t\tconst itemCount = await global.page.getByTestId(\"" + func.id + "-listitem\").count()\n" + 
        "\t\tawait expect(itemCount).toBe(0)\n" + 
        "\t}\n" + 
        "\tasync assert" + captialTag + "IsNotEmpty() {\n" + 
        "\t\tconst itemCount = await global.page.getByTestId(\"" + func.id + "-listitem\").count()\n" + 
        "\t\tawait expect(itemCount).toBeGreaterThan(0)\n" + 
        "\t}\n" + 
        "\tasync assert" + captialTag + "ContainsItem(parameter,by) {\n" + 
        "\t\tlet itemCount = -1\n" + 
        "\t\tswitch (by) {\n" + 
        "\t\t\tcase \"id\":\n" + 
        "\t\t\t\titemCount = await global.page.getByTestId(\"" + func.id + "\").getAttribute(\"id\", parameter).count()\n" + 
        "\t\t\t\tbreak\n" + 
        "\t\t\tcase \"text\":\n" + 
        "\t\t\t\titemCount = await global.page.getByTestId(\"" + func.id + "\").getByText(parameter).count()\n" + 
        "\t\t\t\tbreak\n" + 
        "\t\t}\n" +
        "\t\tawait expect(itemCount).toBe(1)\n" + 
        "\t}\n" 
}
function listSteps( objinst, func ) {
    let tag = func.id.split('list-')[1]
    let captialTag = CaptialTag(tag)
    return "\n// List " + tag + 
        "\nWhen(\"I click {string} from " + tag + "\", async (item) => {\n" + 
        "\tawait " + objinst + ".click" + captialTag + "Item(item, \"text\")\n" + 
        "})" + 
        "\nWhen(\"I click {string} by {string} from " + tag + "\", async (item, by) => {\n" + 
        "\tawait " + objinst + ".click" + captialTag + "Item(item, by)\n" + 
        "})" + 
        "\nThen(\"" + tag + " should be empty\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsEmpty()" +
        "\n})" + 
        "\nThen(\"" + tag + " should not be empty\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsNotEmpty()" +
        "\n})" + 
        "\nThen(\"" + tag + " should contain {string} by {string}\", async (item, by) => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "ContainsItem(item, by)" +
        "\n})" +
        "\n"
}


function CaptialTag (tag) {
    return (tag.charAt(0).toUpperCase() + tag.slice(1)).replaceAll(' ', '')
}