import { readFile, writeFile } from 'fs/promises'
import { connectToDB } from '@/utils/database'
export const POST = async (req) => {
    const filePath = './lib/database/listings.json'
    try {
        await connectToDB() // Ensure the database connection is established

        console.log('backend')
        const { location, deal, duration, size, utilities, watching, favourite, price, id } = await req.json()

        const data = await readFile(filePath, 'utf8')
        const listings = JSON.parse(data)
        const index = listings.properties.findIndex(jones => jones.id == id)

        if (index >= 0) {
            listings.properties[index] = {
                id: id,
                price: price,
                location: location,
                deal: deal,
                duration: duration,
                size: size,
                utilities: utilities,
                watching: watching,
                favourite: favourite
            }

            const update = await writeFile(filePath, JSON.stringify(listings, null, 2))
            console.log(update, listings)

            if (update == undefined) {
                return new Response(JSON.stringify({ message: "Item updated successfully" }), { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Error while updating, check server listings" }), { status: 502 })
            }
        }

        else {
            return new Response(JSON.stringify({ meeage: "This item does'nt exist" }), { status: 404 })
        }


    } catch (error) {
        console.log('Database Update', error)
        return new Response(JSON.stringify(error), { status: 500 })
    }
}