//MILD 1 & 2
var yourName = "Shaila Moulee";
var friendsName = "Laila Dola";

//MILD 3
$(".sent").show();

//MILD 4
$(".youSend").click(function(){
    var yourInput = $(".your-input").val();
    console.log(yourInput);
    $(".sent").append("<p>" + yourInput + "<p>");
});

//MEDIUM 5
$(".friendSend").click(function(){
    var friendInput = $(".friend-input").val();
    console.log(friendInput);
    $(".received").append("<p>" + friendInput + "<p>");
    //SPICY 7 
    $(".num").text(Number($(".num").text())+1);
});

//MEDIUM 6
$(".received").css("color", "#453831");










//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}