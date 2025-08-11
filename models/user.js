import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: [true, 'Email is already taken'],
            required: [true, 'Sorry email is required'],
            trim: true,
            lowercase: true,
            index: true,
        },

        username: {
            type: String,
            unique: [true, 'Username is already taken'],
            required: [true, 'Sorry you need to provide a username'],
            trim: true,
            lowercase: true,
            max: [32, 'Username must be at most 20 characters long'],
            index: true,
        },

        name: {
            type: String,
            trim: true,
            max: [32, 'Name must be at most 32 characters long'],
            lowercase: true,
        },

        profile: {
            type: String,
            required: true,
        },

        role: {
            type: Number,
            default: 0,
        },

        roledesc: {
            type: String,
        },

        opone: {
            type: Number,
            default: 0,
        },

        optwo: {
            type: Number,
            default: 0,
        },

        opthree: {
            type: Number,
            default: 0,
        },

        opfour: {
            type: Number,
            default: 0,
        },

        opfive: {
            type: Number,
            default: 0,
        },

        opsix: {
            type: Number,
            default: 0,
        },

        opseven: {
            type: Number,
            default: 0,
        },

        opeight: {
            type: Number,
            default: 0,
        },

        about: {
            type: String,
            trim: true,
        },

        remark: {
            type: String,
        },

        photo: {
            data: Buffer,
            contentType: String
        },

        salt: String,

        hashed_password: {
            type: String,
            required: true
        },

        resetPasswordLink: {
            data: String,
        },
    },
    { timestamps: true },
)

const User = models.User || model("User", userSchema);

export default User;