var ampCustom = {
    checkMobile : () => {
        jQuery(document).ready( () => {
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
        });        
    },
    putDesk : (element) => {
        jQuery(document).ready( () => {
            if (!ampCustom.checkMobile()) {
                element.innerHTML = `
                    <amp-ad 
                        width=300 height=250
                        type="doubleclick"
                        data-slot="/63888804/Politica-Nota_300x250C">
                        </amp-ad>
                `;
            }
        });
    }
}