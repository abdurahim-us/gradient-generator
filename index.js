var body = document.querySelector('#body');
var form = document.querySelector('#firstForm');
var directionBtn = document.querySelector('#directionBtn');
var directionSelect = document.querySelector('#directionSelect');

var color1 = document.querySelector('[name="color1"]');
var color2 = document.querySelector('[name="color2"]');

var directionIndicator = document.querySelector('.directionIndicator');
var gradientCode = document.querySelector('.gradient_code');
var fullViewImg = document.querySelector('.fullViewImg');
var copyButton = document.querySelector('.copyButton');
var container = document.querySelector('.container')
var fullView = document.querySelector('.fullView');

(function firstPageLoad() {
    body.style.background = 
    `linear-gradient(to right, 
        ${color1.value}, 
        ${color2.value})`;
        
        fullViewImg.src = './images/full-screen.png'
        directionIndicatorText('to right')
        gradientCode.textContent = body.style.background
    })();
    
    var store = [];
    
    function addToStore(event) {
        event.preventDefault();
        var selectValue = directionSelect.value;
        if(selectValue.length > 0){
            store = [selectValue];
            var xa = directionCheck(event);
            setGradient(xa);
        } else {
            return directionCheck()
        }
    }
    
    function directionCheck() { 
        if(store.length > 0){
            var x = store[store.length - 1];
            directionIndicatorText(x)
            return x
        } else {
            directionIndicatorText('to right')
            return 'to right'
        }
    }
    
    function directionIndicatorText(direction) {
        return directionIndicator.textContent = direction
    }
    
    
    function setGradient(func) {
        body.style.background = 
        `linear-gradient(${func}, 
            ${color1.value}, 
            ${color2.value})`;
            
            gradientCode.textContent = body.style.background
        }  
        
        function colorMushup() {
            var m = directionCheck()
            return setGradient(m)
        }
        
        function copyGradientCheck() {
            if(copyGradient()) {
                alert('text copied successfully')
            } else {
                alert('try copying mannually')
            }
        }
        
        async function copyGradient() {
            await navigator.clipboard.writeText(gradientCode.textContent)
            return true
        }
        var xka = 0;
        fullViewImg.addEventListener('click', function() {
            if(xka === 0) {
                container.style.display = 'none';
                fullViewImg.src = './images/exit-full-screen.png';
                xka = 1;
            } else {
                container.style.display = 'flex';
                fullViewImg.src = './images/full-screen.png';
                xka = 0;
            }
        })
        
        copyButton.addEventListener('click', copyGradientCheck);
        
        gradientCode.addEventListener('click', copyGradientCheck);
        
        directionBtn.addEventListener('click', addToStore);
        
        form.addEventListener('submit', addToStore);
        
        color1.addEventListener('input', colorMushup);
        
        color2.addEventListener('input', colorMushup);