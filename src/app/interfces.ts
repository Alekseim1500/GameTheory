export interface User{
    email: string
    password: string
}

export interface UserInfo{
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string
    image?: string
    role?: string
}

export interface answer{
    id:number
    answers:string[]
}