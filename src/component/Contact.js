const Contact = ()=>{
    return(
        <div>
            <h1 className="p-2 m-2 font font-bold">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
                <button className="border border-black p-2 m-2 bg-green-500 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact;