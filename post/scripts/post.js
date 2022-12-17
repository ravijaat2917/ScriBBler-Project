function likeCount(){
    document.getElementById('liked').innerHTML = 'Liked';
    let count = document.getElementById('likeCount');
    let likes = parseInt(count.innerHTML);
    let total_likes = likes + 1 ;
    count.innerHTML = total_likes ;
}
function editText(){
    let heading = document.getElementById('heading');
    let content = document.getElementById('borderChange');
    let editBtn = document.getElementById('btn-chnge');
    heading.style.border ='2px solid pink';
    content.style.border = '2px solid pink';
    editBtn.innerHTML = '<p id="edit-btn" onclick="save()">'+
    'Save <span><i class="fa-solid fa-floppy-disk"></i></span>'+
'</p>'
}
var updated1 = false;
function save(){
    let heading = document.getElementById('heading');
    let content = document.getElementById('borderChange');
    let editBtn = document.getElementById('btn-chnge');
    let upDated = document.getElementById('postContent');
    heading.style.border ='none';
    content.style.border = 'none';
    editBtn.innerHTML = '<p id="edit-btn" onclick="editText()">'+
    'Edit <span><i class="fa-solid fa-pen-to-square"></i></span>'+
    '</p>'
    if(updated1==false){
        upDated.innerHTML = '<h4>Updated!</h4>' + upDated.innerHTML ;
        heading.innerHTML = 'UPDATED: ' + heading.innerHTML ;
        updated1 = true;
    }
}
function comment(){
    let comment = document.getElementById('txtArea').value;
    let newComment = document.getElementById('comments');
    newComment.innerHTML += '<div class="cmntLine">'+
    '<p id="cmnt">'+comment+'</p>'+
    '</div>'
    document.getElementById('txtArea').value = null;
}