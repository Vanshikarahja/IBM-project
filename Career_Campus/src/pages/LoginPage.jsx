// import { SignIn } from '@clerk/react-router'
import { SignIn } from '@clerk/clerk-react'
const LoginPage=()=> {
  return(
    <div className="flex item-center justify-center h-[calc(100vh-80px)]">
        <SignIn signUpUrl='/Register' />
     </div> 
 );
  
};
export default LoginPage;
