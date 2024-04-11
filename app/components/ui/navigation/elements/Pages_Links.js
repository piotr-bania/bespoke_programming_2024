import Route_Change from '../../transitions/Route_Change'

const Pages_Links = () => {
    return (
        <div className='pages_links'>
            <h4>Pages</h4>

            <Route_Change href='/services'>
                <p className='uppercase light_grey'>Services</p>
            </Route_Change>

            <Route_Change href='/pricing'>
                <p className='uppercase light_grey'>Pricing</p>
            </Route_Change>

            <Route_Change href='/about'>
                <p className='uppercase light_grey'>About</p>
                </Route_Change>

            <Route_Change href='/portfolio'>
                <p className='uppercase light_grey'>Portfolio
                </p>
            </Route_Change>

            <Route_Change href='/faq'>
                <p className='uppercase light_grey'>FAQ</p>
            </Route_Change>
        </div>
    )
}

    export default Pages_Links