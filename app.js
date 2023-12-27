const wrapper = document.getElementById("wrapper")

window.addEventListener("keyup" , (e) =>{
    wrapper.innerHTML = `
    <div class="key">
    ${e.key == " " ? "Space" : e.key}
    <small>Event.key</small>

    </div>
    <div class="key">
    ${e.keyCode}
    <small>Event.KeyCode</small>

    </div>
    <div class="key">
    ${e.code}
    <small>Event.Code</small>

    </div>
    
    
    `
})