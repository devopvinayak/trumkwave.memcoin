AOS.init();

function copyText() {
    const input = document.getElementById("myInput");
    input.select();
    input.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Text copied: " + input.value);
}