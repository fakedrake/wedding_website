function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.getElementById('rsvp_form');
    const formData = new FormData(form);

    // Replace with your Google Form's URL
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdlO9_i-ItB_Oken-4ZPiKvcDEJGHgaZsvu2LG4XahcpweFEQ/formResponse';

    alert("This website is still experimental. Come back when it's ready.")
    return
    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
        .then(response => {
            alert('Thank you for your RSVP!');
            form.reset();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
}
