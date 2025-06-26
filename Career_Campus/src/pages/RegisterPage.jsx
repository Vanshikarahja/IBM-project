// import { SignUp } from '@clerk/react-router'
import { SignUp } from '@clerk/clerk-react'
const RegisterPage=()=> {
  return (
    <div className="flex item-center justify-center h-[calc(100vh-80px)]">
       <SignUp signInUrl='/Login' />
    </div>
  )
}
export default RegisterPage;