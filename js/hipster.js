hipsterApp();

function hipsterApp() {

    $(document).ready(function() {

    $(document).on('pageinit', function(event){
        $('.page').on("swipeleft", function () {
            var nextpage = $(this).next('div[data-role="page"]');
            if (nextpage.length > 0) {
                $.mobile.changePage(nextpage, {transition: "slide", changeHash:false });
            }
        });

        $('.page').on("swiperight", function () {
            var prevpage = $(this).prev('div[data-role="page"]');
            if (prevpage.length > 0) {
                $.mobile.changePage(prevpage, { transition: "slide", reverse: true, changeHash: false });
            }
        });
    });

    $( "#container" ).droppable();
    $( "#glasses1" ).draggable({ revert: "invalid" });
    $( "#glasses2" ).draggable({ revert: "invalid" });
    $( "#glasses3" ).draggable({ revert: "invalid" });
    $( "#stash1" ).draggable({ revert: "invalid" });
    $( "#stash2" ).draggable({ revert: "invalid" });
    $( "#stash3" ).draggable({ revert: "invalid" });
    $( "#hank" ).droppable();
    }); 
}

