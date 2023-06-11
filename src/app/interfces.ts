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

export interface quest{
	question: string
    order: number
	image: string
	answerType: number
	testAnswers: [{
        answer: string,
        isRight: boolean
    }
    ]
}