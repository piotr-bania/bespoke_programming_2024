import Link from 'next/link'

const Social_Media = () => {
    return (
        <div className='social_media'>
            <h4>Social Media</h4>
            <Link href='https://www.linkedin.com/in/piotr-bania/' target='blank'>
                <p className='uppercase light_grey'>LinkedIn</p>
            </Link>
            <Link href='https://www.facebook.com/people/Bespoke-Programming/61550315571705/' target='blank'>
                <p className='uppercase light_grey'>Facebook</p>
            </Link>
            <Link href='https://www.instagram.com/bespokeprogramming' target='blank'>
                <p className='uppercase light_grey'>Instagram</p>
            </Link>
            <Link href='https://twitter.com/bspkprgrmmng' target='blank'>
                <p className='uppercase light_grey'>Twitter</p>
            </Link>
            <Link href='https://github.com/piotr-bania' target='blank'>
                <p className='uppercase light_grey'>GitHub</p>
            </Link>
        </div>
    )
}

export default Social_Media