const fs = require("fs")
const superagent = require("superagent")

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("I could't find that file")
            resolve(data)
        })
    })
}

const writeFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject("Could not write file")
            resolve("Success!")
        })
    })
}

const getDogPic = async () => {
    try {

        const data = await readFilePro(`${__dirname}/dog.txt`)
        console.log(`Bread: ${data}`)

        const res1Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        const res2Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        const res3Pro = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

        const all = await Promise.all([res1Pro, res2Pro, res3Pro])
        const img = all.map(el => el.body.message)
        console.log(img)

        await writeFile("dog-img.txt", img.join("\n"))
        console.log("Random dog image saved to file")

    } catch (error) {
        console.log(error.message)
    }
}

(async () => {
    try {
        console.log("1: Will get dog pic!")
        const x = await getDogPic()
        console.log(x)
        console.log("3: Done getting dog pics!")
    } catch (error) {
        console.log("Error Happened!!!!!!!")
    }
})()



// getDogPic()

// readFilePro(`${__dirname}/dog.txt`).then(data => {
//     console.log(`Bread: ${data}`)
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

// }).then(res => {
//     console.log(res.body.message)
//     return writeFile("dog-img.txt", res.body.message)
// }).then(() => {
//     console.log("Random dog image saved to file")
// }).catch(err => {
//     console.log(err.message)
// })