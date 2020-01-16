$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });

    $("a.thumbnail").click(function(e) {
        e.preventDefault();
        $(this).css("background-color", "#7fff00");
    })
}
