// Select the custom cursor
const cursor = document.querySelector('.cursor');

// Track the mouse movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
// Initialize EmailJS
emailjs.init("ZZlw1VUIyqwMyEb1R"); // Replace with your EmailJS User ID

// Add event listener to the form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_q30nn9r", "template_f7pbrnv", templateParams)
        .then(function (response) {
            Swal.fire({
                title: "Good job!",
                text: "Email sent successfully!",
                icon: "success"
            });
            console.log("Success:", response.status, response.text);

            // Clear the form fields after sending email
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.error("Error:", error);
        });
});
