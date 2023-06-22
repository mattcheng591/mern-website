import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="extra-credit">
                    <a href="#web">Web Servers</a>
                    <a href="#frontend">Frontend</a>
                    <a href="#images">Images</a> 
                    <a href="#css">CSS</a>
                    <a href="#forms">Forms</a>
                    <a href="#express">Express</a>
                    <a href="#javascript">About JavaScript</a>
                    <a href="#domChanges">DOM Changes</a>
            </nav>
            <article>
                <h3 id="web">Web Servers</h3>
                    <p>
                        There are different components of a <strong>URL</strong>, and one of them is the name of the <strong>resource</strong> at the server. In this case, index.html is the name of the
                        resource and it is used by the server to identify the resource being requested by the client. 'index.html' is also the default name for the home page for a website on an Apache
                        web server.
                    </p>
                    <p>
                        In the browser's <strong>Web Dev tools</strong>, there is information about the website's status, size, time to load, waterfall, requests, and more. This also shows information about
                        the <strong>HTTP request.</strong> This shows the <strong>request line</strong> to request to read a resource, <strong>request headers</strong> to pass additional information to the server,
                        and a body, which is optional. While some of this information is not really shown when viewing the website on my local computer, there is more displayed on the web server. The web server
                        has a few more files, such as favicon.ico and content.min.css. Also, the time to load the page is slower, which makes sense since we are not loading the website locally.
                    </p>
                    <p>
                        The reason why main.css and main.js are not showing as <strong>status 200</strong> because they are simply not found. In our HTML code, we reference main.css and main.js but have not actually
                        created them yet. The main.css and main.js files show status 404 while the favicon.ico, content.min.css, and a2-chengmat files have status 200.
                        The <strong>scheme</strong> of my URL is https://, the <strong>subdomain</strong> is web.engr, the <strong>host domain</strong> is oregonstate.edu,
                        and the <strong>resource</strong> is /~chengmat/a1-chengmat.
                    </p>

            </article>
            <article>
                <h3 id="frontend">Frontend Design</h3>
                <p>
                    <strong>Frontend Design</strong> is essentially the idea of designing the part of a website that can actually be seen by users. All of these visual aspects can
                    be altered, which can include fonts, colors, layouts, images, links, and much more. When designing the frontend, the programmer might want to consider factors
                    like making it user-friendly, visually appealing, and engaging.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>We make sure that the user can accomplish what they want on the website.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>We make sure that the user can do what they need to as quick as possible.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>We make sure that the user can traverse the page easily and understand how to use the website.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>We make sure to try and avoid any bugs, which might involve trying to mimic how most users might use the website.</dd>     
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>We make sure that the design of the website is appealing and catches the user's attention.</dd>                                                                           
                </dl>
                <p>
                    The purpose of <strong>page layout tags</strong> is to break the content of the page into different sections. While some sections might look the same visually, 
                    these tags can help to organize the sections. Not only that, some tags serve different functions. For example, the body tag is the first visible HTML element
                    in a web page, the header shows the banner for the application, the main tag is the primary block that holds content, the nav tag is used to navigate the user
                    to different sections or pages, and more. 
                    <strong> Anchor</strong> tags can be used to link the user to a different section of the page and the content within it generally describes the link that the user
                    will be clicking. The href attribute can be used to specify where the user will be taken. With <strong>navigation</strong>, anchor tags are used in order to
                    bring the user to different sections, pages, or files.
                </p>
            </article>
            <article id="images">
                <h3>Optimizing images</h3>
                <p>
                    The six major specifications of images for the web are descriptive file names, small file sizes, exact dimensions, correct file format, reduced resolution,
                    and color mode. Optimized images meet these specifications, since factors such as file size or dimensions can impact the load time, potentially becoming
                    very slow. We want to make sure that the images can be loaded smoothly and can be viewed by anyone.
                    For photos, it might be preferred to use JPG or WebP files, since they are usually only used for photographic images. They both compress the files down to
                    smaller sizes and remain rectangular. For line art, PNG files might be the best, since they can be used in a variety of colors without any distortion. PNG files
                    also have true transparency, which can be best for line art.
                </p>
            </article>
            <article id="css">
                <h3>Cascading stylesheets</h3>
                <p>
                    Stylesheets are important to use for websites and apps in order to style each component of the page. Some examples of things that can be styled include
                    changing properties of the body, a certain class, a specific ID, headers, and more.
                    One way to incorporate styles is by linking to a stylesheet using the link tag. Other methods which we will not use include embedding within a style tag,
                    inline within an element using an attribute and value, using JavaScript template literals, and manipulating the DOM in JavaScript.
                </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>
                    There are 6 major goals of accessible forms. We need to provide clear instructions so that the user knows how to fill the form out properly. The user needs to
                    know why the data is being gathered and which fields are required. The first field needs to be set to autofocus to make the form easier to fill out. We need to make sure
                    that each form control can be filled in with the keyboard, in case there are users that don't have a mouse. Tab indexing should be added to complex forms, so that the
                    user knows which order to fill the fields out. Finally, make sure that validation messages are readable, because the built-in HTML browser does not have screen
                    readable messages.
                </p>
                <p>
                    The major tags for a form can include form, input, fieldset, legend, label, select, option textarea, and button. The form tag can have an action attribute to specify
                    where the request from the form will be sent. The action can be a relative URL or absolute URL. There is also a method attribute which indicates the HTTP method being
                    used when the form is submitted. The default is set to GET, and typically the method is set to GET or POST. The label tag can help the user understand what data is
                    being entered. There can be a for attribute, which is used to link to the form control's ID's. Fieldset and legend can both be used to put form controls into groups.
                    Fieldset has a gray border by default, and the legend is placed at the top of the border. The legend typically has information to help the user understand the purpose
                    of the group. The input tag is used to get the data in the form. It has a type attribute to change how it is displayed or used, a name attribute for the server to know
                    which part of the form each item is associated with, and an optional required attribute to require the user to fill the field out. The select tag can be used to give
                    the user a drop-down list to choose from. This tag also has a name attribute, which serves the same purpose as explained previously. There are option tags within select
                    tags, used to name the choices in the list. The textarea tag allows the user to type text into a box. While there are many different attributes, some examples include
                    name, required, maxlength, minlength, and more. Maxlength and minlength can specify the minimum and maximum characters the user can type into the box. Finally, the button
                    tag can be used in replacement of an input that has a submit type. Typically, the user will click the button, and the action specified by the form tag will be performed.
                </p>
                <p>
                    There are many different ways you can style a form to increase usability. For example, increased font size, text box size, and padding can help users who might have
                    trouble using their hands. Including the autofocus attribute automatically puts the cursor into the first field. This makes it so that the user does not need to
                    switch from their mouse to keyboard quite as often. Including a required attribute into certain fields can be helpful to let the user know which fields are required
                    and which ones are optional. This can be styled further by including CSS properties to color the required fields differently, or however the programmer wishes. The
                    pattern attribute can be used in inputs to specify and help the user understand what kind of input they may need to enter. Some examples of using this can include
                    emails or passwords. The placeholder attribute can be used in inputs to describe what should be entered by the user. While there are numerous other ways to improve
                    usability, these are all basic examples of important properties to include.
                </p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>
                    Node is an open source runtime environment that can be used to develop server-side or networking applications. Node also provides a library which contains many different
                    JavaScript modules, all of which can be used to simplify the process of web development. Node can help us with tasks such as error handling, module managing, and more.
                    Npm is included with Node and is essentially a package manager. In order to install and manage various packages that come with Node, npm will be used.
                    Express is a framework which provides Application Programming Interface (API)s of many different common tasks that web applications typically perform.
                    Express can be used to get, post, and delete data, and even define the ports or routes that the data takes. While these technologies all might serve different purposes,
                    web developers can use them in combination to make it easier to perform tasks without having to build it from scratch.
                </p>
            </article>
            <article id="javascript">
                <h3>About JavaScript</h3>
                <p>
                    In JavaScript, the main data types are numbers, boolean values, strings, symbols, special values, and objects. Boolean values can be either false or true, and 
                    special values can include undefined and null. With objects, we can refer to an acronym known as CRUD. This acronym stands for create, read, update, and delete.
                    With create and update, we can add or update a property using the . operator on a given variable when assigning it. We can read properties with the . operator
                    as well as using bracket notation. Finally, we can delete properties by using the delete operator. In JavaScript, arrays must contain objects with the properties
                    of string data types. The elements can be accessed by using bracket indexing, and values in the array can be of any type. We can use JSON to map objects to a string
                    in JSON format, along with creating objects from strings in JSON format. In JavaScript, we can use conditionals to make desired decisions. For example, an if statement
                    could be used to execute some sort of code if some expression were to be true or false. Loops in JavaScript can be used to execute code based on set conditions
                    of objects which have properties that can be manipulated with CRUD. In JavaScript, objects contain name-value pairs and have an identity, state, and behavior.
                    Functional programming involves the usage of functions to perform given tasks. In JavaScript, functions are first-class, which means that you can assign functions
                    to variables, return a value, and have functions receive values or functions as arguments.
                </p>
            </article>
            <article id="domChanges">
                <h3>Testing DOM Changes</h3>
                <p>
                    Developers may want to update the DOM of a page using JavaScript and Express in order to make the website more interactive or dynamic. With the help of JavaScript and Express,
                    we can manipulate the DOM in order to show different elements, change styles, and make a variety of different changes. For example, you could use JavaScript to add a new row
                    to a table whenever the user clicks a button. With the help of event handlers in JavaScript, we can wait for the user to click the button, and then manipulate the DOM as needed
                    based on the desired changes and data that we are working with. Express is a useful framework to use in order to help with route handling, middleware functions, and dealing with
                    HTTP requests/responses.
                </p>
            </article>
        </>
    );
}

export default TopicsPage;