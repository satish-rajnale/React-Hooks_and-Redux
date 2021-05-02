export default interface User{
    name: string;
    auth? : {
        email?: string;
        password?: string;
    }
}