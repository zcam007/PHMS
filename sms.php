<?php
/*$sid = "AC632c8687743f9ac93e57564e404baa25"; // Your Account SID from www.twilio.com/console
$token = "4537c70b7d44cf8c3cfaff3715bfcc1f"; // Your Auth Token from www.twilio.com/console

$client = new Twilio\Rest\Client($sid, $token);
$message = $client->messages->create(
  '9787115659', // Text this number
  array(
    'from' => '9787115659', // From a valid Twilio number
    'body' => 'Hello from Twilio!'
  )
);

print $message->sid;
*/

 require_once "Twilio\autoload.php";
    use Twilio\Rest\Client;
    
    // Step 2: set our AccountSid and AuthToken from https://twilio.com/console
    $AccountSid = "AC632c8687743f9ac93e57564e404baa25";
    $AuthToken = "4537c70b7d44cf8c3cfaff3715bfcc1f";

    // Step 3: instantiate a new Twilio Rest Client
    $client = new Client($AccountSid, $AuthToken);

    // Step 4: make an array of people we know, to send them a message. 
    // Feel free to change/add your own phone number and name here.
    $people = array(
        "+919787115659" => "Curious George",
    );

    // Step 5: Loop over all our friends. $number is a phone number above, and 
    // $name is the name next to it
    foreach ($people as $number => $name) {

        $sms = $client->account->messages->create(

            // the number we are sending to - Any phone number
            $number,

            array(
                // Step 6: Change the 'From' number below to be a valid Twilio number 
                // that you've purchased
                'from' => "+919787115659", 
                
                // the sms body
                'body' => "Hey $name, Monkey Party at 6PM. Bring Bananas!"
            )
        );

        // Display a confirmation message on the screen
        echo "Sent message to $name";
    }
    ?>