function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value
    //Client.checkForName(formText)

    if(!Client.checkForURL(url)){
        console.log("Invalid URL");
        alert("Invalid URL!");
        return
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/article', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            text: url 
        })
    })
    .then(res => res.json())
    .catch((rej) => {
        /* 
        If the URL is a valid URL by regex, but is not avaiable.
        For example: http://hello.world.com
        */
        alert('Error in Aylien API call! Enter a valid URL.');
        throw new Error('Error in Aylien API call! Enter a valid URL.')
    })
    .then(function(res) {
        document.getElementById('Polarity').innerHTML = `Polarity: ${res.polarity}`;
        document.getElementById('Subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('PolarityConfidence').innerHTML = `Polarity Confidence: ${res.polarity_confidence}`;
        document.getElementById('SubjectivityConfidence').innerHTML = `Subjectivity Confidence: ${res.subjectivity_confidence}`;
    })
    .catch((rej) => {
        document.getElementById('Polarity').innerHTML = "";
        document.getElementById('Subjectivity').innerHTML = "";
        document.getElementById('PolarityConfidence').innerHTML = "";
        document.getElementById('SubjectivityConfidence').innerHTML = "";
    })
}

export { handleSubmit }
