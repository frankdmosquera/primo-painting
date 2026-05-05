# TERMINAL STUFF

## Every Time You Finish Work in frank_dev — Do This:

### Make sure your work is committed in frank_dev

git checkout frank_dev
git add .
git commit -m "caved 2 files, cheking redeploy issue"

If you're already committed, skip this part.

### Reset main to match frank_dev

git checkout main
git reset --hard frank_dev

### Push main to GitHub

git push origin main
git checkout frank_dev

###

this is when pulling updated main branch first
git checkout main  
git pull origin main


###
git config --global user.email "heguer76@gmail.com"
git config --global user.name "heguerack"