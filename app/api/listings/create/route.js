import { readFile, writeFile } from 'fs/promises'


export const POST = async (req) => {
    const filePath = './lib/database/listings.json'
    const formData = await req.json()

    try {
        const properties = await readFile(filePath, 'utf8')


        if (properties) {
            const data = JSON.parse(properties)
            data.properties.push(formData)
            const create = await writeFile(filePath, JSON.stringify(data, null, 2))
            console.log(create, data)
            if (create == undefined) {
                return new Response(JSON.stringify({ message: "Item created successfully" }), { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Error while creating, check server listings" }), { status: 502 })
            }
        }
        else {
            const data = {
                properties: [
                    formData
                ]
            }
            const create = await writeFile(filePath, JSON.stringify(data, null, 2))
            if (create == undefined) {
                return new Response(JSON.stringify({ message: "Item created successfully" }), { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Error while creating, check server listings" }), { status: 502 })
            }
        }
    } catch (error) {
        console.log("Create New Listing", error)
        return new Response(JSON.stringify(error), { status:500 })
    }

}
