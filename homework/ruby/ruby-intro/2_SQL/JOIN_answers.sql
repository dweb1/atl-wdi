1. SELECT matchid, player FROM goal WHERE teamID = 'GER'

2. SELECT DISTINCT id,stadium,team1,team2 FROM game INNER JOIN goal ON game.id = goal.matchid WHERE game.id = 1012;

3. SELECT player, teamid,stadium, mdate FROM game JOIN goal ON (id=matchid) WHERE teamid = 'GER';

4. SELECT team1, team2, player FROM game JOIN goal ON (id=matchid) WHERE player LIKE 'Mario%';

5. SELECT player, teamid, coach, gtime FROM goal JOIN eteam on teamid=id WHERE gtime<=10

6. SELECT mdate, teamname FROM game JOIN eteam ON (team1=eteam.id) WHERE eteam.coach = 'Fernando Santos';

7. SELECT player FROM game INNER JOIN goal ON game.id = goal.matchid WHERE stadium LIKE 'National Stadium%'

8. SELECT DISTINCT player FROM game JOIN goal ON matchid = id WHERE (team1='GER' or team2='GER') AND NOT goal.teamid = 'GER';

9. SELECT teamname, COUNT(player) goals_scored FROM eteam JOIN goal ON eteam.id = goal.teamid GROUP BY teamname

10. SELECT stadium, COUNT(player) goals_scored FROM game JOIN goal ON game.id = goal.matchid GROUP BY game.stadium;

11. SELECT id, mdate, COUNT(player) FROM game JOIN goal ON game.id = goal.matchid WHERE (game.team1 = 'POL' OR game.team2 = 'POL') GROUP BY game.id, game.mdate ORDER BY game.id;

12. SELECT id, mdate, COUNT(player) FROM game JOIN goal ON game.id = goal.matchid WHERE (goal.teamid = 'GER') GROUP BY game.id, game.mdate ORDER BY game.id;

13.