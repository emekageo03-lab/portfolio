     function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        }

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.hamburger').classList.remove('active');
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

(function(){
      emailjs.init({
        publicKey: "YrwtF73M6J9hiZZXH",
      });
   })();
   document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault()
    const btn = document.getElementById("submit-btn")
    const statusMessage = document.getElementById("status-msg")
    btn.innerText = "sending";
    btn.disable = true;

    emailjs.sendForm('service_otvqssm', 'template_73d5prj', '#myForm').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    statusMessage.innerHTML = "Message sent successfully!";
    statusMessage.style.color = "green";
    btn.innerText = "send email";
    btn.disabled = false;
    document.getElementById("myForm").reset();
  },
  (error) => {
    console.log('FAILED...', error);
    statusMessage.innerHTML = "Failed to send message. Please try again";
    statusMessage.style.color = "red";
    btn.innerText = "send email";
    btn.disabled = false;
  },
);


   });