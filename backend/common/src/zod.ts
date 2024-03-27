import { z } from "zod";

const signUpZod = z.object({
    email:z.string().email(),
    password:z.string().min(6),
})

export type SignUpZod = z.infer<typeof signUpZod>;

const signInZod = z.object({
    email:z.string().email(),
    password:z.string().min(6),
})

export type SigninZod = z.infer<typeof signInZod>;

const blogpostZod = z.object({
    title:z.string(),
    content:z.string()
})

export type BlogPostZod = z.infer<typeof blogpostZod>

const blogputZod = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})

export type BlogPutZod = z.infer<typeof blogputZod>
