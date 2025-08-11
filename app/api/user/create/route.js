import { readFile, writeFile } from 'fs/promises'

export const POST = async (req) => {
    const filePath = './lib/database/user.json'
    const userData = await req.json()
    console.log("backend ",req)

    try {
        const details = await readFile(filePath, 'utf8')

        if (details) {
            const info = JSON.parse(details)
            info.details.push(userData)
            const create = await writeFile(filePath, JSON.stringify(info, null, 2))
            console.log(create, info)

            if (create == undefined) {
                return new Response(JSON.stringify({ message: "Account created successfully" }), { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Error while creating account, check details" }), { status: 502 })
            }
        }
        else {
            const info = {
                details: [
                    userData
                ]
            }
            const create = await writeFile(filePath, JSON.stringify(info, null, 2))
            if (create == undefined) {
                return new Response(JSON.stringify({ message: "Account created successfully" }), { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Error while creating account, check details" }), { status: 502 })
            }
        }
    } catch (error) {
        console.log("Create Account", error)
        return new Response(JSON.stringify(error), { status:500 })
    }
}