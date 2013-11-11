$(":button").click(function() {
        var isbn = this.id;
        alert('About to report lost on ISBN ' + isbn);
        statmodify(isbn);
        $("button#"+isbn).attr("disabled","disabled");
        window.location.reload(true);
});

$(document).ready(function(){
    var stat = $('td[title="status"]');
    for( i=0; i<stat.length; i++ ){
            var status = stat[i].innerHTML;
            var isbn = stat[i].id.slice("6");
            var secId = "button#"+isbn;
            if(status == "lost")
                    {
                            $(secId).attr("disabled",true);
                    }
            else{
                    $(secId).removeAttr("disabled");
            }
    }
    
});

function statmodify(isbn)
{
        $.ajax({
            type: "PUT",
            url: "/library/v1/books/"+isbn+"?status=lost",
            contentType: "application/json",
            success: function() {
            
            },
            error: function() {
           
            }
        });
        $(status).text("lost")
          
}