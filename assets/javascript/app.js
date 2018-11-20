$(document).ready(function(){
    $("#start-button").click(function(){
        var number = 60;
      $("#start-button").on("click", start);
      $("#submit").on("click", finish);
      $("#restart").on("click", restart);

      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".choices");
          showMe("#submit");
          hideMe("#start-button");
          hideMe("#restart");
          hideMe("#results");
      }
      function timer(){
        number-- 
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          stop(); 
        }
      }
      function stop(){
          clearInterval(counter); 
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".choices").hide();
          $("#submit").hide();
      }
      function finish(){
          number = 1; 
          clearInterval(counter); 
          timer();
          //Here I wanted to create a for loop that would check the user submissions from the questions in the html. If the value of the answer was 1 then the score would increase by one and display in the HTML. Any unanswered questions would count as a value of 0. 
      }
  
      function restart(){
          number = 50;
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
  
        start(); 
    });
  });