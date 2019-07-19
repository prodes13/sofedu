import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
             <div className="container">
                 <h1>Ai intrebari despre proiect, sau vrei sa ajuti? Contacteaza-ma!</h1>
                <form>

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label for="country">Country</label>
                    <select id="country" name="country">
                    <option value="australia">Romania</option>
                    <option value="canada">Moldova</option>
                    <option value="usa">Alta tara</option>
                    </select>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"/>

                </form>
                </div>
        </div>
    )
}

export default Contact
