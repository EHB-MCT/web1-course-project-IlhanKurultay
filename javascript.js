  //Ai
  function drieAi() {
      document.getElementById("hover-illustrator").style.visibility = 'visible';
  }

  function neenAi() {
      document.getElementById("hover-illustrator").style.visibility = 'hidden';
  }
  //Ps
  function driePs() {
      document.getElementById("hover-photoshop").style.visibility = 'visible';
  }

  function neenPs() {
      document.getElementById("hover-photoshop").style.visibility = 'hidden';
  }
  //prem
  function driePrem() {
      document.getElementById("hover-prempro").style.visibility = 'visible';
  }

  function neenPrem() {
      document.getElementById("hover-prempro").style.visibility = 'hidden';
  }
  //ae
  function drieAe() {
      document.getElementById("hover-ae").style.visibility = 'visible';
  }

  function neenAe() {
      document.getElementById("hover-ae").style.visibility = 'hidden';
  }
  //html
  function drieHtml() {
      document.getElementById("hover-html").style.visibility = 'visible';
  }

  function neenHtml() {
      document.getElementById("hover-html").style.visibility = 'hidden';
  }
  //PHP
  function driePHP() {
      document.getElementById("hover-php").style.visibility = 'visible';
  }

  function neenPHP() {
      document.getElementById("hover-php").style.visibility = 'hidden';
  }
  //BLENDER
  function drieD() {
      document.getElementById("hover-blender").style.visibility = 'visible';
  }

  function neen() {
      document.getElementById("hover-blender").style.visibility = 'hidden';
  }

  function toonNav() {
      if (document.getElementById("pc").style.display == "none") {
          document.getElementById("pc").style.display = "flex";
          document.getElementById("x").style.display = "flex";
          document.getElementById("burger").style.display = "none";
          document.getElementById("navigatie").style.gridTemplateColumns = "1fr 1fr 1fr";
      } else {
          document.getElementById("pc").style.display = "none";
          document.getElementById("x").style.display = "none";
          document.getElementById("burger").style.display = "flex";
          document.getElementById("navigatie").style.gridTemplateColumns = "1fr 1fr";
      }

  }