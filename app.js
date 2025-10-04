<head>
  <script src="https://www.google.com/recaptcha/enterprise.js?render=6Lepm20rAAAAANEjjPj_sCQQrUBLd0lZcAZRmnjA"></script>
  
</head>

// ღილაკის მიღება
const darkModeBtn = document.querySelector('.dark');

// კლიკის ღონისძიება
darkModeBtn.addEventListener('click', function() {
    // თუ ფონი უკვე შავია, დააბრუნეთ თეთრი, თუ არა — გააკეთეთ შავი
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});


