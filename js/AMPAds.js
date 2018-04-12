var AMPAds = {
    checkMobile : function() {
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        }
        else {
            return false;
        }  
    },
    doubleClick: function(dataSlot,width,height) {
        return ""+
        "<amp-ad "+
            "width=\""+width+"\" height=\""+height+"\""+
            "type=\"doubleclick\""+
            "data-slot=\""+dataSlot+"\">"+
            "</amp-ad>";
    },
    deskDoubleClick : function (dataSlot, width, height) {
            if (AMPAds.checkMobile()==false) {
                return  document.write(AMPAds.doubleClick(dataSlot,width,height));
            }
    },
    mobileDoubleClick: function(dataSlot, width, height) {
            if (AMPAds.checkMobile()==true) {
                return  document.write(AMPAds.doubleClick(dataSlot,width,height));
            }
    }
}