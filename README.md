# Matostheque

This repository is a **web-based application** tailored for members of the “Laboratoire Interdisciplinaire de Physique” at Université Grenoble Alpes. This system serves as a virtual material library, facilitating the sharing, lending, and borrowing of materials among users. 

Its primary goal is to streamline the management and accessibility of laboratory resources within the research community.

## Getting Started
**Key Points**

**Technical coverage**:
- **Backend architecture**: Describes the server-side infrastructure, outlining how data is managed and accessed through APIs (i.e.; Matostheque folder).
- **Frontend Structure**: Details the client-side implementation, including user interfaces and interactions design (i.e.; fronttheque folder -- contains Next.js and React.js codes).

## Quick start
To deploy this application for the first time **Notice** :
- Refer to the file **deploy.sh** for further information.
- For production level check the file **gunicorn_config.py**.
- In addition, in case you are deploying this application using Ubuntu then change psycog2 to psycog2-binary in the requirements.txt file


## File Structure
Within the download file, you would find the following directories and files :
<details>
<summary>Click to expand</summary>

```text
── Matostheque_App/
    ├── deploy.sh
    ├── LICENSE.md
    ├── manage.py
    ├── package.json
    ├── requirements.txt
    ├── .pydevproject
    ├── assets/
    ├── doc/
    ├── fronttheque/
    │   ├── jsconfig.json
    │   ├── LICENSE.md
    │   ├── matos_front.sh
    │   ├── next.config.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .editorconfig
    │   ├── .eslintrc.json
    │   ├── .gitattributes
    │   ├── .gitignore
    │   ├── public/
    │   │   ├── manifest.json
    │   │   └── assets/
    │   │       ├── avatars/
    │   │       ├── errors/
    │   │       └── logos/
    │   └── src/
    │       ├── components/
    │       │   ├── logo.js
    │       │   ├── scrollbar.js
    │       │   ├── severity-pill.js
    │       │   └── toast.js
    │       ├── contexts/
    │       │   ├── auth-context.js
    │       │   └── notification-context.js
    │       ├── data/
    │       │   ├── static_data.js
    │       │   └── code_nacre/
    │       │       └── code_nacre.json
    │       ├── documents/
    │       │   ├── material-export-document.js
    │       │   └── material-qrcode-document.js
    │       ├── guards/
    │       │   └── auth-guard.js
    │       ├── hocs/
    │       │   └── with-auth-guard.js
    │       ├── hooks/
    │       │   ├── loan-detail-handlers.js
    │       │   ├── loan-handlers.js
    │       │   ├── new-loan-handlers.js
    │       │   ├── new-material-handlers.js
    │       │   ├── use-auth.js
    │       │   ├── use-nprogress.js
    │       │   ├── use-popover.js
    │       │   └── use-selection.js
    │       ├── layouts/
    │       │   ├── auth/
    │       │   │   └── layout.js
    │       │   ├── dashboard/
    │       │   │   ├── account-popover.js
    │       │   │   ├── config.js
    │       │   │   ├── layout.js
    │       │   │   ├── notification-popover.js
    │       │   │   ├── side-nav-item.js
    │       │   │   ├── side-nav.js
    │       │   │   └── top-nav.js
    │       │   └── public/
    │       │       └── public-layout.js
    │       ├── pages/
    │       │   ├── 404.js
    │       │   ├── _app.js
    │       │   ├── _document.js
    │       │   ├── account.js
    │       │   ├── comments.js
    │       │   ├── index.js
    │       │   ├── loans.js
    │       │   ├── materials.js
    │       │   ├── myloans.js
    │       │   ├── mymaterials.js
    │       │   ├── notifications.js
    │       │   ├── create/
    │       │   │   ├── create-loan.js
    │       │   │   └── create-material.js
    │       │   ├── details/
    │       │   │   ├── loan-detail/
    │       │   │   │   └── [loanId].js
    │       │   │   └── material-detail/
    │       │   │       └── [materialId].js
    │       │   └── public/
    │       │       ├── [materialId].js
    │       │       └── emailValidated.js
    │       ├── sections/
    │       │   ├── account/
    │       │   │   ├── account-profile-details.js
    │       │   │   └── account-profile.js
    │       │   ├── comments/
    │       │   │   ├── comments-thread.js
    │       │   │   └── create-comment.js
    │       │   ├── create-loan/
    │       │   │   └── new-loan-card.js
    │       │   ├── create-material/
    │       │   │   ├── new-material-details.js
    │       │   ├── loader/
    │       │   │   └── loader-card.js
    │       │   ├── loan/
    │       │   │   ├── loans-search.js
    │       │   │   └── loans-table.js
    │       │   ├── loan-detail/
    │       │   │   └── loan-detail-overview.js
    │       │   ├── material-detail/
    │       │   │   ├── material-detail-calendar.js
    │       │   │   ├── material-detail-edit.js
    │       │   │   ├── material-detail-overview.js
    │       │   │   └── material-detail-viewer.js
    │       │   ├── materials/
    │       │   │   ├── materialcard.js
    │       │   │   ├── materialsearch.js
    │       │   │   └── materialtable.js
    │       │   ├── notification/
    │       │   │   └── notification-item.js
    │       │   ├── notification-pop/
    │       │   │   └── notification-card.js
    │       │   └── overview/
    │       │       ├── overview-budget.js
    │       │       ├── overview-latest-loans.js
    │       │       ├── overview-list-last-materials.js
    │       │       ├── overview-notifications.js
    │       │       ├── overview-tasks-progress.js
    │       │       ├── overview-total-materials.js
    │       │       └── overview-total-profit.js
    │       ├── theme/
    │       │   ├── colors.js
    │       │   ├── create-components.js
    │       │   ├── create-palette.js
    │       │   ├── create-shadows.js
    │       │   ├── create-typography.js
    │       │   └── index.js
    │       └── utils/
    │           ├── apply-pagination.js
    │           ├── config.js
    │           ├── create-emotion-cache.js
    │           ├── create-resource-id.js
    │           ├── get-formatted-date.js
    │           ├── get-initials.js
    │           ├── get-time-difference.js
    │           └── notification-config.js
    ├── logs/
    ├── Matostheque/
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── custom_auth.py
    │   ├── custom_exception.py
    │   ├── forms.py
    │   ├── managers.py
    │   ├── serializers.py
    │   ├── signals.py
    │   ├── tasks.py
    │   ├── tests.py
    │   ├── urls.py
    │   ├── __pycache__/
    │   ├── controllers/
    │   │   ├── emails_controller.py
    │   │   ├── loans_controller.py
    │   │   ├── materials_controller.py
    │   │   ├── owner_controller.py
    │   │   ├── session_controller.py
    │   │   ├── user_controller.py
    │   │   └── __pycache__/
    │   ├── management/
    │   ├── migrations/
    │   ├── models/
    │   │   ├── __init__.py
    │   │   ├── comment_model.py
    │   │   ├── loan_model.py
    │   │   ├── material_model.py
    │   │   ├── notification_model.py
    │   │   ├── owner_model.py
    │   │   ├── user_model.py
    │   │   ├── __pycache__/
    │   │   └── templates/
    │   │       └── emails/
    │   │           ├── loanactivation_email.html
    │   │           ├── loanapproved_email.html
    │   │           ├── loannearingend_email.html
    │   │           ├── loanvalidation_email.html
    │   │           ├── materialreturn_email.html
    │   │           └── signup_email.html
    │   ├── templates/
    │   │   └── emails/
    │   │       ├── loanactivation_email.html
    │   │       ├── loanapproved_email.html
    │   │       ├── loannearingend_email.html
    │   │       ├── loanvalidation_email.html
    │   │       ├── materialreturn_email.html
    │   │       └── signup_email.html
    │   └── views/
    │       ├── comment_views.py
    │       ├── loan_views.py
    │       ├── material_views.py
    │       ├── notification_views.py
    │       ├── owner_views.py
    │       ├── user_views.py
    │       └── __pycache__/
    ├── matostheque_venv/
    └── MatosthequeRestApis/
        ├── __init__.py
        ├── settings.py
        ├── urls.py
        ├── wsgi.py
        └── __pycache__/
```
</details> 

