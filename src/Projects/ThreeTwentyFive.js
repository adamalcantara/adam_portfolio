import React from 'react'

const ThreeTwentyFive = () => {
    return (
        <div>
            <div className='flow-root text-[20px]'>
                <div className=''>
                    I was growing up when The Beatles Anthology series was released in 1995 and 1996. One of my earliest memories is seeing John Lennon on TV playing his Rickenbacker 325 model, and I was captivated instantly. Lennon played several 325 models in his time with The Beatles, and the first one was built in 1958. It&#39;s a historically significant guitar because of the Lennon connection and because it&#39;s one of only 30 of that model made in that year.
                </div>
            </div>


            <div className='flow-root mt-5 text-[20px]'>
                <div className=''>
                    For my first project after graduation, I decided that I would build a website which would chronicle those historic instruments. To accomplish this, I decided to use WordPress, building a custom theme in order to leverage the WordPress Content Management System to organize all the information about the guitars. The most difficult part of this process was developing a page to display all of the guitars featured on the website. In order to do this, I had to leverage the WordPress WP_QUERY function. This allowed me to iterate over all the pages on the website and only display the pages I wanted in the order I specified.
                </div>
            </div>



            <div className='flow-root mt-5 text-[20px]'>
                <div className=''>
                    I also utilized page templates on the website to differentiate the different page types. It also uses widgets to build the homepage. The theme features security features consistent with WordPress theme standards.
                </div>
            </div>



            <div className='flow-root mt-5 text-[20px]'>
                <div className=''>
                    This project is still in progress and has not yet been deployed.
                </div>
            </div>


            <div>

                <a href='https://github.com/adamalcantara/325archive' className=''>GitHub Repository</a>
            </div>
        </div>
    )
}

export default ThreeTwentyFive