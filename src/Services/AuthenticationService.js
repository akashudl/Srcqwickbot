class AuthenticationService
{
   registerSucessfullLogin(username)
   {
       console.log("RegisterSuceffsul Login")
       sessionStorage.setItem('autheticatedUser',username);
   }
   logout()
   {
    sessionStorage.removeItem('autheticatedUser');
   }
   isUserloggedin()
   {
       let user=sessionStorage.getItem('autheticatedUser');
       if(user===null)
       return false;
       else
       return true;
   }
}
export default new  AuthenticationService();