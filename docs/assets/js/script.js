//for Style -------------------------------------------------------------------------
var TOCelement = document.getElementById('toc');
var logoImage = document.getElementById('logo_url_a');

var titleLeftObj = document.getElementById('titleLeft');
var titleRightObj = document.getElementById('titleRight');

function ResizeTOCHeight(){
    // only desktop
    if(window.innerWidth > 960){
        headerPosition = TOCelement.getBoundingClientRect().top;
    var TOCheight = (window.innerHeight - headerPosition) + "px";
    // console.log(`Inn:${window.innerHeight}, toc:${headerPosition}, tocHeight:${TOCheight}`);
    TOCelement.style.height = TOCheight;
    }
};


if(logoImage){
    logoImage.onload = function(){
        ResizeTOCHeight();
    };
}

window.onload = function(){
    ResizeTOCHeight();
};

window.onresize = function(){
    ResizeTOCHeight();
};

//------------------------------------------------------------------------- /for Style

//for smooth scroll---------------------------------------------------------------------

$(function(){
    var $titleBarHeight = document.getElementById('titleBar').clientHeight;

    //for ページ内リンク
    $("a[href^='#']").click(function(){
        var $href = $(this).attr('href');
        var $position = $(decodeURI($href)).offset().top;
        //console.log(`$titleBarHeight:${$titleBarHeight}, $position:${$position}`);
        $('html, body').animate(
            {'scrollTop':$position - $titleBarHeight},
            250
        );
    });

    //for ページ間リンク
    var $hash = location.hash;
    if($hash){ //url文字列に#~が存在する
        $hash = decodeURI($hash);
        if($($hash).length){ //#~ は有効
            var $position = $($hash).offset().top;
            //console.log(`$titleBarHeight:${$titleBarHeight}, $position:${$position}`);
            $('html, body').animate(
                {'scrollTop':$position - $titleBarHeight},
                500
            );
        }
    }
});

//------------------------------------------------------------------- /for smooth scroll