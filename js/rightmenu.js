var rightMenuHide = true;
var enableRightMenu = true;
$(document).ready(function() {
   $(document).contextmenu(function(e) {
        if(!rightMenuHide){
            rightMenuHide = true;
            $(".right-menu").fadeOut(50);
            return false;
        } else if (!enableRightMenu){
            return false;
        }
        rightMenuHide = !rightMenuHide;
        var docWidth = $(document).width(); // 获取屏幕宽度
        var docHeight = $(document).height(); // 获取屏幕高度
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var menuWidth = $(".right-menu").width();
        var menuHeight = $(".right-menu").height();
        var betterMove = 0;
        var minEdgeMargin = 5;
        if (mouseX + menuWidth + minEdgeMargin >= docWidth &&
            mouseY + menuHeight + minEdgeMargin >= docHeight) {
            menuLeft = mouseX - menuWidth - minEdgeMargin
            menuTop = mouseY - menuHeight - minEdgeMargin
        } else if (mouseX + menuWidth + minEdgeMargin >= docWidth) {
            menuLeft = mouseX - menuWidth - minEdgeMargin
            menuTop = mouseY + minEdgeMargin
        } else if (mouseY + menuHeight + minEdgeMargin >= docHeight) {
            menuLeft = mouseX + minEdgeMargin
            menuTop = mouseY - menuHeight - minEdgeMargin
        } else {
            menuLeft = mouseX + minEdgeMargin - betterMove
            menuTop = mouseY + minEdgeMargin - betterMove
        };
        $(".right-menu").css({
            "left": menuLeft + "px",
            "top": menuTop + "px"
        }).fadeIn(80);
        return false;
   });
   $(document).click(function() {
        if(!rightMenuHide){
            rightMenuHide = true;
            $(".right-menu").fadeOut(50);
        }
   });
});