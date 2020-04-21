<template >

<div id="app">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" role="navigation">
  <div class="container">
    <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <router-link to="/"><img src="../public/img/scg-icon.png" height="50" /></router-link>
                    
                   
                    <router-link to="/CV"><p style="color:white;font-size:20px;"> Profile </p></router-link>

                    <router-link to="/MAPI"><p style="color:white;font-size:20px;"> TEST Result API </p></router-link>
                
                </div>
                
                </div>
</nav>
    
    <br><br>
  <router-view></router-view>
<br><br><br><br><br><br><br><br><br>
  <div id="footer">
            <nav class="navbar navbar-expand-md navbar-dark fixed bg-dark" role="navigation">
  <footer>
    <div class="d1">
                <p style="color:white;font-size:20px;">Created By  	Mr. Bundhit Ngamsanguan</p>
                 </div>
            </footer>
</nav>
            
  </div>
  </div>
  
</template>


<script>



</script>


<style>
div.d1 {
  text-align: center;
}
@import url('../public/css/style.css');
@import url('../public/css/bootstrap.min.css');

</style>
