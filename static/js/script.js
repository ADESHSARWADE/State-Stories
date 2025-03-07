

const initBg = (autoplay = true) => {
    // Define image file names
    const bgImgsNames = [
        'bg1.jpg', 'bg2.jpeg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpeg', 
        'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpeg', 'bg9.jpg'
    ];

    // Construct the full image paths
    const bgImgs = bgImgsNames.map(img => "static/image/img/" +img);

    // Initialize the backstretch with the image paths
    $.backstretch(bgImgs, {duration: 2000, fade: 5000});

    // If autoplay is false, stop the slideshow
    if (!autoplay) {
        $.backstretch('stop');  
    }    
}


const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});

var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function lvalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    if(res.test(mail.value)!="1")
    {
        window.alert("Email Is Invalid");
        return false;
    }
    else if(psr.test(pswd.value)!="1")
    {
        window.alert("Password Is Invalid, try again");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }    
};
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    if (chatbotWindow.style.display === 'none') {
        chatbotWindow.style.display = 'block';
        setTimeout(sendWelcomeMessage, 500); // Delay to ensure the chatbot window is visible
    } else {
        chatbotWindow.style.display = 'none';
        chatbotMessages.innerHTML = ''; // Clear messages when the chatbot is closed
    }
}

function sendWelcomeMessage() {
    addMessage('Bot', 'How can I help you today?');
}

function processInput() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    if (userInput) {
        addMessage('You', userInput);
        handleUserInput(userInput);
    }
}

function addMessage(sender, message) {
    const chatbotMessages = document.getElementById('chatbotMessages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function handleUserInput(input) {
    const commands = {
        'index': 'index.html',
        'bihar': 'bihar.html',
        'gujarat':'gujarat.html',
        'contact': 'contact.html',
        'help': 'help.html'
    };

    if (commands[input]) {
        window.location.href = commands[input];
    } else {
        setTimeout(() => addMessage('Bot', 'Unknown command. Please try "home", "about", "contact", or "help".'), 500);
    }
}

// Automatically open the chatbot and send the welcome message when the page loads
window.onload = function() {
    toggleChatbot();
};

var smail = document.getElementById("semail");
var spswd = document.getElementById("password1");
var spswd2 = document.getElementById("password2");
var phone = document.getElementById("phone");

function svalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

    if(res.test(smail.value)!="1")
    {
        
        window.alert("Email Is Invalid");
        return false;
    }
    else if(phoneno.test(phone.value)!="1")
    {
        window.alert("Please enter a valid phone number :");
        return false;
    }
    else if(psr.test(spswd.value)!="1")
    {
        window.alert("Password Is Invalid");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        window.alert("try again");
        return false;
    }
    else  if(spswd.value!=spswd2.value)
    {
        window.alert("Passwords Doesnt Match, Please Re-enter :");
        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerl = new IntersectionObserver((entriesl) =>{
    entriesl.forEach((entryl) =>{
        console.log(entryl)
        if(entryl.isIntersecting){
            entryl.target.classList.add('showl');
        }
        else{
            entryl.target.classList.remove('showl');
        }
    })
})
const hiddenElementsl = document.querySelectorAll('.hiddenl');
hiddenElementsl.forEach((ell) => observerl.observe(ell));

const observerr = new IntersectionObserver((entriesr) =>{
    entriesr.forEach((entryr) =>{
        console.log(entryr)
        if(entryr.isIntersecting){
            entryr.target.classList.add('showr');
        }
        else{
            entryr.target.classList.remove('showr');
        }
    })
})
const hiddenElementsr = document.querySelectorAll('.hiddenr');
hiddenElementsr.forEach((elr) => observerr.observe(elr));

$(document).ready(function () {

    $('#password1').on('keyup', function () {

        let textElement = $(this).val()
        let strength = 0

        $('#typepass').find('h4').html(`Your Password: ${textElement}`)

        if (textElement.length > 0) {
            let sizeElements = textElement.length

            if (sizeElements > 10) {

                strength += 30

            } else {
                let calcMath = (sizeElements * 2)

                strength += calcMath

            }

        }

        let lowerCase = new RegExp(/[a-z]/)
        if (lowerCase.test(textElement)) {
            strength += 16
        }

        let upperCase = new RegExp(/[A-Z]/)
        if (upperCase.test(textElement)) {
            strength += 18
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 16
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 20
        }
        
        //Function to produce result
        let renderResult = (strengthData, color) => {
            return $('#strengthResult').html(
                `
                          
            <div class="progress" style="height: 40px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 15px">${strength}%</strong></div>
            </div>`
            )
        }

        if (strength < 21) {
            renderResult(strength, 'danger')//red very weak password
        } else
            if (strength > 20 && strength < 41) {
                renderResult(strength, 'warning')//orange weak password
            } else
                if (strength > 40 && strength < 61) {
                    renderResult(strength, 'secondary')//medium password
                } else
                    if (strength > 60 && strength < 81) {
                        renderResult(strength, 'info')// strong password
                    } else {
                        renderResult(strength, 'success')//very strong password
                    }

        

    });

});