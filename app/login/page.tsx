import  LoginForm  from '@/app/ui/login-form'

export default function page() {
    return (
        <div className='m-auto w-screen h-screen  flex justify-center items-center border-black bg-indigo-700' >
            <div className='w-1/4 border-black'>
                <LoginForm/>
            </div>
        </div>
    )
}