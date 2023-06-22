import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage() {
    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setResults(response.results);
            })
            .catch(() => {
                alert("Random user generator server is currently down. Please try again.");
            });
        };
            return (
                <>
                <h2>List of Staff</h2>
            <article>
                <p>
                    This page will fetch the information from the random person API and add to the staff list, with the fetched information.
                </p>
                <p>    
                    Click on the "Append" button to add 10 people from the 
                    <a href="https://randomuser.me/" target="_blank"> Random User Generator </a>website.
                </p>
            <div id="staffContainer">
                <div><button id="fromServer" onClick={fetchResults} value="append-staff">Append</button></div>
                <h3>Results:</h3>
                <table id="staffTable">
                    <caption>Staff Information</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="randomUser">
                        {results.map((person, i) => <StaffRow person={person} key={i}/>)}
                    </tbody>
                </table>
            </div>
            </article>
                </>
            )
}

export default StaffPage;