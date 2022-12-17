var numberOfBlocks = 5 ;
var id ;

function openModal( Id ) {
    id = Id ;
    document.getElementById('confirmPostDelete').innerHTML = 
    '<div  class="modal myModalSignUp-In">'+
    '<div class="modal-content">'+
    '<div class="modal-layout">'+
    '</div>'+
    '<div class="Sign-form">'+
        '<div>'+
            '<p style="text-align: center;">Are you sure you want to delete this post?</p>'+
        '</div>'+
        '<br>'+
        '<div id="YesNoBtn">'+
            '<button class="ynBtn" style="color: white; background-color: rgb(30, 194, 30);" onclick="deletePost()">Yes</button>'+
            '<button class="ynBtn" style="color: white; background-color: rgb(218, 65, 65);" onclick="closeModal()">No</button>'+
        '</div>'+
    '</div>'+
    '</div>'+
'</div>'
}
function closeModal( ) {
    document.getElementById('confirmPostDelete').innerHTML = '';
}

function deletePost(){
    numberOfBlocks = numberOfBlocks-1 ;
    let x = document.getElementById(id);
    x.parentNode.removeChild(x);
    closeModal();
}