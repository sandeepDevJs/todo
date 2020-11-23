$(document).ready( function(){

    $("form").submit(function(e){
        let task = $("form input").val();
        $.ajax({
            url: "/todo",
            type: "post",
            data: {data: task},
            success: function (data) {
                window.location = "http://localhost:4000/todo";
            } 
        });
        
    });

    $("li").click(function () {
        let data = $(this).text()
        $.ajax({
            url:"/todo",
            type: "DELETE",
            data: {data: data},
            success: function (data) {
                location.reload();
            }            
        });
    });
});