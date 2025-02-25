document.getElementById('contact-form').addEventListener('submit', function(event) {
    var senderEmailInput = document.getElementById('sender_email').value.trim();
    var recipientEmailInput = document.getElementById('recipient_email').value.trim();
    var messageInput = document.getElementById('message').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailPattern.test(senderEmailInput)) {
        alert('Please enter a valid sender email address.');
        event.preventDefault();
    } else if (!emailPattern.test(recipientEmailInput)) {
        alert('Please enter a valid recipient email address.');
        event.preventDefault();
    } else if (messageInput === '') {
        alert('Please enter your message.');
        event.preventDefault();
    }
});

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $sender_email = trim($_POST["sender_email"]);
    $recipient_email = trim($_POST["recipient_email"]);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($sender_email) || empty($recipient_email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($sender_email, FILTER_VALIDATE_EMAIL) || !filter_var($recipient_email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $subject = "Love Letter from $name";
    $body = "You have received a love letter from $name ($sender_email):\n\n$message";
    $headers = "From: $sender_email\r\n";
    $headers .= "Reply-To: $sender_email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($recipient_email, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email.";
    }
}
?>

