var nav = $(".nav");
var search = $(".search");
var icon = $(".icon");
var cross = $(".cross");

icon.click(()=>{
    search.show();
    nav.hide();
    icon.hide();
    cross.show();
    search.width(300);
})
cross.click(()=>{
    search.width(0);
    nav.show();
    search.hide();
    cross.hide();
    icon.show();
})