$(document).ready(() =>{
    alert('The document is ready!');
    $("button").on("click", function(){
        var id = $("button").index(this) + 1;
        var butt = $("body div.row div.col > div:nth-child(" + id + ") button");
        if (butt.html() == "Update") {
            var target = $("body div.row div.col > div:nth-child(" + id + ")");
            var input = $("body div.row div.col > div:nth-child(" + id + ") input");
            var newVal = input.val();
            input.remove();
            var b = $("body div.row div.col > div:nth-child(" + id + ") b");
            var span = $("body div.row div.col > div:nth-child(" + id + ") span");
            b.toggle();
            span.toggle();
            span.html(newVal);
            butt.html("Edit");
            butt.wrapInner("<div data-type='text' class='details'>");
            target.removeClass("d-flex");
        } else {
            var target = $("body div.row div.col > div:nth-child(" + id + ")");
            var b = $("body div.row div.col > div:nth-child(" + id + ") b");
            var span = $("body div.row div.col > div:nth-child(" + id + ") span");
            var type = target.attr('data-type');
            var value = $("body div.row div.col > div:nth-child(" + id + ") span").text();
            b.toggle();
            span.toggle();
            target.prepend('<input class="form-control col-8" type="' + type + '" value="' + value + '"></input>');
            butt.html("Update");
        }
    });
});