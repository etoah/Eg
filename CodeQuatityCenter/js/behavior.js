/**
 * Created by Lucien on 5/16/2015.
 */

var Progress = (function () {
    var progress = {},
        R = 112.5,
        SP = {x: 125, y: 237.5},
        width = 25,
        imgw = 250,
        imgh = 250,
        circleColor = {
            good: "#0000FF",
            OK: "#00FF00",
            bad: "#FF0000"
        },
        centerColor="#F0F0F0"
        ;

    progress.paper = null;
    progress.init = function (id, percent,desc, bkimgurl) {
        this.paper = Raphael(id, imgw, imgh);
        //底图
        bkimgurl && this.paper.image(bkimgrurl, 0, 0, 74, 74);

        //进度比例，0到0.9999
        var drawPercent = percent >= 1 ? 0.9999 : percent;
        var PI = Math.PI,
            color = null;
        ep = {
            x: SP.x + R * Math.sin(2 * PI * (1 - drawPercent)),
            y: SP.y - R + R * Math.cos(2 * PI * (1 - drawPercent))
        };

        if (percent < 0.6) {
            color = circleColor.bad;
        }
        else if (percent >= 0.6 && percent < 0.8) {
            color = circleColor.OK;
        }
        else {
            color = circleColor.good;
        }

        var path = [
            'M', SP.x, ' ', SP.y,
            'A', R, ' ', R, ' 0 ', percent > 0.5 ? 1 : 0, ' 1 ', ep.x, ' ', ep.y
        ].join('');
        var ele= this.paper.path(path)
            .attr({"stroke-width": width, "stroke": color});

        $("#"+id).append("<div><p><span class='big'>"+Math.round(percent * 100) + "%</span><span>"+desc+"</span></p></div>");

    }



    return progress;
})();


$(
    function () {

        //nav
        $(".nav ul li:first-child").addClass("navSelected");
        $(".nav ul li").click(
            function () {
                var target = $(this).attr('data-target');
                $('.content').hide();
                $('#' + target).show();
                $(".nav ul li[class='navSelected']").removeClass("navSelected");

                $(this).addClass("navSelected");
            }
        )


        //progress
        Progress.init("progress", "0.5","综合指数");
        Progress.init("ukProgress", "0.7","uk指数");
        Progress.init("qProgress", "0.5","p指数");

    }
);
