const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // Random အရောင်တစ်ခု ထုတ်ပေးခြင်း
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    
    console.log("Background color changed to: #" + randomColor);
});