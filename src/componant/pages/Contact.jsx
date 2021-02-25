import React from "react";

function Contact(){
    return(
        <>
        <h1>Contact Page</h1>
        <div className="container">
            <form action="/">
                <div class="form-group">
                  <label for=""></label>
                  <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-group">
                  <label for=""></label>
                  <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" class="text-muted">Help text</small>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" />
                    Checked Here 
                  </label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
        </>
    )

}
export default Contact;