export default function Index(){
    return(
        <div>
            <form>
                <label htmlFor="">email</label>
                <input type="email"/>
            </form>
            <form>
                <label htmlFor="">password</label>
                <input type='password'/>
            </form>
            <p><a href="#">forgot password</a></p>
            <button type='submit'>login</button>
        </div>
    )
}