import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
    const slug = await req.body

    try {
        await connectToDB()

        const user = await User.findOne({Username: slug})

        if (user) {
            return new Response(JSON.stringify(user), { status: 200 })
        } else {
            return new Response(JSON.stringify({ message: "User not found" }), { status: 404 })
        }
    } catch (error) {
        console.log("Get User Error")
    }
}