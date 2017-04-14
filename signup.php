<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 16-Mar-17
 * Time: 3:09 PM
 */
include ('master\header.php');
include ('master.php');
?>
<section class="hero is-dark is-large">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
<br>
        <br>
        <div class="column is-half is-offset-one-quarter"">
        <form method="post" action="regsuccess.php">
            <div class="box">

                <div class="columns">
                <div class="column is-6">
                    <p class="control has-icon">
                        <input class="input" type="text" name="fname" requireds placeholder="First Name">
                        <span class="icon is-small"><i class="fa fa-info"></i></span>
                    </p>
                </div>

                <div class="column is-6">

                    <p class="control has-icon">
                        <input class="input" type="text" name="lname" requireds placeholder="Last Name">
                        <span class="icon is-small"><i class="fa fa-info"></i></span>
                    </p>
                </div>
                </div>

                <div class="columns">
                    <div class="column is-6">
                        <p class="control has-icon">
                            <input class="input" type="text" name="username" requireds placeholder="UserName">
                            <span class="icon is-small"><i class="fa fa-user"></i></span>
                        </p>
                    </div>

                    <div class="column is-6">

                        <p class="control has-icon">
                            <input class="input" type="email" name="email" requireds placeholder="Email">
                            <span class="icon is-small"><i class="fa fa-envelope"></i></span>
                        </p>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-6">
                        <p class="control has-icon">
                            <input class="input" type="password" name="password" requireds placeholder="Password" maxlength="15">
                            <span class="icon is-small"><i class="fa fa-lock"></i></span>
                        </p>
                    </div>

                    <div class="column is-6">

                        <p class="control has-icon">
                            <input class="input" type="password" requireds placeholder="Confirm Password">
                            <span class="icon is-small"><i class="fa fa-lock"></i></span>
                        </p>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-6">
                        <p class="control has-icon">
                            <input class="input" type="number" name="ssn" requireds placeholder="SSN" maxlength="15">
                            <span class="icon is-small"><i class="fa fa-lock"></i></span>
                        </p>
                    </div>

                    <div class="column is-6">

                        <p class="control has-icon">
                            <input class="input" type="tel" maxlength="10" name="mob" requireds placeholder="Mobile Number">
                            <span class="icon is-small"><i class="fa fa-lock"></i></span>
                        </p>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-6">
                        <p class="control has-icon">
                            <input class="input" type="number" name="age" requireds placeholder="Age" maxlength="15">
                            <span class="icon is-small"><i class="fa fa-lock"></i></span>
                        </p>
                    </div>



                    <div class="column is-6">
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select requireds name="blood">
                                    <option disabled selected >Blood Group</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="columns">
                    <div class="column is-offset-8">
                        <p class="control">
                            <input type="button" name="additional" class="button is-light" value="Add More details..">
                        </p>
                    </div>
                <div class="column ">
                    <p class="control">
                        <input type="submit" name="signup" class="button is-info" value="Signup!">
                    </p>



                </div>
                </div>
        </form>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
        <!-- <div class="container has-text-centered">
             <h1 class="title">Patient Health Monitoring System</h1>
             <h2 class="subtitle">Your Health is our health!</h2>
         </div>-->


    </div>

</section>

