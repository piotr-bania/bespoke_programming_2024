import Heading_1 from '../components/ui/headings/Heading_1'
import Route_Change from '../components/ui/transitions/Route_Change'

const Room_1 = () => {
    return (
        <main>
            <Heading_1
                h1Text='This is about page'
                className='heading_1'
            />
            <Route_Change href='/'>
                <button>Go to Home</button>
            </Route_Change>
        </main>
    )
}

export default Room_1