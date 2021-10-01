
document.addEventListener('DOMContentLoaded', function(){
    // alert('hello');
    
    const hello = () => {
        console.log("hello world")
        console.log("aaaaaaaaaaaaaaaaaaaa")
        chrome.tabs.executeScript({
            file:'axios.js'
        })
        chrome.tabs.executeScript({
            file:'ocrApi.js'
        })
        // chrome.tabs.insertCSS({file:'styles.css'})
       
        chrome.tabs.executeScript({
            file:'lang.js'
        })
        chrome.tabs.executeScript({
            file:'foreground.js'
        })
    }      
    
    
    document.getElementById('me').addEventListener('click',hello)
})
// let id = 100;

