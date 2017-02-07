$(document).ready(function() { 

  var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();


  var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 750)
{
isMobile = true;

}


	//fartscroll();    // needs to change!

	var Currval = '', gradiantopacity = 0.5, gradiantmin = 0.2,Bottomgradiantopacity = 0.8;
	var CurrScroll = 0, currGnum=1,IsTop=0,isfadeout=0;
	var currdiv = "", CurrBackground="", OldBackground="", CurrBgImage = "";
	var Currinfo = "", isFbLink="";
  var LastSortClick=2;
  var AtoZ=false;
	var ScrollHit=110,CurrMixId=0;
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var Starthtml="This project is dedicated to number of popular musicians who died at age 27</div><br><br><a href='http://www.facebook.com/sharer.php?u=http://forever27.club/?id=0' class='link fblink'>Share on Facebook</a>";
PageStart();
$('#sortname').find( ".sortup" ).show();
$('#sortname').find( ".sortdown" ).hide();
if (isMobile)
{
      $("#soundframe").attr("src", "");
}

function SetImgData(file)
{
  if (CurrBgImage != file) {
    $('#imgdata').stop().animate({opacity: 0}, 150, function() {
        $(this)
            .css({'background-image': 'url('+file+')'})
            .animate({opacity: 1}, 150);
      });
    CurrBgImage = file;
  }
}

$(".link").click(function () { 

  $('.link').removeClass('ison');
  $(this).addClass('ison'); 
        if ($(this).attr('id') == 'sortdtl'){  $('.arw').hide(); if (LastSortClick != 1) { $(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide(); OrderSTR='asc'; AtoZ=false;} else {if (AtoZ) { $(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide();OrderSTR='asc'; AtoZ=!AtoZ; } else { OrderSTR='desc'; AtoZ=!AtoZ;$(this).find( ".sortup" ).hide();$(this).find( ".sortdown" ).show(); } }  $(".uppertitles").hide(0);  $(".dtltitle").show(400).css("display", "inline-block"); $('#itemlist').mixItUp('sort', 'dtl:'+OrderSTR);  LastSortClick=1;  }
        if ($(this).attr('id') == 'sortname'){ $('.arw').hide();if (LastSortClick != 2) { $(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide();OrderSTR='asc';  AtoZ=false;} else {if (AtoZ) { $(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide();OrderSTR='asc'; AtoZ=!AtoZ; } else { OrderSTR='desc'; AtoZ=!AtoZ;$(this).find( ".sortup" ).hide();$(this).find( ".sortdown" ).show(); } } $(".uppertitles").hide(0);  $(".yeartitle").show(400).css("display", "inline-block"); $('#itemlist').mixItUp('sort', 'lastname:' + OrderSTR + ' age:desc'); LastSortClick=2; }
        if ($(this).attr('id') == 'sortyear'){ $('.arw').hide();if (LastSortClick != 3) { $(this).find( ".sortup" ).hide();$(this).find( ".sortdown" ).show();OrderSTR='desc'; AtoZ=false;} else {if (AtoZ) { $(this).find( ".sortup" ).hide();$(this).find( ".sortdown" ).show();OrderSTR='desc'; AtoZ=!AtoZ; } else { OrderSTR='asc'; AtoZ=!AtoZ;$(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide(); } }  $(".uppertitles").hide(0);  $(".yeartitle").show(400).css("display", "inline-block"); $('#itemlist').mixItUp('sort', 'year:'+OrderSTR); LastSortClick=3;}
        if ($(this).attr('id') == 'sortco'){   $('.arw').hide();if (LastSortClick != 4) { $(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide();OrderSTR='asc';  AtoZ=false;} else {if (AtoZ) { $(this).find( ".sortup" ).show();$(this).find( ".sortdown" ).hide();OrderSTR='asc'; AtoZ=!AtoZ; } else { OrderSTR='desc'; AtoZ=!AtoZ;$(this).find( ".sortup" ).hide();$(this).find( ".sortdown" ).show(); } } $(".uppertitles").hide(0);  $(".cotitle").show(400).css("display", "inline-block"); $('#itemlist').mixItUp('sort', 'co:'+OrderSTR); LastSortClick=4;}

  
        
    });

  
$('#itemlist').on('mixEnd', function(e, state){
  $('html,body').animate({
    scrollTop: $('.isselected').offset().top - ( h / 2 ) + 50},
    300);
    state.$targets.each(function( index ) {
     // $(this).removeClass (function (index, css) {
      //  return (css.match (/\bcurrentmixid-\S+/g) || []).join(' ');
     // });
    // $( this ).AddClass('currentmixid'+index);
      $( this ).attr('currentmixid',index);
});
    CurrMixId=parseInt($('.isselected').attr('currentmixid'));
});

$("#itemlist").on("click", "li", function(){ //click hanlder
  if (!isMobile) {
    $('html,body').animate({
    scrollTop: $("#"+$(this).attr('id')).offset().top - ( h / 2 ) + 50},
    'slow');
  } else {
    if (currdiv != ""){currdiv.removeClass('isselected');} 
      currdiv=$( this );
      ChangePlayerMusic($( this ).attr('data-video'));
      ChangeMobileBox($( this ).attr('data-fullname')); 



       $('#info-box').animate({bottom:0},1000,function () { });



      ChangeInfoBox($( this ).attr('data-info')); 
      SetImgData($( this ).attr('img-info'));
      $( this ).addClass('isselected');
    }
});



function ScrollAndPlayByLetter(letter) {

    $("#letterdata").fadeTo( 'slow' , 0.7, function() {$("#letterdata").fadeTo( 'fast' , 1, function() {});});

  //$('#itemlist').mixItUp('sort', 'name:asc');
 $('html,body').animate({
    scrollTop: $("."+letter).offset().top - ( h / 2 ) + 50},
    'slow');
}




function PageStart() {
  if (IsTop==0)
  {
     
    SetImgData('default.jpg');
    $(".gradiant").fadeTo( 'fast' , 0.0, function() {});

    $(".gradiantbottom").fadeTo( 'fast' , 0.0, function() {});
    $('.linkeditem').removeClass('isselected');
    CurrBackground = 'gradiant0';
    currGnum = 0;
    $("."+CurrBackground).fadeTo( "slow" ,gradiantopacity, function() {});
    $("."+CurrBackground+"bottom").stop().fadeTo( "slow" , Bottomgradiantopacity, function() {});
    $("#soundframe").fadeTo( 'fast' , gradiantmin, function() {});
    $("#soundframe").attr("src", "https://www.youtube.com/embed/rPGCrlZwEkA?autoplay=1&loop=1");

  if (isMobile)
  {
$("#info-box").html("");
  } else
  {
    $("#info-box").html(Starthtml);
  }
    
    Currinfo = $( "#pagetitlediv" ).attr('data-info');
    //ChangeInfoBox($( "#pagetitlediv" ).attr('data-info'));
    IsTop=1;
  }
  
}

function ShowYoutubeEmbed() 
  {
    $("#soundframe").fadeTo( 'fast' , 1, function() {});
  }

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function ChangePlayerMusic(val) 
{ 
  if (!isMobile)
    {
    if (Currval != val)
      {
      $("#soundframe").attr("src", "http://www.youtube.com/embed/"+ val +"rel=0&autoplay=1&loop=1");
      Currval = val;
      currdiv.removeClass('isselected');
      }
    } else {
      $("#videomobile").attr("src", "http://www.youtube.com/embed/"+ val +"rel=0&autoplay=1&loop=1");
    }
}

function doFadeOut() 
{ 
//$(".linkeditem").fadeTo( "fast" , 0, function() {});
//$("#info-box").fadeTo( "fast" , 0, function() {});
//$("#sortsection").fadeTo( "fast" , 0, function() {});
$("."+CurrBackground).stop().fadeTo( 2000 , gradiantmin, function() {});
$("."+CurrBackground+"bottom").stop().fadeTo( 2000 , gradiantmin, function() {});

isfadeout=1;
}

function doFadein() 
{ 
  if (isfadeout==1){
  //  $(".linkeditem").fadeTo( "fast" , 1, function() {});
   // $("#info-box").fadeTo( "fast" , 1, function() {});
    //$("#sortsection").fadeTo( "fast" , 1, function() {});
    isfadeout=0;
  }

}

function ChangeInfoBox(val) 
{ 
  if (!isMobile){
	   if (Currinfo != val)
		   {
        $("#info-box").html(val);
        Currinfo = val;
      	OldBackground = CurrBackground;
      	currGnum=currGnum+1;
      	if (currGnum==5) {currGnum=1;}        
      	CurrBackground = 'gradiant' + currGnum;
        $("."+CurrBackground).stop().fadeTo( "slow" ,gradiantopacity, function() {});
        $("."+OldBackground).stop().fadeTo( "slow" , 0, function() {});
        $("."+CurrBackground+"bottom").stop().fadeTo( "slow" , gradiantopacity, function() {});
        $("."+OldBackground+"bottom").stop().fadeTo( "slow" , 0, function() {});
 		   }
  }
  else
  {
        $("#info-box").html(val);
        OldBackground = CurrBackground;
        currGnum=currGnum+1;
        if (currGnum==5) {currGnum=1;}        
        CurrBackground = 'gradiant' + currGnum;
        $("."+CurrBackground).stop().fadeTo( "slow" , gradiantopacity, function() {});
        $("."+OldBackground).stop().fadeTo( "slow" , 0, function() {});
          $("."+CurrBackground+"bottom").stop().fadeTo( "slow" , gradiantopacity, function() {});
        $("."+OldBackground+"bottom").stop().fadeTo( "slow" , 0, function() {});
  }
}

function ChangeMobileBox(mname)
{
$("#mobileartist").html(mname);
}

function listNext()
{

CurrMixId = CurrMixId + 1;

 $('html,body').animate({
    scrollTop: $( "[currentmixid='"+CurrMixId+"']" ).offset().top - ( h / 2 )+50},
    'slow');
}

function listPrev()
{

CurrMixId = CurrMixId - 1;

 $('html,body').animate({
    scrollTop: $( "[currentmixid='"+CurrMixId+"']" ).offset().top - ( h / 2 )+50},
    'slow');
}


 $( window ).scroll(function() {
  clearTimeout($.data(this, 'scrollTimer'));
  doFadein();
 	h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
 	CurrScroll = $( window ).scrollTop();
  if (CurrScroll < (h/4)) { PageStart();} else {
    if (!isMobile)
      {
       clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
        doFadeOut();
      }, 5000));
      IsTop=0;
    $( ".linkeditem" ).each(function() {
      if (($( this ).offset().top < CurrScroll + ( h / 2 )) && ($( this ).offset().top+ScrollHit) > CurrScroll +( h / 2 )) {
      ChangePlayerMusic($( this ).attr('data-video'));
      ChangeInfoBox($( this ).attr('data-info')); 
      ChangeMobileBox($( this ).attr('data-fullname')); 
      SetImgData($( this ).attr('img-info'));
      $( this ).addClass('isselected');
      currdiv=$( this );
      CurrMixId=parseInt($('.isselected').attr('currentmixid'));
      } 
      });
      }
    SetImgData('');
    ShowYoutubeEmbed();
  }
//$( "#button" ).html( $( window ).scrollTop());
});

//get the csv data
$.ajax({
type: "GET",
url: "data.csv",
dataType: "text",
success: function(data) {processData(data);}
});

function sortBy(field){
    return function(a, b){
        if (a[field] > b[field])
         return -1;
      if (a[field] < b[field])
        return 1;
      return 0;
    };
}



function processData(allText) {
    var currletter = '';
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            //if (currletter != tarr[3].substring(0,4) ) {
              //  if (currletter == "" ) {
                //$("body").append('<div class="titles"><div class="inline-title">'+tarr[3].substring(0,4)+'</div><ul>')
                //} else {
               // $("body").append('</ul></div><div class="titles"><div class="inline-title">'+tarr[3].substring(0,4)+'</div><ul>')
                //} 
                //currletter = tarr[3].substring(0,4);
            //}
            //$("#list1").append('</ul></div><div class="ioslist-group-container"><div class="ioslist-group-header">'+tarr[3].substring(0,4)+'</div><ul>')
           // correctsyntax $( "body" ).append( '<li class="linkeditem" data-video="' + tarr[7] + '" data-info="' + tarr[5] + '" img-info="' + tarr[8] + '" id="' + tarr[7] + '">'+tarr[2]+'<span class="yeartitle"> ' + tarr[3].substring(0,4) + '</span></li>');
            lines.push(tarr);
        }
    }
    //$( "body" ).append('</ul><div id="spacer"></div><div id="bototmlinks">'+bottomlinks+'</div>')
//lines.sort(sortBy(2));
//if (QueryString.sort == 'lastname') { lines.sort(sortBy(1));}
//if (QueryString.sort == 'firstname') { lines.sort(sortBy(0));}

//if (QueryString.sort == 'year') { lines.sort(sortBy(3));}
if (!isMobile){
  isFbLink='on Facebook';
}
 $( "#itemlist" ).append( '<li class="FirstTitleMobile" data-video="0" data-co="aaa" data-info="<div class=\'infotext\'>This project is dedicated to number of popular musicians who died at age 27</div><br><a href=\'http://www.facebook.com/sharer.php?u=http://forever27.club/?id=0\' class=\'link fblink\'>Share</a> " img-info="0" video-id="0" data-lastname="aaa" data-year="99993000"  data-dtl="0" id="count0" >'+'<span class="uppertitlescontainer"></span>This project is dedicated to number of popular musicians who died at age 27<br><br>Members:</li>');
 $( "#itemlist" ).append( '<li class="FirstTitle" data-video="0" data-co="aaa" data-info="<div class=\'infotext\'>This project is dedicated to number of popular musicians who died at age 27</div><br><a href=\'http://www.facebook.com/sharer.php?u=http://forever27.club/?id=0\' class=\'link fblink\'>Share</a> " img-info="0" video-id="0" data-lastname="aaa" data-year="99993000"  data-dtl="0" id="count0" >'+'<span class="uppertitlescontainer"></span>Members:</li>');
      
    for (var l=1; l<lines.length; l++) {
      $( "#itemlist" ).append( '<li class="linkeditem mix '+ lines[l][1].substring(0,1).toLowerCase() +'  " data-video="' + lines[l][7] + '" data-fullname="' + lines[l][2] + '" data-co="' + lines[l][6] + '" data-info="<div class=\'infotext\'>' + lines[l][5] + ', died on ' +lines[l][3].substring(6,8)+"/"+lines[l][3].substring(4,6)+"/"+lines[l][3].substring(0,4) + ' from ' + lines[l][6] + ' at age 27 & ' + lines[l][4] + ' days </div><br><br> <a href=\'http://www.facebook.com/sharer.php?u=http://forever27.club/?id=' + l + '\' class=\'link fblink\'>Share ' + isFbLink + '</a> " img-info="' + lines[l][8] + '" video-id="' + lines[l][7] + '" data-lastname="' + lines[l][1] + '" data-year="' + lines[l][3] + '"  data-dtl="' + lines[l][4] + '" id="count' + l + '" >'+'<span class="uppertitlescontainer"><span class="yeartitle uppertitles">' + lines[l][3].substring(0,4) + '</span><span class="dtltitle uppertitles">+' + lines[l][4] + ' days</span><span class="cotitle uppertitles">' + lines[l][6] + '</span></span>'+lines[l][2] + '</li>');
         
    //  alert(lines[l][1]);
}
}


var CancelScrollArr=new Array(33,34,35,36,37,38,39,40);

$(document).keydown(function(e) {
     var key = e.which;
     if (key==38)
  {
listPrev();

  }
  if (key==40)
  {
    listNext();
  }

      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,CancelScrollArr) > -1) {
          e.preventDefault();
          return false;
      }
      return true;
});


$(document).keypress(function(event) {
 
var currK = String.fromCharCode(event.charCode).toLowerCase();
ScrollAndPlayByLetter(currK);

      //alert('Handler for .keypress() called. - ' + event.charCode);

});


if (QueryString.id != 'undefined') { 
  setTimeout(function() { ScrollAndPlayById(QueryString.id); }, 1500);
  
}


function ScrollAndPlayById(id) {

 // $('#itemlist').mixItUp('sort', 'name:asc');
 console.log($("#count"+id).offset());
 $('html,body').animate({
    scrollTop: $("#count"+id).offset().top - ( h / 2 ) + 50},
    'slow');
}




$('#itemlist').mixItUp({
  layout: {
    display: 'block'
  }
});

 setTimeout(function() { $('#itemlist').mixItUp('sort', 'lastname:asc'); 

$('html,body').animate({
    scrollTop: $('#count0').offset().top - ( h / 2 ) + 50},
    'slow');


}, 500);
 



});




