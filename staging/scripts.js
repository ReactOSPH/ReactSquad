// splash
function introduce() {
  setTimeout(function() {
    document.getElementById("load").remove();
    document.getElementById("introLoad").style.width = "0";
  }, 1000);
  switchLang20240203(); //only applies to devlog/20240203
}

// cookie consent, code from https://blog.formpl.us/how-to-create-a-simple-cookie-consent-pop-up-for-your-website-dad17a174b60
if (localStorage.getItem('cookieSeen') != 'shown') {
  $('.cookieNotice').delay(2000).fadeIn();
  localStorage.setItem('cookieSeen','shown')
};
$('.close').click(function() {
  $('.cookieNotice').fadeOut();
});
// I might deal with cookies at a later time tho..

// MIT license
function MIT() {
  alert(
    "MIT License\n\n" +
    "Copyright (c) 2021 ReactSquad, a tbmassoc brand\n\n" +
    "Permission is hereby granted, free of charge, to any person obtaining a copy " +
    "of this software and associated documentation files (the \"Software\"), to deal " +
    "in the Software without restriction, including without limitation the rights " +
    "to use, copy, modify, merge, publish, distribute, sublicense, and/or sel l" +
    "copies of the Software, and to permit persons to whom the Software is " +
    "furnished to do so, subject to the following conditions:\n\n" +
    "The above copyright notice and this permission notice shall be included in all " +
    "copies or substantial portions of the Software.\n\n" +
    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR " +
    "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, " +
    "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE " +
    "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER " +
    "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, " +
    "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE " +
    "SOFTWARE."
  );
}