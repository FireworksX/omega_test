export interface IUser {
    name: string
    avatar: string
}

export interface IComment {
    user: IUser
    date: Date
    text: string
    children?: IComment[]
}
