let count = 0;
let max_illegal_attempts_allowed = 3;

function takeAction(){
    // Change this fucntion to auto submit test
    document.querySelectorAll('.pagecontainer').forEach(element => {
        element.style.display = "none";
      });
    var msg = document.createElement("h1");
    document.body.appendChild(msg);
    msg.innerText = "CAUGHT CHEATING! TEST IS OVER FOR YOU!";
}

function debugPurposeOnly(){
    document.getElementById('meter').innerText = count;
}
// The blur event occurs when an element loses focus
window.onblur = function checkFocus() {
    if (count < max_illegal_attempts_allowed){
        count += 1;
        debugPurposeOnly();
        console.log(count);
        if (count != max_illegal_attempts_allowed){
            var newWin = window.open('./warn.html?count=' + count.toString(), '_blank');    
            // Handle popup blocked event
            if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
            { 
                this.alert('Illegal attempts = '+ count + ' out of ' + max_illegal_attempts_allowed + ' allowed');
            }
        }
    }
    if (count === max_illegal_attempts_allowed){
        count += 1;
        takeAction();
    }
}