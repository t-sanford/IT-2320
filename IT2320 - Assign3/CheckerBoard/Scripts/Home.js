var LastElement = {};
var CurrentElement = {};

$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".piece").click(function () 
    {
        CurrentElement = this;
        Move();
        LastElement = this;
    });
});

function Move()
{
    var current = $(CurrentElement);
    var last = $(LastElement);
    var currentClass = current.attr("class");

    if (currentClass == "cell piece red")
    {
        current.removeClass("cell piece red");
        current.addClass("highlighted-cell-red");
        $(".cell").click(function () {
            $(this).attr("class", "cell piece red");
        });
        last.removeClass("highlighted-cell-red");
        last.addClass("cell");;
    }
    else
    {
        current.removeClass("cell piece black");
        current.addClass("highlighted-cell-black");
        $(".cell").click(function () {
            $(this).attr("class", "cell piece black");
        });
        last.removeClass("highlighted-cell-black");
        last.addClass("cell");;
    }
}