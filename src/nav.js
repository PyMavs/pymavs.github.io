$(document).ready(
    function () {
        $(".hhome").click(
            function(){
                $(".events, .sidebar").show(250)
                $("#blogs, #vids, #about").hide(250)
                $(".habout, .hpython, .hblog").removeClass("selected")
                $(".hhome").addClass("selected")
            }
        )

        $(".habout").click(
            function(){
                $("#about").show(250)
                $("#blogs, #vids, .events, .sidebar").hide(250)
                $(".hhome, .hpython, .hblog").removeClass("selected")
                $(".habout").addClass("selected")
            }
        )

        $(".hpython").click(
            function(){
                $("#vids").show(250)
                $("#blogs, #about, .events, .sidebar").hide(250)
                $(".hhome, .habout, .hblog").removeClass("selected")
                $(".hpython").addClass("selected")
            }
        )

        $(".hblog").click(
            function(){
                $("#blogs").show(250)
                $("#vids, #about, .events, .sidebar").hide(250)
                $(".hhome, .habout, .hpython").removeClass("selected")
                $(".hblog").addClass("selected")
            }
        )
        
        $(".habout, .hpython, .hblog").removeClass("selected")
        $(".hhome").addClass("selected")
        // $(".events, .sidebar").toggle(250)
    }
)