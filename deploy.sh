#!/bin/bash

# Navigate to your Django project directory
# Change "user_name" to the account on your computer!!!
cd /home/user_name/Matostheque_App/

# Install/update project dependencies (if needed)
pip install -r requirements.txt

# Perform database migrations
python3 manage.py makemigrations

# Apply database migrations
python3 manage.py migrate Matostheque

# Need to find another way for when the folder is too big
# Move the images directory outside of the static files directory
mv assets/images /home/user_name/matostheque_images_backup

# Change ownership
sudo chown -R user_name:user_name /home/user_name/Matostheque_App/assets

# Set permissions to ensure that the assets folder and its contents can be deleted
chmod -R u+w assets

# Collect static files (if needed)
python3 manage.py collectstatic --noinput --clear 

# Move the images directory back to its original location
mv /home/user_name/matostheque_images_backup assets/images

# Set the DJANGO_ENV environment variable
export DJANGO_ENV=production

# Start the Django application using Gunicorn
gunicorn -c gunicorn_config.py MatosthequeRestApis.wsgi &

# Navigate to the front-end directory
cd /home/user_name/Matostheque_App/fronttheque/

# Install front-end dependencies (if needed)
npm install

# Set NODE_ENV to production
export NODE_ENV=production

# Build the front-end application with NODE_ENV set to production
npm run build

# Start the front-end server
# The "&" symbol execute the command in the background in a subshell
npm run start &
