const fs = require("fs-extra")
const stream = require("stream");
const path = require ("path")

async function script () {
    console.log("script map.component");
    try {

        fs.readdir(path.join(path.dirname(__dirname), "/scripts/map.inputs"), function (error, files) {
            if (error) {
                return console.log('script.readdir error: ' + error)
            } 
            files.forEach(async fileName => { 
                console.log("script mapping file " + fileName)
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
                        e=>console.log('script mapped object ' + fileName.split(".")[0] + ' in ' + objectFileName + '\n')
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
                        e=>console.log('script mapped steps ' + fileName.split(".")[0] + ' in ' + stepsFileName + '\n')
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

    let functionList = []

    let obj = "const { expect } = require(\"@playwright/test\")" +
    "\nconst { setDefaultTimeout } = require(\"@cucumber/cucumber\")\n" +
    "\nsetDefaultTimeout(60 * 1000)\n" +
    "\n// Automated generation of functions from data-testid" +
    "\n" + "class " + name + " {\n"
    let objinst = name.charAt(0).toLowerCase() + name.slice(1)
    let stp = "const { Given, When, Then } = require(\"@cucumber/cucumber\")" +
        "\nconst env = require(\"../../.env.json\")" +
        "\nconst { " + name + " } = require(\"./" + name + ".object.js\")" +
        "\nconst { random_id } = require(\"../../utils/toolkit.js\")\n" +
        "\nconst " + objinst + " = new " + name + "()" +
        "\nObject.keys(env).forEach(k => {" +
        "\n\t" + objinst + "[k] = env[k]" +
        "\n})\n" +
        "\n// Automated generation of functions from data-testid\n" 

    // Identify all functions
    dataidpos.forEach(idpos => {
        let idend = data.indexOf("\"", idpos + 13 )
        let testelement = data.substring(idpos + 13, idend)
        let elementkeys = testelement.split('-')

        // root management
        switch (elementkeys[0]) {
            case "page":
                break
            case "modal":
                if (elementkeys.length === 2) {
                    obj += modalObject(elementkeys[1])
                    stp += modalSteps(objinst, elementkeys[1])
                }
                break
            case "component":
                break
            default:
        }
        // sub-component management
        switch (elementkeys[2]) {
            case "button":
                //obj += buttonObject(testelement,elementkeys[3])
                functionList.push({
                    type: "button",
                    tag: elementkeys[3],
                    id: testelement
                })              
                break
            case "input":
                functionList.push({
                    type: "input",
                    tag: elementkeys[3],
                    id: testelement
                })                
                break
            case "box":
                //obj += boxObject(testelement,elementkeys[3])
                functionList.push({
                    type: "box",
                    tag: elementkeys[3],
                    id: testelement
                })           
                break
            default:
        }
    }); 

    // Map all functions
    // Boxes
    functionList.filter(func => {
        return func.type === "box"
    }).forEach(func => {
        obj += boxObject(func)
        stp += boxSteps(objinst, func)
    })
    // Inputs
    let inputFunctions = functionList.filter(func => {
        return func.type === "input"
    })
    obj += inputsObject(inputFunctions)
    stp += inputsSteps(objinst, inputFunctions)
    // Buttons
    obj += "\n\t// Buttons\n"
    stp += "\n// Buttons"
    functionList.filter(func => {
        return func.type === "button"
    }).forEach(func => {
        obj += buttonObject(func)
        stp += buttonSteps(objinst, func)
    })

    // Close
    obj += "}\n"

    return {
        object: obj,
        steps: stp
    }
}

function modalObject( tag ) {
    return "\n\t// Modal visibility\n" + 
        "\tasync assertModalIsVisible() {\n" + 
        "\t\tconst element = await global.page.locator(\"data-testid=modal-"+tag+"\")\n" + 
        "\t\tawait expect(element).toBeVisible()\n" + 
        "\t}\n" + 
        "\tasync assertModalIsHidden() {\n" + 
        "\t\tconst element = await global.page.locator(\"data-testid=modal-"+tag+"\")\n" + 
        "\t\tawait expect(element).toBeHidden()\n" + 
        "\t}\n"
}
function modalSteps( objinst, tag ) {
    return "\n// Modal visibility" + 
        "\nThen(\"" + tag + " modal should be visible\", async () => {" +
        "\n\tawait " + objinst + ".assertModalIsVisible()" +
        "\n})" +
        "\nThen(\"" + tag + " modal should be hidden\", async () => {" +
        "\n\tawait " + objinst + ".assertModalIsHidden()" +
        "\n})\n"
}
function buttonObject( button ) {
    let captialTag = button.tag.charAt(0).toUpperCase() + button.tag.slice(1);
    return "\tasync click" + captialTag + "() {\n" + 
        "\t\tawait global.page.click(\"data-testid=" + button.id + "\")\n" + 
        "\t}\n"
}
function buttonSteps( objinst, button ) {
    let captialTag = button.tag.charAt(0).toUpperCase() + button.tag.slice(1);
    let keys = button.id.split('-')
    let complement = undefined
    switch (keys[0]) {
        case "modal":
            complement = " of the " + keys[1] + " modal"
            break
        case "page":
            complement = " of the " + keys[1] + " page"
            break
        default:
            complement =""
    }
    return "\nWhen(\"I click " + button.tag + " button" + complement + "\", async () => {\n" + 
        "\tawait " + objinst + ".click" + captialTag + "()\n" + 
        "})"
}   
function inputsObject( inputs ) {

    // Input fill
    let obj = "\n\t// Inputs\n" +
        "\tasync fillIn(inputs) {\n"
    inputs.forEach(input => {
        obj += "\t\tif (inputs." + input.tag + " !== undefined) {\n" +
        "\t\t\tawait global.page\n" +
        "\t\t\t\t.locator(\"data-testid=" + input.id + " >> input\")\n" +
        "\t\t\t\t.fill(inputs." + input.tag + ")\n" +
        "\t\t}\n"
    })
    obj += "\t}"
    
    // Input error
    inputs.forEach(input => {
        let captialTag = input.tag.charAt(0).toUpperCase() + input.tag.slice(1);
        obj += "\n\tasync assertInput" + captialTag + "IsError() {" +
            "\n\t\tconst element = await global.page.locator(" +
            "\n\t\t\t\"data-testid=" + input.id + " >> input\"," +
            "\n\t\t)" +
            "\n\t\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"true\");" +
            "\n\t}"
            obj += "\n\tasync assertInput" + captialTag + "IsNotError() {" +
            "\n\t\tconst element = await global.page.locator(" +
            "\n\t\t\t\"data-testid=" + input.id + " >> input\"," +
            "\n\t\t)" +
            "\n\t\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"false\");" +
            "\n\t}"
    })
    obj += "\n"
    return obj
}
function inputsSteps( objinst, inputs ) {
    // Complement
    let keys = inputs[0].id.split('-')
    let complement = undefined
    switch (keys[0]) {
        case "modal":
            complement = " the " + keys[1] + " modal"
            break
        case "page":
            complement = " the " + keys[1] + " page"
            break
        default:
            complement =" ..."
    }
    // Input fill
    let steps = "\n// Inputs\n" + "\When(\"I fill in" + complement + " with ...\", async function () {" + 
    "\n\tawait " + objinst + ".fillIn({"
    inputs.forEach(input => {
        steps += "\n\t\t" + input.tag + ": " + input.tag.toUpperCase() + "TOCHANGE,"
    })
    steps += "\n\t})" + "\n})"
    // Input error
    inputs.forEach(input => {
        let captialTag = input.tag.charAt(0).toUpperCase() + input.tag.slice(1);
        steps += "" + 
            "\nThen(\"" + captialTag + " input should be in error in" + complement + "\", async () => {" +
            "\n\tconst element = await global.page.locator(" +
            "\n\t\t\"data-testid=" + input.id + " >> input\"," +
            "\n\t)" +
            "\n\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"true\");" +
            "\n})" +
            "\nThen(\"" + captialTag + " input should not be in error in" + complement + "\", async () => {" +
            "\n\tconst element = await global.page.locator(" +
            "\n\t\t\"data-testid=" + input.id + " >> input\"," +
            "\n\t)" +
            "\n\tawait expect(element).toHaveAttribute(\"aria-invalid\", \"false\");" +
            "\n})"
    })
    steps += "\n"
    return steps
}
function boxObject( box ) {
    let captialTag = box.tag.charAt(0).toUpperCase() + box.tag.slice(1);
    return "\n\t// Box " + captialTag + " visibility\n" + 
        "\tasync assert" + captialTag + "IsVisible() {\n" + 
        "\t\tconst element = await global.page.locator(\"data-testid=" + box.id + "\")\n" + 
        "\t\tawait expect(element).toBeVisible()\n" + 
        "\t}\n" + 
        "\tasync assert" + captialTag + "IsClosed() {\n" + 
        "\t\tconst element = await global.page.locator(\"data-testid=" + box.id + "\")\n" + 
        "\t\tawait expect(element).toBeHidden()\n" + 
        "\t}\n"
}
function boxSteps( objinst, box ) {
    let captialTag = box.tag.charAt(0).toUpperCase() + box.tag.slice(1);
    return "\n// Box " + captialTag + " visibility" + 
        "\nThen(\"" + box.tag + " should be visible\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsVisible()" +
        "\n})" +
        "\nThen(\"" + box.tag + " should be hidden\", async () => {" +
        "\n\tawait " + objinst + ".assert" + captialTag + "IsHidden()" +
        "\n})\n"
}
