<?php
/**
 * Created by IntelliJ IDEA.
 * User: LR050891
 * Date: 22-Mar-17
 * Time: 4:57 PM
 */
include ('master.php');
?>


<button name="sd" value="hi" onclick="func();">button</button>
<div  class="modal" id="hi">
    <div class="modal-background"></div>
    <div class="modal-card">
        <form action="#" method="post">
            <header class="modal-card-head">
                <p class="modal-card-title">Additional Information</p>
                <button class="modal-close"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->


            </section>
            <footer class="modal-card-foot">
                <a class="button is-success">Save changes</a>
                <a class="button close">Cancel</a>
            </footer>
        </form>
    </div>
</div>

<script>

    function func() {
        var k = document.getElementById('hi');
        k.className += 'is-active';
    }

</script>
<div>sad</div>
