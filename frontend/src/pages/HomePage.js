import React from 'react';

function HomePage() {
    return (
        <>
            <h2>My Portfolio Website</h2>
            
            <h3 id="home-header">About this website</h3>
            <article>
                <p id="home-description">
                    This website was written with HTML, CSS, and JavaScript, along with other technologies that tie it all together.
                    These languages are used to design the pages that we see in the web browser, allow for customization of styling,
                    and dynamically make changes to the content. Additionally, frameworks such as MongoDB, Express, React, and Node
                    were beneficial with providing a usable database, API interaction, and various libraries to help with developing
                    the website. React, in particular, has different libraries such as react router to help with route handling,
                    icons ready to use, and allows for the creation of components to make designing the website more efficient. Finally,
                    the implementation of a RESTful API enables the usage of CRUD operations securely.
                </p>
            </article>
            {/* The new Home page provides a welcoming heading and paragraph(s) that describes
            technologies used in the website: HTML, CSS, icons, Express, Google Fonts,
            JavaScript, MongoDB, Mongoose, Node, optimized images, React, REST, etc. */}
            
        </>
    );
}

export default HomePage;