## Nginx configuration (Backend)
**Key Points**
This step is for users who are not used to NGINX 
<details>
<summary>Click to expand</summary>

```text
Before installing, check if your operating system and architecture are supported

sudo apt update && sudo apt install curl gnupg2 ca-certificates lsb-release 
sudo apt update -y && sudo apt install nginx
sudo ufw app list
sudo ufw allow 'Nginx HTTP'

## Start NGINX and verify that NGINX is up and running using curl command 
sudo nginx
curl -I 127.0.0.1

## Expected output:

HTTP/1.1 200 OK
Server: nginx/1.29.0

## Setting Up Server Blocks
### Now, let's create a server block with the correct directives that point to your our application. 
### Instead of modifying the default configuration file directly /etc/nginx/sites-available/server-matostheque.conf
### Change **port-number** to correspond with that of **settings.py**, in the section CORS_ORIGIN_WHITELIST

server {
    listen 8080;
    server_name your_server_name;

    location / {
         return 301 https://$server_name$request_uri/;
    }
}

server {

    listen 443 ssl; #Listen on 443 for HTTPS requests
    server_name your_server_name;

    # SSL certificate path: TODO: CHANGE TO SOMETHING ELSE (NOT RELATED TO USER HOME)
    ssl_certificate 
    ssl_certificate_key 

    # /home/sginfo/CERTIFICATS
    location /matostheque {
        # Configuration for proxying requests to the frontend running on port >
        proxy_pass http://127.0.0.1:**port-number**;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        proxy_buffers 256 16k;
        proxy_buffer_size 16k;
        client_max_body_size 5M;
        client_body_timeout 60;
        send_timeout 300;
        lingering_timeout 5;
        proxy_connect_timeout 90;
        proxy_send_timeout 300;
        proxy_read_timeout 90s;

    }


    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Include CSRF token cookie for API requests
        proxy_set_header X-CSRFToken $cookie_csrftoken;

        # Add CORS headers
        add_header Access-Control-Allow-Origin *;  # For production, replace * with specific origins
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'Origin, Content-Type, Accept, Authorization';

        # For handling preflight requests
        if ($request_method = OPTIONS) {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'Origin, Content-Type, Accept, Authorization';
            add_header Content-Length 0;
            add_header Content-Type text/plain;
            return 204;
        }
    }

     location /admin/ {
        proxy_pass http://127.0.0.1:8000/admin/;  # admin panel running on the same port
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # Include CSRF token cookie for admin panel requests
        proxy_set_header X-CSRFToken $cookie_csrftoken;

    }

    location /static/ {
        alias "/home/your_account_name/Matostheque_App/assets/";
    }
}

```
</details> 

## Documentation
See [Documentation Index](https://gricad-gitlab.univ-grenoble-alpes.fr/duffouvi/matostheque/-/blob/main/doc/README.md)




