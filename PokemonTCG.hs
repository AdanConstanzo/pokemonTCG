#!/bin/bash
cd ~/Projects/pokemonTCG/

code .

tab=" --tab"
options=()

cmds[1]="mongod --dbpath ~/data/db/ --port 27017"

cmds[2]="sleep 4 && mongo"

cmds[3]="gulp dev"

cmds[4]="wmctrl -r :ACTIVE: -b toggle,maximized_vert,maximized_horz && echo Get_to_work!"

for i in 1 2 3 4; do
options+=($tab -e "bash -c '${cmds[i]}; bash'")
done

gnome-terminal "${options[@]}"

google-chrome --new-window http://localhost:3000/#/


exit 0