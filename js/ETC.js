! function (t) {
    t.fn.ellipsis = function(c,n){
      // Configure/customize these variables.
      var showChar = c;  // How many characters are shown by default
      var ellipsestext = "...";
      var moretext = "";
      var lesstext = "";
      
    
      $(n).each(function() {
          var content = $(this).html();
    
          if(content.length > showChar) {
    
              var c = content.substr(0, showChar);
              var h = content.substr(showChar, content.length - showChar);
    
              var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
    
              $(this).html(html);
          }
    
      });
    
      $(".morelink").click(function(){
          if($(this).hasClass("less")) {
              $(this).removeClass("less");
              $(this).html(moretext);
          } else {
              $(this).addClass("less");
              $(this).html(lesstext);
          }
          $(this).parent().prev().toggle();
          $(this).prev().toggle();
          return false;
      });
  }
  }(jQuery);