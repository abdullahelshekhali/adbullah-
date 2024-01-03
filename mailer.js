const Mailer = () => {
    return (
        <div>
            <h1>contact Form</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Message</label>
                <textarea name="message" rows='4'/>
                <input type="submit" value='send'/>
            </form>
        </div>
    );
}

export default Mailer;