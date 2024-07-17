<p id="demo"></p>
<button oncick="clearInterval(myVar)">Stop Execution</button>

<script>
  var myVar = setInterval(printUserName, 2000);
    
  function  printUserName(){
    document.getElementById("demo").innerHTML +="
      <p>Den Ramah</p>
      ";
  }
</script>
