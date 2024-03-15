/*SignIn*/
function showSignIn(){
    let signIn = document.querySelector('.signIn__container');
    signIn.classList.toggle('signIn--show');
}

/*Close the SignIn*/
let hideSignIn = document.querySelector(".signIn__container");
  hideSignIn.addEventListener(
    "click",
    function (e) {
      if(e.target.classList[0] == 'signIn__container'){
        /*Solo el signIn__container puede cerrar el Sign In*/
        this.classList.toggle('signIn--show');
      }
    }
);