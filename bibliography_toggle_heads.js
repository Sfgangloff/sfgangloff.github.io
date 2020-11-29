$(document).ready(function(){
$("#book_un").click(function() {
    $("#subsubpage_bibliography").load("subsubpage_bibliography_entropy.txt");
        });
});

$(document).ready(function() {
  $("#book_un").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#subsubpage_bibliography").offset().top
      },
      100 //speed
    );
  });
});

$(document).ready(function(){
$("#book_un").hover(function() {
    $("#description_entropy").css("opacity","1");
        }, function() {
    $("#description_entropy").css("opacity","0");
        });
});

$(document).ready(function(){
$("#book_deux").click(function() {
    $("#subsubpage_bibliography").load("subsubpage_bibliography_exactlysolvable.txt");
        });
});

$(document).ready(function() {
  $("#book_deux").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#subsubpage_bibliography").offset().top
      },
      100 //speed
    );
  });
});

$(document).ready(function(){
$("#book_deux").hover(function() {
    $("#description_exactlysolvable").css("opacity","1");
        }, function() {
    $("#description_exactlysolvable").css("opacity","0");
        });
});


$(document).ready(function(){
$("#book_trois").click(function() {
    $("#subsubpage_bibliography").load("subsubpage_bibliography_consciousness.txt");
        });
});

$(document).ready(function() {
  $("#book_trois").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#subsubpage_bibliography").offset().top
      },
      100 //speed
    );
  });
});

$(document).ready(function(){
$("#book_trois").hover(function() {
    $("#description_consciousness").css("opacity","1");
        }, function() {
    $("#description_consciousness").css("opacity","0");
        });
});


$(document).ready(function(){
$("#book_quatre").click(function() {
    $("#subsubpage_bibliography").load("subsubpage_bibliography_machinelearning.txt");
        });
});

$(document).ready(function() {
  $("#book_quatre").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#subsubpage_bibliography").offset().top
      },
      100 //speed
    );
  });
});

$(document).ready(function(){
$("#book_quatre").hover(function() {
    $("#description_machinelearning").css("opacity","1");
        }, function() {
    $("#description_machinelearning").css("opacity","0");
        });
});

$(document).ready(function(){
$("#book_cinq").click(function() {
    $("#subsubpage_bibliography").load("subsubpage_bibliography_somebooks.txt");
        });
});

$(document).ready(function() {
  $("#book_cinq").click(function() {
    $("body,html").animate(
      {
        scrollTop: $("#subsubpage_bibliography").offset().top
      },
      100 //speed
    );
  });
});

$(document).ready(function(){
$("#book_cinq").hover(function() {
    $("#description_somebooks").css("opacity","1");
        }, function() {
    $("#description_somebooks").css("opacity","0");
        });
});
