#/bin/sh

cd FTDocuments
sh ../update.sh &
cd MeetFlowtime
npm run serve -- --host 0.0.0.0
