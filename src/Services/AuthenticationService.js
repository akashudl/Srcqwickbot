class AuthenticationService
{
   registerSucessfullLogin(username,photourl)
   {
       console.log("RegisterSuceffsul Login")
       sessionStorage.setItem('autheticatedUser',username);
       sessionStorage.setItem('autheticatedUserPhoto',photourl);
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
   isUserAdmin()
   {
    let user=sessionStorage.getItem('autheticatedUser');
    console.log(user);
    if((user==="jayasurya.j@qwikcilver.com"||user==="pradeep.kumar@qwikcilver.com"||user==="akash.pandit_intern@qwikcilver.com")&&user!=null)
    { 
        return  true;

    }
    else 
    return false ;
   }
   getuser()
   {
       let user=sessionStorage.getItem('autheticatedUser')
        if(user!=null)
         return user; 
   }
   getphotoUrl()
   {
       let userPhoto=sessionStorage.getItem('autheticatedUserPhoto')
       if(userPhoto!=null)
         return userPhoto;
   }
   getuser1()
   {
    let user=sessionStorage.getItem('autheticatedUser')
      return user;
      
   }
}
export default new  AuthenticationService();