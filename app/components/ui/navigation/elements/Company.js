import Link from 'next/link'

const Company = () => {
    return (
        <div className='company'>
            <h4>Bespoke Programming Ltd</h4>
            <p className='uppercase'>Company number: <Link href='https://find-and-update.company-information.service.gov.uk/company/14153310' target='blank' className='link'>14153310</Link></p>
            <p className='uppercase'>London, United Kingdom</p>
        </div>
    )
}

export default Company