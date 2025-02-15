echo 'async function getQuote() {
    const response = await fetch("https://goquotes.onrender.com/api/quote");  // Your Render API URL
    const data = await response.json();
    document.getElementById("quote").innerText = data.text;
    document.getElementById("author").innerText = `- ${data.author}`;
  }
  
  window.onload = getQuote;' > script.js