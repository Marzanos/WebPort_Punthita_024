var count=0;
function postFunction(){
    var topic = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    var text1 = document.getElementById("text1").value;

    count++;
    if(count ==1){
        topic.innerHTML = text1;
    }
    else if (count == 2){
        comment1.innerHTML = text1;
    }
    else if(count == 3){
        comment2.innerHTML = text1;
    }

}
function clearFunction(){
    var topic = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    var text1 = document.getElementById("text1").value;

    count = 0;
    topic.innerHTML = "";
    comment1.innerHTML = "";
    comment2.innerHTML = "";
    text1 = " ";
}