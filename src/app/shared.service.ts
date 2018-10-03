export class SharedService{
loggedIn = false;

logIn(){
    this.loggedIn=true;
}

logOut(){
    this.loggedIn=false;
}

userExist(){
    return this.loggedIn;
}
}