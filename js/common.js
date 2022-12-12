var signup_model = false ;
var signin_model = false ;

function displaySignUpModel() {
    if( signup_model == false ){
        signup_model = true ;
        signin_model = false ;
        document.getElementById('myModalSign-In').innerHTML = '';
        document.getElementById('myModalSignUp-Up').innerHTML = '<div id="myModalSignUp" class="modal myModalSignUp-In">'+
        '<div class="modal-content">'+
            '<div class="modal-layout">'+
                '<span>Get Started</span><span onclick="closeModel()" class="close-tab">&times;</span>'+
            '</div>'+
            '<hr>'+
            '<div class="Sign-form">'+
                '<form>'+
                    '<label>Name</label>'+
                    '<input type="text" placeholder="Enter your name" required>'+
                    '<label>Username</label>'+
                    '<input type="text" placeholder="Enter your username" required>'+
                    '<label>Password</label>'+
                    '<input type="password" placeholder="Enter your password" required>'+
                    '<label>Confirm Password</label>'+
                    '<input type="password" placeholder="Re-enter your password" required>'+
                    '<button class="form-btn">Sign Up</button>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>'
    }
}

function closeModel(){
    signin_model = false;
    signup_model = false ;
    document.getElementById('myModalSign-In').innerHTML = '';
    document.getElementById('myModalSignUp-Up').innerHTML = '';
    document.getElementById('create_post_modal').innerHTML = '';
}

function displaySignInModel(){
    if( signin_model == false){
        signup_model = false;
        signin_model = true;
        document.getElementById('myModalSignUp-Up').innerHTML = '';
        document.getElementById('myModalSign-In').innerHTML = '<div id="myModalSignIn" class="modal myModalSignUp-In">'+
        '<div class="modal-content">'+
            '<div class="modal-layout">'+
                '<span>Welcome Back!</span><span class="close-tab" onclick="closeModel()">&times;</span>'+
            '</div>'+
            '<hr>'+
            '<div class="Sign-form">'+
                '<form>'+
                    '<label>Username</label>'+
                    '<input type="text" placeholder="Enter your username" required>'+
                    '<label>Password</label>'+
                    '<input type="password" placeholder="Enter your password" required>'+
                    '<button class="form-btn">Sign In</button>'+
                '</form>'+
                '<p id="below-signIn">Not a member? <span id="signup-btn" onclick="displaySignUpModel()" style="color: blue; cursor: pointer;">Sign Up</span></p>'+
            '</div>'+
        '</div>'+
    '</div>'
    }
}

function create_post_modal(){
    document.getElementById('create_post_modal').innerHTML = '<div  class="modal myModalCreatePost">'+
    '<div class="createModalContent">'+
    '<div class="modalHeading">'+
        '<span>Pen Your Post</span><span class="close-tab" onclick="closeModel()">&times;</span>'+
    '</div>'+
    '<hr>'+
    '<div class="Sign-form">'+
        '<form>'+
            '<label>Title</label>'+
            '<TEXTAREA style = "padding: 10px 10px 0px 10px;" placeholder="Enter the title of your post" name="Title"></TEXTAREA>'+
            '<label>Contents</label>'+
            '<TEXTAREA style = "padding: 10px 10px 0px 10px;" placeholder="Enter the contents of your post" rows="7"name="commentfield"></TEXTAREA>'+
            '<button class="create-btn">Create</button>'+
        '</form>'+
    '</div>'+
    '</div>'+
'</div>'
}