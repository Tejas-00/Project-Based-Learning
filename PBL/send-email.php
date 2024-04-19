<?php
            // Function to generate a random 4-digit OTP
            function generateOTP() {
                return rand(1000, 9999);
            }

            // Get the user's email address from the form submission
            $user_email = $_POST['user-email'];

            // Generate a random OTP
            $otp = generateOTP();

            // Send the OTP to the user's email address
            $to = $user_email;
            $subject = "Your OTP for Verification";
            $message = "Your OTP is: $otp";
            $headers = "From: tcsonawane371122@kkwagh.edu.in";

            // Send email
            $mail_sent = mail($to, $subject, $message, $headers);

            if ($mail_sent) {
                echo "An OTP has been sent to your email address. Please check your inbox.";
            } else {
                echo "Error: Failed to send OTP. Please try again later.";
            }
?>