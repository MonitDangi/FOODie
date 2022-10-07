var nav = $(".nav");
var search = $(".search");
var icon = $(".icon");
var cross = $(".cross");
var openmenu = $(".openmenu");
var closemenu = $(".closemenu");
var nav2 = $(".nav2");
var width = window.innerWidth;
icon.click(()=>{
    width = window.innerWidth;
    search.show();
    nav.hide();
    icon.hide();
    cross.show();
    search.width(width/3);
})
cross.click(()=>{
    search.width(0);
    width = window.innerWidth;
    if(width > 580){
        nav.show();
    }
    search.hide();
    cross.hide();
    icon.show();
})
openmenu.click(()=>{
    nav2.show();
    nav2.width("100%")
    openmenu.hide();
    closemenu.show();
})
closemenu.click(()=>{
    nav2.width(0);
    nav2.hide();
    closemenu.hide();
    openmenu.show();
})
var MagicScrollOptions = {
    items: 1,
    step: 1,
    draggable: true
    };