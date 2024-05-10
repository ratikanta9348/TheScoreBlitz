function test(event) {
    event.preventDefault();
     // Get the necessary data from the clicked link
     const matchID = event.currentTarget.id;
     console.log(matchID);
     const team1Name = event.currentTarget.querySelector('.team-name-below').textContent;
     const team2Name = event.currentTarget.querySelectorAll('.team-name-below')[1].textContent;
     const cricScorecardURL = 'https://api.cricapi.com/v1/match_info';
     const apiKey = '6af0b2b2-d2aa-413f-8a06-fd02cf9e1ee9';
     
     const match_info_URL = `${cricScorecardURL}?apikey=${apiKey}&id=${matchID}`;
     const matchInfoHTML=document.getElementById('match-info');
     
     fetch(match_info_URL)
       .then(response => response.json())
       .then(data => 
      {
        const orgInfo=data['data'];
        console.log(orgInfo);
        const matchName=orgInfo['name'];
        const tossWinner=orgInfo['tossWinner'];
        const tossChoice=orgInfo['tossChoice'];
        const matchVenue=orgInfo['venue'];
        const scoreArray=orgInfo['score'];
        if(orgInfo['matchStarted'] == true && orgInfo['matchEnded'] == false)
          {
            console.log("hiiii");
           
            if(scoreArray.length == 1)
              {
                const inning1=scoreArray[0]['inning'];
                const run=scoreArray[0]['r'];
                const wicket=scoreArray[0]['w'];
                const over=scoreArray[0]['o'];
                fetch(`https://api.cricapi.com/v1/match_scorecard?apikey=6af0b2b2-d2aa-413f-8a06-fd02cf9e1ee9&id=${matchID}`)
                .then(response => response.json())
                .then(dataScore => {
                    //const scoreCardArray = dataScore['data']; // Corrected variable name
                   // console.log("ScoreCard", dataScore['data']['scorecard']);
                    const scoreCard=dataScore['data']['scorecard'][0];
                    console.log(scoreCard);
                  
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
                
                matchInfoHTML.innerHTML=`<h4 style="color:gray;text-size:12px;">${matchName}</h4><p style="color:gray;text-size:8px;">Venue - ${matchVenue}</p>
                <h3>${inning1} ${run}/${wicket} (${over} Ovs)</h3>
                <h3>${tossWinner} won the toss and selected to ${tossChoice} first.</h3>
                <table style="border-collapse: collapse;">
                <tr style="background:gray;color:white;>${inning1} ${run}/${wicket} (${over} Ovs)</tr>
                <tr style="background:gray;font-weight:900;">
                  <td>Batter</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>R</td>
                  <td>B</td>
                  <td>4s</td>
                  <td>6s</td>
                  <td>SR</td>
                </tr>
                <!-- Add more rows with data here -->
              </table>
                `;
                console.log("byy");
              }
              else if (scoreArray.length == 2){
                const inning1=scoreArray[0]['inning'];
                const run1=scoreArray[0]['r'];
                const wicket1=scoreArray[0]['w'];
                const over1=scoreArray[0]['o'];
                const inning2=scoreArray[0]['inning'];
                const run2=scoreArray[0]['r'];
                const wicket2=scoreArray[0]['w'];
                const over2=scoreArray[0]['o'];
                matchInfoHTML.innerHTML=`<h4 style="color:gray;text-size:12px;">${matchName}</h4><p style="color:gray;text-size:8px;">Venue - ${matchVenue}</p>
                <h3>${inning1} ${run1}/${wicket1} (${over1} Ovs)</h3>
                <h3>${inning2} ${run2}/${wicket2} (${over2} Ovs)</h3>
                <h3>${tossWinner} won the toss and selected to ${tossChoice} first.</h3>
                <a href="">Scorecard</a> 
                `;
              }
              else{
                matchInfoHTML.innerHTML=`<h4 style="color:gray;text-size:12px;">${matchName}</h4><p style="color:gray;text-size:8px;">Venue - ${matchVenue}</p>   
                <h3>${tossWinner} won the toss and selected to ${tossChoice} first.</h3>
                <a href="">Scorecard</a> 
                `;

              }
          }
          else{
            matchInfoHTML.innerHTML=`<h4>${matchName}</h4><h4>${matchVenue}</h4>`;
            const SquadAPI_URL = `https://api.cricapi.com/v1/match_squad?apikey=6af0b2b2-d2aa-413f-8a06-fd02cf9e1ee9&id=${matchID}`;

try {
  fetch(SquadAPI_URL)
    .then(response => response.json())
    .then(responseData => {
      for (let i = 0; i < responseData.data.length; i++) {
        const element = responseData.data[i];
        console.log("Team-", element.shortname);
        const players = element.players;
        if(i == 0)
          {
            // const firstTeam=element.shortname;
            var firsttablerows='';
            players.forEach(player => {
              firsttablerows=firsttablerows+`<tr><td><img src="${player.playerImg}" alt="${player.name} photo"><h3>${player.name}</h3></td><td>${player.role}</td><td>${player.battingStyle}</td><td>${player.bowlingStyle}</td><td>${player.country}</td></tr>`
              console.log(`Name- ${player.name}, Role-${player.role}, Batting Style- ${player.battingStyle}, Bowling Style- ${player.bowlingStyle}, Country- ${player.country}`);
            });
            matchInfoHTML.innerHTML=`
            <h3>${team1Name} Player List</h3><table style="border-collapse: collapse;width: 100%;"><thead><th>Player</th><th>Role</th><th>Batting</th><th>Bowling</th><th>Country</th></thead><tbody>${firsttablerows}</tbody></table><br>`;
          }
          else if(i == 1)
            {
              // const secondTeam=element.shortname;
              var secondtablerows='';
              players.forEach(player => {
                secondtablerows=secondtablerows+`<tr><td><img src="${player.playerImg}" alt="${player.name} photo"><h3>${player.name}</h3></td><td>${player.role}</td><td>${player.battingStyle}</td><td>${player.bowlingStyle}</td><td>${player.country}</td></tr>`
                console.log(`Name- ${player.name}, Role-${player.role}, Batting Style- ${player.battingStyle}, Bowling Style- ${player.bowlingStyle}, Country- ${player.country}`);
              });
              matchInfoHTML.innerHTML=`<h3>${team2Name} Player List</h3><table style="border-collapse: collapse;width: 100%;"><thead><th>Player</th><th>Role</th><th>Batting</th><th>Bowling</th><th>Country</th></thead><tbody>${secondtablerows}</tbody></table>`;
            }
        
      }
    })
    .catch(error => console.log("error occured.", error));
} catch (error) {
  console.log("error occured.", error);
}
          }
         console.log("venuee",orgInfo['venue']); // Log the JSON response to the console

      })
       .catch(error => {
         console.error('Error fetching data:', error);
       });

      //  const fantasySquad = 'https://api.cricapi.com/v1/match_squad';
       
      //  const matchSquadURL = `${fantasySquad}?apikey=${apiKey}&id=${matchID}`;
       
      //  fetch(matchSquadURL)
      //    .then(response => response.json())
      //    .then(output => {
      //       const teamPlayers=output['data'];
      //      console.log("Match Squad",output); // Log the JSON response to the console
      //    })
      //    .catch(error => {
      //      console.error('Error fetching data:', teamPlayers    );
      //    });


         const live=document.getElementById('live-matches');
         live.style.display='none';
         const upcoming=document.getElementById('upcoming-matches');
         upcoming.style.display='none';
         matchInfoHTML.style.display='block';
 
    // 
} // Construct the URL with query parameters
    //  const queryParams = new URLSearchParams();
    //  queryParams.append(matchID, `${team1Name}vs${team2Name}`);
     
    //  // Get the current URL and append the query parameters
    //  const url = new URL(window.location.href);
    //  url.search = queryParams.toString();
     
    //  // Navigate to the URL with query parameters
    //  window.location.href = url.toString();
     