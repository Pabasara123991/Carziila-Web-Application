window.addEventListener("scroll", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});






function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

$(document).ready(function() {
        // Smooth scrolling for all links with class "selected_btn"
        $(".selected_btn a").on("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top
                    },
                    800 // Adjust the scrolling speed (in milliseconds)
                );
            }
        });
    });