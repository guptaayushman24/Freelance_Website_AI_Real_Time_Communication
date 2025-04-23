import zod from 'zod'
export const signupobject = zod.object({
    name:zod.string().regex(/^[a-zA-Z]+$/),
    password:zod.string().min(6).regex(/^[a-z0-9]*$/i),
    experience:zod.number(),
    rating:zod.number(),
    skills:zod.string().array().nonempty()

})

export const signinobject = zod.object({
    email:zod.string().email({ message: "Invalid email address" }),
    password:zod.string().min(6).regex(/^[a-z0-9]*$/i),
    clientjobseeker:zod.string()
})

export const clientregister = zod.object({
    client_name:zod.string().regex(/^[a-zA-Z]+$/),
    email:zod.string().email({message:"Invalid email address"}),
    password:zod.string().min(6).regex(/^[a-z0-9]*$/i),
    organization:zod.string()

})

export const userprofile = zod.object({
    about:zod.string(),
    projectlink:zod.string().array().nonempty()
})

export const jobschema = zod.object({
    job_title:zod.string(),
    job_description:zod.string(),
    budget:zod.string(),
    timeline:zod.string()
})