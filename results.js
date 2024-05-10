// // to show the current date & time
// function getCurrentDateTime() {
//     const now = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
//     document.getElementById('currentDateTime').textContent = now.toLocaleString('en-US', options);
//   }
//   getCurrentDateTime();
//   setInterval(getCurrentDateTime, 1000);
  
//   document.querySelector('.menu-icon').addEventListener('click', function() {
//     const menu = document.querySelector('.navbar ul');
//     menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
//   });
  
//  // second api 
//   const cricScore_URL='https://api.cricapi.com/v1/currentMatches?apikey=6af0b2b2-d2aa-413f-8a06-fd02cf9e1ee9&offset=0';
//   async function results(){
//     try{
//       const cricScore=await fetch(cricScore_URL);
//       const cricScoreData=await cricScore.json();
//         console.log(cricScoreData);
// //       const allData=cricScoreData['data'];
// //       const matchesContainerSecond = document.getElementById('results');
// //       const matchesContainerfirst = document.getElementById('upcoming-matches');
// //       const matchInfoSecond = document.createElement('div');
    

// //       // to sort the data related to dates
// //       // Function to compare dates with current date
// // const compareDatesWithCurrent = (a, b) => {
// //   const currentDate = new Date();
// //     const dateA = new Date(a['dateTimeGMT']);
// //     const dateB = new Date(b['dateTimeGMT']);
// //     //console.log(currentDate);
// //     // Calculate differences in milliseconds
// //     const differenceA = dateA - currentDate;
// //     const differenceB = dateB - currentDate;

// //     // Return positive if a is future, negative if b is future
// //     return differenceA - differenceB;
// // };

// // // Sort the array by date with respect to the current date
// // allData.sort(compareDatesWithCurrent);

// // function extractTextInBrackets(inputString) {
// //     // Regular expression to match text inside square brackets
// //     const regex = /\[(.*?)\]/;

// //     // Extract the text inside square brackets
// //     const match = regex.exec(inputString);

// //     // If a match is found, extract the text (group 1)
// //     const extractedText = match ? match[1] : null;

// //     return extractedText;
// // }

// // allData.forEach(oneMatch => {
   
// //     // Parse the dateTimeGMT string into a Date object
// // const dateTimeGMT = new Date(oneMatch["dateTimeGMT"]);
// // function istDateTime(a) {

// // // Create a Date object with the given date and time
// // // Create a Date object with the given date and time
// // const date = new Date(a);

// // // Convert the date to local time zone
// // const localTime = date.toLocaleString(undefined, { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });

// // return localTime;
  
// // }
// // const matchlocaldatetime=istDateTime(dateTimeGMT);
// // console.log(matchlocaldatetime+"--------------");
// // const responseYear = dateTimeGMT.getFullYear();
// // const responseMonth = dateTimeGMT.getMonth() + 1; // Month starts from 0, so add 1
// // const responseDay = dateTimeGMT.getDate();


// // // Get the current date and time
// // const currentDate = new Date();
// // //console.log(dateTimeGMT,currentDate); 
// // const currentYear = currentDate.getFullYear();
// // const currentMonth = currentDate.getMonth() + 1; // Month starts from 0, so add 1
// // const currentDay = currentDate.getDate();

// //     // Create a new div element for each match
// //     const matchInfoSecond = document.createElement('div');
// //     matchInfoSecond.classList.add('card');
// //     if (responseYear > currentYear || (responseYear === currentYear && responseMonth > currentMonth) || (responseYear === currentYear && responseMonth === currentMonth && responseDay >= currentDay)) {
// //     // Filtered data based on the condition
// //     console.log("upcoming matches------>",oneMatch);
// //     const formattedDayDate = String(responseDay).padStart(2, '0');
// //     const matchStartDate=formattedDayDate+"-"+responseMonth+"-"+responseYear;
// //     const matchID = oneMatch['id'];
// //     const matchType = oneMatch['matchType'];
// //     const matchSeries = oneMatch['series'];
// //     const matchStatus = oneMatch['ms'];
// //     const matchStatusCurrent = oneMatch['status'];
// //     const team1Name = extractTextInBrackets(oneMatch['t1']);
// //     const team1Logo = oneMatch['t1img'];
// //     const team1Run = oneMatch['t1s'];
// //     const team2Name = extractTextInBrackets(oneMatch['t2']);
// //     const team2Logo = oneMatch['t2img'];
// //     const team2Run = oneMatch['t2s'];
// //     const matchDate= oneMatch['dateTimeGMT'];
// //     //console.log(matchID, matchType);
// //      // Set the inner HTML for the match
// //      var i=0;
    
// //     if(matchStatus =='results'){
// //       i=1;
// //       matchInfoSecond.innerHTML = `<a href="?${matchID}/${team1Name}vs${team2Name}" class="score-card">
// //         <div class="team-logo">
// //             <img src="${team1Logo}" alt="Team A Logo" height="15px" width="15px">
// //             <p class="team-name-below">${team1Name}</p>
// //         </div>
// //         <div class="match-details">
// //           <div class="match-info">
// //                 <span class="info-label" style="color:red;">Live</span>
// //             </div>
// //             <div class="match-info">
// //                 <span class="info-label">${matchStatusCurrent}</span>
// //             </div>
// //             <div class="match-info">
// //               <span class="info-value">${team1Name} ${team1Run}</span>
// //             </div>
// //             <div class="match-info">
// //               <span class="info-value">${team2Name} ${team2Run}</span>
// //             </div>
// //         </div>
// //         <div class="team-logo">
// //             <img src="${team2Logo}" alt="Team B Logo" height="15px" width="15px">
// //             <p class="team-name-below">${team2Name}</p>
// //         </div>
// //         </a>
// //     `;
// //      // Append the matchInfoSecond to matchesContainerSecond
// //      matchesContainerSecond.appendChild(matchInfoSecond);
// //     }
   
// // } 
   
   
// // });
// // if(i==1)
// // {
// //   const matchesContainerSecond = document.getElementById('live-matches');
// //   const matchInfoSecond = document.createElement('div');
// //   matchInfoSecond.innerHTML ='<div style="text-align:center;height:35vh;display:flex;align-items:center;justify-content:center;font-weight:900;">There are no matches at the moment. Please check back later.</div>';
// //   matchesContainerSecond.appendChild(matchInfoSecond);
// // }

     

//     }
//     catch(error){
//     //   const matchesContainerSecond = document.getElementById('live-matches');
//     //   const matchInfoSecond = document.createElement('div');
//     //   matchInfoSecond.innerHTML ='<div style="text-align:center;height:35vh;display:flex;align-items:center;justify-content:center;font-weight:900;">There are no matches at the moment. Please check back later.</div>';
//     //   matchesContainerSecond.appendChild(matchInfoSecond);
// console.error('Error fetching live matches:', error);

//     }

//   }

// // Call the function to fetch live matches when the page loads
// window.onload = results;
